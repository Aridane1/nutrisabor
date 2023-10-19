import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cardChoose!: string;
  @Input() title!: string;
  @Input() preparationTime!: string;
  @Input() porcions!: string;
  @Input() img!: string;
}
