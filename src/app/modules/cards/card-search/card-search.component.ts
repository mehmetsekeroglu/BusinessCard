import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent{

  constructor(
    private cardService: CardService
  ) { }

 


  search(searchText:any):void{
    searchText = searchText.toLowerCase();
    console.log(searchText)
   this.cardService.filteredCard = this.cardService.card.filter(car=>{
      return car.title.toLowerCase().indexOf(searchText) > -1 || (car.name && car.name.toLowerCase().indexOf(searchText))
    })
  }
}
