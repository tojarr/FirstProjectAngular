import { Component, Input } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

@Component({
selector:'app-user',
templateUrl:'./user.component.html',
styleUrls: ['./user.component.scss']
})

export class UserComponent{
  @Input() textobj;
  isMarked = false;

  OnClick() {
    this.isMarked = true;
  }
}
