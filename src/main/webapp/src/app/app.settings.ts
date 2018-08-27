import { environment } from '../environments/environment';

export class AppSettings {
    public static envEndpoints = new Map([['local', 'http://localhost:8097'],
    [ 'dev', 'http://localhost:8097'],
    [ 'sit', '/jvcdpapi'],
    [ 'uat', '/jvcdpapi'],
    [ 'prod', '/jvcdpapi']]);
    public static API_ENDPOINT= AppSettings.envEndpoints.get(environment.env);
  }
