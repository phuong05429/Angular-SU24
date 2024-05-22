import { Component, OnInit } from '@angular/core';
import { Ten } from './name'

@Component({
  selector: 'app-lab02',
  templateUrl: './lab02.component.html',
  styleUrls: ['./lab02.component.css']
})
export class Lab02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  title = 'Phuong';
     
  getTitle (name: string){
    console.log('hehe' + name);
    
  }

  isCheck = true;

  
}
