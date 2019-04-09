import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhoneScreenComponent } from './components/phone-screen/phone-screen.component';
import { CameraLensComponent } from './components/camera-lens/camera-lens.component';
import { MatIconModule } from '@angular/material';
import { PhoneIconsComponent } from './components/phone-icons/phone-icons.component';
import { GitHubComponent } from './components/git-hub/git-hub.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhoneScreenComponent,
    CameraLensComponent,
    PhoneIconsComponent,
    GitHubComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
