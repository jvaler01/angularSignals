import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-page-old',
  templateUrl: './user-page-old.component.html',
  styleUrls: ['./user-page-old.component.scss']
})
export class UserPageOldComponent implements OnInit {
  public users: User[] = [];
  public currentPage: number = 1;
  
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.loadPage( this.currentPage );
  }
  
  loadPage( page: number ) {

    this.usersService.loadPage( page )
      .pipe(
        filter( users => users.length > 0 )
      )
      .subscribe( users => {
        console.log(users)
        this.currentPage = page;
        this.users = users;
      })
  }
}
