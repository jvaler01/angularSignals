import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageOldComponent } from './pages/user-page-old/user-page-old.component';
import { UserPageSignalsComponent } from './pages/user-page-signals/user-page-signals.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: UserPageOldComponent },
      { path: 'list-signals', component: UserPageSignalsComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
