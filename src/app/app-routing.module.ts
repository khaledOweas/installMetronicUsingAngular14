import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './modules/main/components/home/home.component';

const routes: Routes = [
  // Auth Routing 
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        // canActivate: [AuthGuard],
        //  loadChildren: () => import('./Modules/main/main.module').then(x => x.MainModule) // Lazy loading .. 
        children: [

          
          {
            path: '',
            component: HomeComponent,
            children: [{
              path: 'home',
              component: HomeComponent
            }
            ]
          }
          // ,
          // {
          //   path: 'newspaper',
          //   component: NewspaperComponent
          // },
          // {
          //   path: 'section',
          //   component: SectionComponent
          // },
          // {
          //   path: 'notfound',
          //   component: NotFoundComponent,
          // }

        ]
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        //  loadChildren: () => import('./Modules/auth/auth.module').then(x => x.AuthModule)
        children: [
          {
            path: '',
            component: LoginComponent,
            children: [{
              path: 'auth',
              component: LoginComponent,
            }]
          }
        ]
      }
    ]
  },
  // Main Routing 
  // { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: 'main' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
