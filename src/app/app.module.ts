import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeanceAuthentificationComponent } from './pages/seance-authentification/seance-authentification.component';
import { RouterModule, Routes } from '@angular/router';
import { SignatureComponent } from './pages/signature/signature.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService} from './services/auth.service';
import { AuthGuard} from './services/auth-guard.services';
import { HeaderAjoutComponent } from './components/header-ajout/header-ajout.component';
import { AddFindComponent } from './pages/add-find/add-find.component';
import { AddModifyComponent } from './pages/add-modify/add-modify.component';
import { AddCreateComponent } from './pages/add-create/add-create.component';
import { HeaderSignatureComponent } from './components/header-signature/header-signature.component';
import { PopupValidComponent } from './components/popup-valid/popup-valid.component';
import { AddSearchComponent } from './pages/add-search/add-search.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { PopupLoadComponent } from './components/popup-load/popup-load.component';
import { PopupUnvalidComponent } from './components/popup-unvalid/popup-unvalid.component';
import { PopupErrorComponent } from './components/popup-error/popup-error.component';
import { SessionsBeforeComponent } from './components/sessions-before/sessions-before.component';
import { SessionsActiveComponent } from './components/sessions-active/sessions-active.component';
import { SessionsAfterComponent } from './components/sessions-after/sessions-after.component';
import { SessionsSignComponent } from './pages/sessions-sign/sessions-sign.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    SeanceAuthentificationComponent,
    SignatureComponent,
    NotFoundComponent,
    HeaderAjoutComponent,
    AddSearchComponent,
    AddFindComponent,
    AddModifyComponent,
    AddCreateComponent,
    HeaderSignatureComponent,
    PopupValidComponent,
    HeaderAuthComponent,
    PopupLoadComponent,
    PopupUnvalidComponent,
    PopupErrorComponent,
    SessionsBeforeComponent,
    SessionsActiveComponent,
    SessionsAfterComponent,
    SessionsSignComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

  