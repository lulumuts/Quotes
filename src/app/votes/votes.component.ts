import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import * as moment from 'moment';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  upvote: number=0;
  downvote:number=0;

  

  increment() {
    this.upvote++;
  }
  decrement() {
    this.downvote--;
  }

  constructor() {

    }

  ngOnInit() {
  }

}
