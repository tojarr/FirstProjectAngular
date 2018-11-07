import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  size = 8;

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .pipe(
      map(response => response.json()),
      map(response => response.results),
      map(usersss => {
        return usersss.map(u => {
          return {
            name: u.name.first + " " + u.name.last,
            image: u.picture.large,
            geo: u.location.state + " " + u.location.city + " " + u.location.street
          }
        })
      })
      )
  }

  users = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' }
  ];

  setSize(size) {
    this.size = size;
  }

}
