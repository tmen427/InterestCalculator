import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { MathjaxModule } from 'mathjax-angular';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule, AppRoutingModule, 
    MathjaxModule.forRoot(/*Optional Config*/),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
