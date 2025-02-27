import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  text1BgColor:String= 'bg-danger';
  addRedClass(){
    this.text1BgColor = 'bg-danger';
  }
  addBlueClass(){
    this.text1BgColor = 'bg-primary';
  }

  istext2BgColor:boolean= true;
  toggleText2(){
    this.istext2BgColor = !this.istext2BgColor;
  }

  num1:string="";
  num2:string="";

  isActive:boolean = false;

  studentList:any[]=[
    {id:1, name:"AAA",mark:53, city:"bengulure", age:20, isActive:false},
    {id:2, name:"BBB",mark:33, city:"Mysure", age:22, isActive:true},
    {id:3, name:"CCC",mark:98, city:"Patna", age:23, isActive:false},
    {id:4, name:"DDD",mark:20, city:"Delhi", age:20, isActive:false},
    {id:5, name:"EEE",mark:45, city:"Chennai", age:24, isActive:true},
    {id:6, name:"FFF",mark:89, city:"Kolkata", age:21, isActive:true},
    {id:7, name:"Aman",mark:70, city:"Gaya", age:23, isActive:true},
  ];

  customStyle:any = {
    'color': 'red',
    'background-Color': 'blue',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%',
    'text-align': 'center',
  };

}
