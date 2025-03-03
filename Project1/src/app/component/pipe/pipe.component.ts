import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../custom_pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe ,UpperCasePipe, LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name: string = 'Angular';
  intro: string = 'Welcome to Angular by youtube';
  date: Date = new Date();
  student: any = {
    name:'Aman',
    city:'Bangalore',
    age: 25,
    dob:''


  };
  crtTime: Observable<Date>=new Observable<Date>;
  constructor(){
    this.crtTime=interval(1000).pipe(map(()=>new Date()));
  }

}
