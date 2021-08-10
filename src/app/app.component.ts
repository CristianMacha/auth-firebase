import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  authUser: string | undefined | null;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => this.authUser = auth?.displayName || ':|');
  }

  signinWithGoogle(): void {
    this.authService.authGoogle().then(
      auth => this.authUser = auth.user?.displayName
    )
  }

  signinWithGithub(): void {
    this.authService.authGithub().then(
      auth => this.authUser = auth.user?.displayName
    )
  }

  signinWithTwitter(): void {
    this.authService.authTwitter().then(
      auth => this.authUser = auth.user?.displayName
    )
  }

  signOut(): void {
    this.authService.signOut();
  }

}
