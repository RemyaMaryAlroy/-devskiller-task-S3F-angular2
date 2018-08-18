import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items = [
      {name: 'JavaScript Book', pcs:1, price: 23},
      {name: 'Angular Book', pcs:2, price: 32},
    ];

  getSubTotal(item){
     return (item.pcs * item.price);
  }

  changevent(data,item){
    item.pcs = data.pcschange;
  }

  getTotal(){
  	var total = 0;
  	for (var i=0;i<this.items.length;i++){
  		total = total +(this.items[i].pcs * this.items[i].price);
  		console.log(total);
  	}
  	return total;
  }
}
