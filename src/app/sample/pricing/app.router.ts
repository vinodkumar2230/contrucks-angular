import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../../shared/index";
// import { NewjobpostComponent } from "../../newjobpost/newjobpost.component";

export const router: Routes = [
{
      path: '',
        loadChildren: './sample/sample.module#SampleModule',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    
    {path: 'truckdash', loadChildren: './truckdash/truckdash.module#TruckdashModule'},
    {path: 'truckerlogin', loadChildren: './truckerlogin/truckerlogin.module#TruckerloginModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'truckersignup', loadChildren: './truckersignup/truckersignup.module#TruckersignupModule'},
    // { path: 'kendogrid', component: KendogridComponent }
    // ,{path:'newjobpost', component: NewjobpostComponent }
     

];

export class AppRoutingModule { }
export const routes: ModuleWithProviders = RouterModule.forRoot(router);