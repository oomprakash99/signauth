import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider,SocialAuthService, SocialUser} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  array = [] as any;

  constructor(private socialAuthService: SocialAuthService,
    public routes:Router) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
      this.array.push(this.socialUser);
      console.log(this.array);
    });
  
  }
  
  
  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   console.log(this.socialUser);
  // }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
