import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task-service';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        console.log('Tasks fetched from API:', tasks);
        this.tasks = tasks;
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });
  }
}
