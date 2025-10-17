import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from "../../shared/reusables/card/card.component";


@Component({
  selector: 'app-home',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatGridListModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
