import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRevPipe } from './pipes/my-rev.pipe';
import { MyAddPipe } from './pipes/my-add.pipe';
import { MyMultPipe } from './pipes/my-mult.pipe';
import { MarvellousChkPipe } from './pipes/marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
