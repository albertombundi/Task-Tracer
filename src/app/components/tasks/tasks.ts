import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
