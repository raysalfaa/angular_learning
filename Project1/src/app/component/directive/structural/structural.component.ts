import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  constructor(private route:Router) { }
    backToAddEmp() {
      this.route.navigateByUrl('/add-emp');
    }
  isVisible:boolean=true;

  showText1(){
    this.isVisible=true;
  }
  hideText1(){
    this.isVisible=false;
  }
  isVisible2:boolean=true;
  toggleText2(){
    this.isVisible2=!this.isVisible2;
  }
  num1:String="";
  num2:String="";

  isChecked:boolean=false;
  country:String="";
  countries:String[]=["India","USA","UK","Australia","Canada"];

  studentList:any[]=[
    {id:1, name:"AAA", city:"bengulure", age:20, isActive:false},
    {id:2, name:"BBB", city:"Mysure", age:22, isActive:true},
    {id:3, name:"CCC", city:"Patna", age:23, isActive:false},
    {id:4, name:"DDD", city:"Delhi", age:20, isActive:false},
    {id:5, name:"EEE", city:"Chennai", age:24, isActive:true},
    {id:6, name:"FFF", city:"Kolkata", age:21, isActive:true},
    {id:7, name:"Aman", city:"Gaya", age:23, isActive:true},
  ];
  
}
