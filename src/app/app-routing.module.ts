import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
   path: "login",
   component: LoginComponent },
   { 
    path: "register",
    component: RegisterComponent },
    
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
