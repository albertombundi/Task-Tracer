import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
   @Input() task!: Task;
}
