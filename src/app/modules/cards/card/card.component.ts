import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
 

  constructor(
    private dialog:MatDialog,
    public cardService:CardService,
    
  ) { }

  ngOnInit(): void {
    
  }

  openCardModalUpdate(card:Card): void {
    this.dialog.open(CardModalComponent, {
      width:"30vw",
      data: card
    })
  }

  deleteCard(card:Card):void {
    this.cardService.deleteCard(card.id)
                    .subscribe((res:any)=>{
                      this.cardService.getCards();
                    
                    })
  }
 

}
