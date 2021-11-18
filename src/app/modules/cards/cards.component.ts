import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardItem= {
    title:"Title",
    name:"Mehmet",
    phone:"555",
    email:"ölkajsdf@klsdf",
    address:"Luzern"

  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px'
    })
  }
}
