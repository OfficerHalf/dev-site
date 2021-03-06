import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnakeComponent } from './snake.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { SnakeRoutingModule } from './snake-routing.module';

@NgModule({
  declarations: [SnakeComponent, BoardComponent, SquareComponent],
  imports: [CommonModule, FormsModule, SnakeRoutingModule]
})
export class SnakeModule {}
