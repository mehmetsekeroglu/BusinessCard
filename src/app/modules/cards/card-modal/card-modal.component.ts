import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  formCard!: FormGroup

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>
 
  ) { }

  ngOnInit(): void {
    this.formCard = this.fb.group({
      title:["", [Validators.required, Validators.maxLength(255)]],
      name:["", Validators.maxLength(50)],
      phone:["", [Validators.required, Validators.maxLength(20)]],
      email:["", [Validators.email, Validators.maxLength(50)]],
      address: ["", Validators.maxLength(255)]
    })
  }

  addCard():void {
    this.cardService.addCard(this.formCard.value)
    .subscribe((res:any)=>{
      console.log(res)
      this.dialogRef.close()
    })
  }
 

}
