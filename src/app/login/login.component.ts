import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Titulo desde una variable del componente login mediante interpolación";

  constructor() { }

  ngOnInit(): void {
  }

}
