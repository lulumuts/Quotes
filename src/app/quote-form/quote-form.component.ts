import { Component, OnInit, Output, EventEmitter,ViewChild } from '@angular/core';
import {Quote} from '../quote';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0, "", "","",1,1)
  @Output() addQuote=new EventEmitter<Quote>();

  @ViewChild(NgForm) myForm: NgForm;


    submitQuote(){
      console.log(this.newQuote)
      
      this.addQuote.emit(this.newQuote);
      this.myForm.resetForm()
    }

  constructor() {

  }

  ngOnInit() {
  }

}
