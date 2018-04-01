import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightsComponent } from './lights/lights.component'
import { ScriptCreatorComponent } from './script-creator/script-creator.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { AboutComponent } from './about/about.component'
import { ScriptAndUpdaterComponent } from './script-and-updater/script-and-updater.component';
import { SavedScriptsComponent } from './saved-scripts/saved-scripts.component';
import { GradientColorPickerComponent } from './gradient-color-picker/gradient-color-picker.component';

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
        path: 'script-creator',
        component: ScriptAndUpdaterComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'about',
        component: AboutComponent 
    },
    {
        path: 'scripts',
        component: SavedScriptsComponent
    },
    {
        path: 'colorPicker',
        component: GradientColorPickerComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
export class AppRoutingModule{}
