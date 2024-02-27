import { Component } from '@angular/core';

@Component({
  selector: 'app-template-biding',
  standalone: true,
  imports: [],
  templateUrl: './template-biding.component.html',
  styleUrl: './template-biding.component.scss'
})
export class TemplateBidingComponent {

  public name:string = "PANDA";
  public age:number = 8;
  public isDisable: boolean = false;

  public sum(){
    this.age++
  }
  public sub(){
    this.age--
  }



  
}
