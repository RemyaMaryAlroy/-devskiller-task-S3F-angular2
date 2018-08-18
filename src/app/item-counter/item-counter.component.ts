import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  @Input() pcs: number;
  @Output() pcschange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  decrement(){
  	this.pcs = this.pcs -1;
  	this.pcschange.emit({pcschange: this.pcs});
  }
  increment(){
  	this.pcs = this.pcs + 1;
  	this.pcschange.emit({pcschange: this.pcs});
  }
}
