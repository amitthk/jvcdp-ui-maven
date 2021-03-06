node {
currentBuild.result = "SUCCESS"
  try{
   def pythonHome;
   def project_id;
   def ui_project_id;
   def artifact_id;
   def aws_s3_bucket_name;
   def aws_s3_bucket_region;
   def timeStamp;
   def baseDir;
   def deploy_env;
   def deploy_userid;
   def repo_bucket_credentials_id;
   def utility_scripts;
   def build_scripts;
   def deploy_scripts;

   
   stage('Checkout') {
      checkout scm;
   }
   stage('Initalize'){
       pythonHome = '/usr/local/bin/python3.6' ;
	   project_id = 'jvcdp';
	   ui_project_id = 'jvcdpui';
	   aws_s3_bucket_name = 'jvcdp-repo';
	   aws_s3_bucket_region = 'ap-southeast-1';
       utility_scripts = load "jenkins/utility.groovy";
	   timeStamp = utility_scripts.getTimeStamp();
       baseDir = pwd();
	   currentBranch = utility_scripts.getCurrentBranch();
	   deploy_env = utility_scripts.getTargetEnv(currentBranch);
	   deploy_userid='ec2-user';
       repo_bucket_credentials_id = 's3repoadmin';
       build_scripts = load "jenkins/build_scripts.groovy";
       deploy_scripts = load "jenkins/deploy_scripts.groovy";
   }

	stage('UI Cleanup'){
		build_scripts.ui_cleanup(baseDir, ui_project_id, deploy_env, timeStamp);
	}

	stage('UI Dependencies'){
		build_scripts.ui_get_dependencies(baseDir, ui_project_id, deploy_env, timeStamp);
	}

	stage('UI Code Analysis'){
		build_scripts.ui_code_analysis(baseDir, ui_project_id, deploy_env, timeStamp);
	}

	stage('UI Build'){
		build_scripts.ui_build(baseDir, ui_project_id, deploy_env, timeStamp);
	}

	stage('UI Archive')
	{
		build_scripts.ui_archive(baseDir, ui_project_id, deploy_env, timeStamp);
	}

    stage('UI Publish')
	{
        def stash_dist_path = "${ui_project_id}/release";
		build_scripts.publish_to_s3(ui_project_id, stash_dist_path, aws_s3_bucket_region, aws_s3_bucket_name, repo_bucket_credentials_id, timeStamp);
	}

    stage('Download Packages'){
        def dashboard_ui_package = "${ui_project_id}/releases/${ui_project_id}-${timeStamp}.tar.gz";
        def extras_params = "-v -e deploy_host=${deploy_env} -e remote_user=${deploy_userid} -e dashboard_ui_package=${dashboard_ui_package} -e jvcdp_api_package=${jvcdp_api_package}".toString();
		def playbook_to_run = 'ansible/download_packages.yaml';

        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
	    accessKeyVariable: 'AWS_ACCESS_KEY_ID', 
	    credentialsId: "${repo_bucket_credentials_id}", 
	    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])
        {
            withEnv(['ANSIBLE_HOST_KEY_CHECKING=False'])
            {
                ansiblePlaybook( 
                credentialsId: 'deployadmin',
                playbook: playbook_to_run,
                inventory: 'hosts', 
                extras: extras_params)
            }
        }
    }
    stage('Deploy UI'){
        def dashboard_ui_package = "${ui_project_id}/releases/${ui_project_id}-${timeStamp}.tar.gz";
        def extras_params = "-v -e deploy_host=${deploy_env} -e remote_user=${deploy_userid} -e dashboard_ui_package=${dashboard_ui_package}".toString();
		def playbook_to_run = 'ansible/deploy_dashboardui.yaml';

        withEnv(['ANSIBLE_HOST_KEY_CHECKING=False'])
        {
            ansiblePlaybook(
            credentialsId: 'deployadmin',
            playbook: playbook_to_run,
            inventory: 'hosts',
            extras: extras_params)
        }
    }

/*
    if(deploy_env=="all"){
    def envlist = ["dev", "sit", "uat", "staging","prod"];
        for(itm in envlist){
            stage("Checkpoint ${itm}"){
                deploy_scripts.checkAndDeploy(baseDir, itm, timeStamp, deploy_userid, project_id);
            }
        }
    }
    else{
        if(deploy_env!='none')
        {
            stage("Deploy to ${deploy_env}")
            {
                deploy_scripts.checkAndDeploy(baseDir, deploy_env, timeStamp, deploy_userid, project_id);
            }
        }
    }
*/
  } catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }
}
