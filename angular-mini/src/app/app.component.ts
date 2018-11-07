import { Component } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {

  title = 'World';

  usersnum = new Array(5);
  usersarr = ["1","2","3","4","5"];
  
  
}
