import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { UserListComponent } from './componentes/user-list/user-list.component';
import { CadastroClienteComponent } from './componentes/cadastro-cliente/cadastro-cliente.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
];
