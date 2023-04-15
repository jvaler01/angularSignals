import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-page-signals',
  templateUrl: './user-page-signals.component.html',
  styleUrls: ['./user-page-signals.component.scss']
})
export class UserPageSignalsComponent implements OnInit{
  public usersService = inject( UsersService );

  public users = signal<User[]>([]);
  public currentPage = signal(1);
  
  public labelTotalUsers = computed( () => `Total de usuarios ${ this.users().length }`);

  ngOnInit(): void {
    this.loadPage( this.currentPage() );
  }

  loadPage( page: number ) {
    this.usersService.loadPage( page )
    .pipe(
      filter( users => users.length > 0 )
    )
    .subscribe( newUsers => {
      this.currentPage.set( page );
      this.users.update( currentUsers => [...currentUsers, ...newUsers ])
    })
  }
}
