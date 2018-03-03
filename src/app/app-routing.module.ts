import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightsComponent } from './lights/lights.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'lights',
        component: LightsComponent
    },
    {
        path: 'about',
        component: AboutComponent 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
export class AppRoutingModule{}
