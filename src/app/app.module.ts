import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PasswordInputComponent} from './components/password-input/password-input.component';
import {
  PasswordStrenthIndicatorComponent
} from './components/password-input/password-strenth-indicator/password-strenth-indicator.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PasswordStrengthComponent} from "./pages/password-strengh/password-strength.component";
import {CardComponent} from './shared/components/card/card.component';
import {CardTitleComponent} from './shared/components/card-title/card-title.component';
import {CardContentComponent} from './shared/components/card-content/card-content.component';
import {CardLinkComponent} from './shared/components/card-link/card-link.component';
import {PasswordCheckerPipe} from './components/password-input/password-checker-pipe/password-checker.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrenthIndicatorComponent,
    PasswordStrengthComponent,
    PageNotFoundComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardLinkComponent,
    PasswordCheckerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
