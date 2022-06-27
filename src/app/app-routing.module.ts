import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeanceAuthentificationComponent } from './pages/seance-authentification/seance-authentification.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.services';
import { HeaderAjoutComponent } from './components/header-ajout/header-ajout.component';
import { AddFindComponent } from './pages/add-find/add-find.component';
import { AddModifyComponent } from './pages/add-modify/add-modify.component';
import { AddSearchComponent } from './pages/add-search/add-search.component';
import { AddCreateComponent } from './pages/add-create/add-create.component';
import { SignatureComponent } from './pages/signature/signature.component';
import { HeaderSignatureComponent } from './components/header-signature/header-signature.component';
import { PopupValidComponent } from './components/popup-valid/popup-valid.component';
import { SessionsSignComponent } from './pages/sessions-sign/sessions-sign.component';


const routes: Routes = [
  { path: '', component: SeanceAuthentificationComponent},
  { path: 'header',canActivate: [AuthGuard], component: HeaderComponent},
  { path: 'session', component: SessionsSignComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'header-sign',canActivate: [AuthGuard], component: HeaderSignatureComponent},
  { path: 'header-add',canActivate: [AuthGuard], component: HeaderAjoutComponent},
  { path: 'add-search', component: AddSearchComponent},
  { path: 'add-find', component: AddFindComponent},
  { path: 'add-modify', component: AddModifyComponent},
  { path: 'add-create', component: AddCreateComponent},
  { path: 'sign', component: SignatureComponent},
  { path: 'popup',canActivate: [AuthGuard], component: PopupValidComponent},
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
