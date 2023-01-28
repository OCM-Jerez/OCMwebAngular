import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss']
})
export class CardEntradaComponent implements OnInit {
  @Input() title = '';
  @Input() author = '';
  @Input() date = '';
  @Input() extract = '';
  @Input() routerLink = '';
  @Input() new = false;


  constructor() { }

  ngOnInit(): void {

  }

}
