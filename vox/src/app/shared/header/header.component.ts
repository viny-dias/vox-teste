import { Component } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
}
