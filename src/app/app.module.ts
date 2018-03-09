import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatSliderModule, MatListModule,
MatGridListModule, MatTableModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ScriptCreatorComponent } from './script-creator/script-creator.component'


@NgModule({
  declarations: [
    AppComponent,
    LightsComponent,
    AboutComponent,
    ScriptCreatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTableModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
