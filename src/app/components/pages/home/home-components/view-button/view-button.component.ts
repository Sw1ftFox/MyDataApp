import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-view-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-button.component.html',
  styleUrl: './view-button.component.scss'
})
export class ViewButtonComponent {
  @Input() viewType: 'list' | 'tile' = 'list';
  @Output() viewTypeChange = new EventEmitter<'list' | 'tile'>();

  changeViewType(type: 'list' | 'tile') {
    this.viewTypeChange.emit(type);
  }
}
