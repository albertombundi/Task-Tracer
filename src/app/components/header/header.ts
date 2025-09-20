import { Component } from '@angular/core';
import { Button } from '../button/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ Button ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  title: string = 'Task Tracker';
  toggleAddTask() {
    console.log('Toggle');
  }
}
