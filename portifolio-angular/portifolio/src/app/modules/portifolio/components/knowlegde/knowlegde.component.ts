import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowlegde',
  standalone: true,
  imports: [],
  templateUrl: './knowlegde.component.html',
  styleUrl: './knowlegde.component.scss',
})
export class KnowlegdeComponent {
  public arrayKnowlegde = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'icone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'icone de conhecimento de nodeJs',
    },  {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: "icone de conhecimento de typescript"
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: "icone de conhecimento de sql"
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: "icone de conhecimento de angular"
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: "icone de conhecimento de react"
    },
  ]);
}
