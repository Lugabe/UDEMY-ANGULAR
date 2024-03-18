import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Supervisor de TI",
        p: " MAJOR SUPERMERCADOS | JAN 2020 - AGO 2022"
      },
      text: "<p>Atuei como supervisor do setor de ti em uma rede de supermercados na qual eu realizava manutenção na infraestrutura do local e também tomava decisões para aumentar a segurança interna do servidor e da rede. Também realizava manutenção no sistema de ERP do supermercado e com conhecimento em sql, javascript, html, css</p>",
    },
    {
      summary: {
        strong: "Professor de TI",
        p: " Instituto Genesis | JAN 2022 - JAN 2024"
      },
      text: "<p>Durante o meu período como professor, fui responsável por lesionar matérias como lógica de programação, banco de dados, rede de computadores, sistema operacional, linguagem de programação web, orientação a objetos. Sou graduado em Engenharia da computação então possuo um conhecimento mais aprofudando destes temas no qual ensinei muito e aprendi muito com os meus alunos.</p>",
    },
    {
      summary: {
        strong: "Desenvolvedor WEB/SQL",
        p: " Web Jasper | MAIO 2023 - Presente"
      },
      text: "<p>Em minha jornada como desenvolvedor web/sql, sou responsável por realizar integração com diversos tipos de banco de dados relacional dos clientes, além também de consumir APIS. Realizo coletas utilizando uma ferramenta de ETL para pegar informações importantes dos nossos clientes e realizar analise de dados para tomada de decisões inteligentes. Estou tendo a oportunidade de aprender  muitas tecnologias como SQL, PL, JAVASCRIPT, HTML, CSS, PHP</p>",
    },
    {
      summary: {
        strong: "Desenvolvedor FullStack",
        p: " Smart Perfomace | JAN 2024 - Presente"
      },
      text: "<p>Neste trabalho, atuo como desenvolvedor fullstack, realizando correção e melhorias no site da empresa utilizando meu conhecimento em front-end e também realizo outras mudanças no back-end da empresa a onde fica guardado toda a regra de negócios com o banco em MongoDB. Utilizo as tecnologias: TypeScript, HTML, CSS, SQL, MONGODB, ANGULAR, REACT, REACT.NATIVE, para trazer soluções inteligentes para os nossos clientes.</p>",
    },

  ])
}
