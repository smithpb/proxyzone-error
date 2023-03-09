import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DummyModule } from '@harness-issue/dummy';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, DummyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
