import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from '../../models';
import { AuthService } from '../../services/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: UserLogin;
  public loading: Boolean;
  public error: String;
  public returnUrl: String;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    this.login = new UserLogin();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  doLogin(login: UserLogin): void {
    this.loading = true;
    this.error = null;

    this.authService.login(this.login)
      .subscribe((response) => {
        try {
          if ((response && response != null) && (response.status !== 200)) {
            const _resp = response.json || JSON.stringify(response);
            this.loading = false;
            this.error = response.statusText;
          }

          const token = this.extractAuthHeader(this.login.userName, response);

          if (token) {
            localStorage.setItem('authToken', JSON.stringify({ userName: this.login.userName, 'token': token }))
            this.router.navigate([this.returnUrl]);
          } else {
            this.loading = false;
            localStorage.removeItem('authToken');
            this.error = 'Unknown error occured';
          }

        } catch (err) {
          this.loading = false;
          this.error = err.toString();
        }
      }, (error) => {
        this.loading = false;
        this.error = error.toString();
      });
  }

  private extractAuthHeader(userName: String, response: Response) {
    if (response.headers.has('authorization')) {
      const token = response.headers.get('authorization');
      return token;
    } else {
      return null;
    }
  }

}
