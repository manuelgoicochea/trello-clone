import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [OverlayModule,NavbarComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
