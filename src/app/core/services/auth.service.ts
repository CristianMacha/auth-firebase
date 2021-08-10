import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import app from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser: string | undefined | null;

  constructor(private afAuth: AngularFireAuth) {
  }

  authGoogle(): Promise<app.auth.UserCredential> {
    const googleAuthProvider = new app.auth.GoogleAuthProvider();
    return this.signinWithProvider(googleAuthProvider);
  }

  authTwitter(): Promise<app.auth.UserCredential> {
    const twitterAuthProvider = new app.auth.TwitterAuthProvider();
    return this.signinWithProvider(twitterAuthProvider);
  }

  authGithub(): Promise<app.auth.UserCredential> {
    const githubAuthProvider = new app.auth.GithubAuthProvider();
    return this.signinWithProvider(githubAuthProvider);
  }

  signinWithProvider(provider: app.auth.AuthProvider): Promise<app.auth.UserCredential> {
    return this.afAuth.signInWithPopup(provider);
  }

  signOut() {
    this.afAuth.signOut()
  }

}
