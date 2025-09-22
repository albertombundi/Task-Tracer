import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ Button,  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription!: Subscription;

  constructor(private ui: Ui) {
    this.subscription = this.ui
    .onToggle()
    .subscribe(value => this.showAddTask = value);
  }

  toggleAddTask() {
    this.ui.toggleAddTask();
  }

}
