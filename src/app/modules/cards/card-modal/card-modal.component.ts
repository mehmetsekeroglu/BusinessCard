import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';



@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  formCard!: FormGroup;
  showSpinner:boolean = false;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Card
 
  ) { }

  ngOnInit(): void {
    this.formCard = this.fb.group({
      title:[this.data?.title || "", [Validators.required, Validators.maxLength(255)]],
      name:[this.data?.name || "", Validators.maxLength(50)],
      phone:[this.data?.phone || "", [Validators.required, Validators.maxLength(20)]],
      email:[this.data?.email || "", [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || "", Validators.maxLength(255)]
    })
  }

  addCard():void {
    this.showSpinner=true
    this.cardService.addCard(this.formCard.value)
                    .subscribe((res:any)=>{
                      this.getSuccess("The card has been successfully added.");
    })
  }

  updateCard():void{
    this.showSpinner=true;
    this.cardService.updateCard(this.formCard.value, this.data.id)
                    .subscribe((res:any)=>{
                      this.getSuccess("The card has been successfully edited.");
                      
    })
  }

  deleteCard():void {
    this.showSpinner=true;
    this.cardService.deleteCard(this.data.id)
                    .subscribe((res:any)=>{
                      this.getSuccess("The card has been successfully deleted.");
                    })
  }

  getSuccess(message:any):void {
    this._snackBar.open(message, "", {
      duration:4000
    });
    this.cardService.getCards();
    this.showSpinner=false;
    this.dialogRef.close();
  }
 

}
