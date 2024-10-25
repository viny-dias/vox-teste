import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { OpeningRequestsListComponent } from "../opening-requests-list/opening-requests-list.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, OpeningRequestsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
