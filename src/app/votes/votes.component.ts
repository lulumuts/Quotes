import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  upvote: number=0;
  increment() {
    this.upvote++;
  }

  constructor() {

    }

  ngOnInit() {
  }

}
