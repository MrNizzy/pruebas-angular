import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public texto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public showAlert(): void {
    alert(`Has escrito: ${this.texto}`);
  }

}
