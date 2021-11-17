import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@NgModule({
  declarations: [CardsComponent, CardComponent, CardModalComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
  ],
})
export class CardsModule {}
