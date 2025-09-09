import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  imports: [],
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
