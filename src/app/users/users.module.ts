import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageOldComponent } from './pages/user-page-old/user-page-old.component';
import { UserPageSignalsComponent } from './pages/user-page-signals/user-page-signals.component';


@NgModule({
  declarations: [
    UserPageOldComponent,
    UserPageSignalsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
