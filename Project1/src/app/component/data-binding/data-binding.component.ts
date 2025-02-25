import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName:String = 'Angular';
  courseDuration:Number = 10;
  inputType = 'textBox';
  isTrue:boolean = true;
  stateName:String="";
  currentDay:Date = new Date();

firstName=signal("Aman Verma");

  constructor() {
    this.courseName = 'Angular';
    this.courseDuration = 10;
    this.inputType = 'radio';
    this.isTrue = true;
  }
  changeCourseName(){
    this.courseName = 'React';
    this.firstName.set("Rays ")
  }
  showAlert(message:String) {
    alert(message
    );

  }

}
