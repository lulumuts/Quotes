import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';
import { VotesComponent } from './votes/votes.component';
// import { VoteDirective } from './vote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    VotesComponent,
    TimeAgoPipe,
    // VoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
