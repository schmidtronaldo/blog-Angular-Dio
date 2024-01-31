import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss', './small-card.responsive.component.scss']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';

  @Input()
  id: string = '0';

}
