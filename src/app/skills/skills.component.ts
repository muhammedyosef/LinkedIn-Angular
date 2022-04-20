import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from 'src/app/_services/skills.service';
import { Subscriber } from 'rxjs';
import { Skills } from '../model/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() skillcard!: Skills;

  constructor(private skill: SkillsService) {}
  ngOnInit(): void {
    console.log(this.skillcard);
  }
}
