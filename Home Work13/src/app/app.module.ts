import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { DumbComponent } from './dumb.component';
import { IsVisibleDirective } from './is-visible.directive';
import { LoggableDirective } from './loggable.directive';
import { MultiPipe } from './multi.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    LoggableDirective,
    MultiPipe,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
