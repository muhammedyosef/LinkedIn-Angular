import { Component, Input, OnInit } from '@angular/core';
import { Qustions } from 'src/app/model/Questions.model';

@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss'],
})
export class QustionsComponent implements OnInit {
  @Input() qustions!: Qustions;

  constructor() {}

  ngOnInit(): void {}
}
