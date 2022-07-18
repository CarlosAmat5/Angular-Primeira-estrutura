import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',//selector para colocar el componente dentro del app.component.html
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
