import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SupportMainComponent } from './support-main/support-main.component';
const appRoutes: Route[] = [

  { path: 'login', component: LoginComponentComponent },
  { path: 'support', component: SupportMainComponent },
  { path: 'support/:id', component: SupportMainComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'setting' , component : LoginComponentComponent }
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

