import {Component, Injector, OnInit, ReflectiveInjector} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;
  userService: UserService;

  constructor() {
    // Create an _injector_ and ask for it to resolve and create a UserService
    // In our component’s constructor we are using a static method from ReflectiveInjector called
    // resolveAndCreate. That method is responsible for creating a new injector. The parameter we pass
    // in is an array with all the injectable things we want this new injector to know. In our case, we just
    // wanted it to know about the UserService injectable.
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    // use the injector to **get the instance** of the UserService
    this.userService = injector.get(UserService);
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is ', this.userName);
  }


}
