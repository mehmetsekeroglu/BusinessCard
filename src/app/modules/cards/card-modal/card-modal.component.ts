import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
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
    private dialogRef: MatDialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Card
 
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.formCard = this.fb.group({
      title:[this.data?.title || "", [Validators.required, Validators.maxLength(255)]],
      name:[this.data?.name || "", Validators.maxLength(50)],
      phone:[this.data?.phone || "", [Validators.required, Validators.maxLength(20)]],
      email:[this.data?.email || "", [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || "", Validators.maxLength(255)]
    })
  }

  addCard():void {
    this.cardService.addCard(this.formCard.value)
    .subscribe((res:any)=>{
      this._snackBar.open("The card has been successfully added.", "", {
        duration:4000
      });
       this.dialogRef.close(true)
    })
  }

  updateCard():void{
    this.cardService.updateCard(this.formCard.value, this.data.id)
    .subscribe((res:any)=>{
      this._snackBar.open("The card has been successfully edited.", "", {
        duration:4000
      });
      this.dialogRef.close(true)
    })
  }
 

}
