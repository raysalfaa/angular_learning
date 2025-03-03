import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
    isText1Visible:boolean=true;
    showText1(){
      this.isText1Visible=true;
    }
    hideText1(){
      this.isText1Visible=false;
    }
    isText2WarningVisible:boolean=true;
    toggle(){
      this.isText2WarningVisible=!this.isText2WarningVisible;
    }
    num1:string="";
    num2:string="";
    country:string="";
}
