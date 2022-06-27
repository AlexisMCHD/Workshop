import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-seance-authentification',
  templateUrl: './seance-authentification.component.html',
  styleUrls: ['./seance-authentification.component.css']
})
export class SeanceAuthentificationComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth
        this.router.navigate(['session']);
      }
    );
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
