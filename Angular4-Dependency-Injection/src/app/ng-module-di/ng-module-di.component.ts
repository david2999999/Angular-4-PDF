import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-ng-module-di',
  templateUrl: './ng-module-di.component.html',
  styleUrls: ['./ng-module-di.component.css']
})

export class NgModuleDiComponent implements OnInit {
  userName: string;

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`.
  constructor(private userService: UserService) {
    // empty because we don't have to do anything else!
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;
    console.log('Username is: ', this.userName);
  }
}

// Notice in the constructor above that we have made userService: UserService an argument to
// the UserDemoComponent. When this component is created on our page Angular will resolve and
// inject the UserService singleton. What’s great about this is that because Angular is managing the
// instance, we don’t have to worry about doing it ourselves. Every class that injects the UserService
// will receive the same singleton.
