import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  openCardModalUpdate(card:Card): void {
    this.dialog.open(CardModalComponent, {
      width:"400px",
      data: card
    })
  }

}
