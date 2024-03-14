import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowlegdeComponent } from '../../components/knowlegde/knowlegde.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowlegdeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
