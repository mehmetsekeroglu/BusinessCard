import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 cards!: Card[];

  constructor(
    public dialog: MatDialog,
    private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards()
  }

  openCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px'
    })
  }

  getCards(): void {
    this.cardService.getCards().subscribe((res:any)=> {                     //Card[] type verilemedi simdilik any verildi
      this.cards = res
    })
  }

 
}


