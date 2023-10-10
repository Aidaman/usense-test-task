import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PasswordStrengthComponent} from "./pages/password-strengh/password-strength.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'password-strength',
  },
  {
    path: 'password-strength', component: PasswordStrengthComponent,
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent,
  },
  {
    path: '**', redirectTo: 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
