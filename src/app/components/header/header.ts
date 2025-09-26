import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [  Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private ui: Ui, private router:Router) {
    this.subscription = this.ui
    .onToggle()
    .subscribe(value => this.showAddTask = value);
  }

  toggleAddTask() {
    this.ui.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
