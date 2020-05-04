import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '404', component: NotFoundComponent
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
