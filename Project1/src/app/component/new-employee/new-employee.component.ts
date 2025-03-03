import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  imports: [],
  templateUrl: './new-employee.component.html',
  styles: ['.primary{color: blue}']
})
export class NewEmployeeComponent {
  constructor(private route:Router) { }
  backToAddEmp() {
    this.route.navigateByUrl('/add-emp');
  }
}
