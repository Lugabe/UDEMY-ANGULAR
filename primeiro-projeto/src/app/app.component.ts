import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from '../components/new-component/new-component.component';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `

  <h1>Olá Angular</h1>

  <app-new-component></app-new-component>
  <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet, CommonModule, NewComponent]
})
export class AppComponent {
}
