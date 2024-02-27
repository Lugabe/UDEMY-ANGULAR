import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-components/new-component/new-component.component';
import { TemplateBidingComponent } from './components/new-components/template/template-biding/template-biding/template-biding.component';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `

  <h1>Olá Angular</h1>

  <app-template-biding></app-template-biding>
  <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet, CommonModule, NewComponentComponent,TemplateBidingComponent]
})
export class AppComponent {
}
