import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngswitch',
  templateUrl: './diretivas-ngswitch.component.html',
  styleUrls: ['./diretivas-ngswitch.component.css']
})
export class DiretivasNgswitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
