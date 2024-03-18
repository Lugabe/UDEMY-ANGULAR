import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/conversor-de-moedas.png',
      alt: 'icone do projeto conversor de Moedas',
      title: 'Conversor de Moedas',
      width: '100px',
      height: '60px',
      description: 'Conheça o meu projeto de conversor de moedas internacional que pega o valor da moeda escolhida e o converte para a cotação em tempo real! ',
      links: [

        {
          name: 'Conheça o projeto',
          href: 'https://lugabe.github.io/Conversor-de-Moedas/'
        }
    ]
    },

    {
      src: 'assets/img/projects/jokenpo.png',
      alt: 'icone do projeto Jokenpo',
      title: 'Jokenpô',
      width: '100px',
      height: '60px',
      description: 'Jogue Jokenpô contra a Alexa e ganhe dela! (ou talvez perca) ',
      links: [

        {
          name: 'Conheça o projeto',
          href: 'https://lugabe.github.io/jokenpo/'
        }
    ]
    },
  ])

}
