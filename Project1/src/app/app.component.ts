import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { NewEmployeeComponent } from './component/new-employee/new-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralComponent } from './component/directive/structural/structural.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StructuralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
}
