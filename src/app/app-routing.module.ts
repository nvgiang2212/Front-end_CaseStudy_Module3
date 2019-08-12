import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {GroupviewComponent} from './groupview/groupview.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'chat', component: GroupviewComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
