import { Component, Input, OnInit } from '@angular/core';
import { SimperAcwer } from 'src/app/model/simperAcswer.model';

@Component({
  selector: 'app-simper-ancwer',
  templateUrl: './simper-ancwer.component.html',
  styleUrls: ['./simper-ancwer.component.scss'],
})
export class SimperAncwerComponent implements OnInit {
  @Input() simpels!: SimperAcwer;
  constructor() {}

  ngOnInit(): void {}
}
