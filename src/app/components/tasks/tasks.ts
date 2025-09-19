import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule , TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks: Task[] = TASKS;

}
