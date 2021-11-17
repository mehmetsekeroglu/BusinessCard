import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

}
