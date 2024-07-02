import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name !: string | undefined;
  @Input({required: true}) userId !: string ;
  isAddingTask = false

  constructor(private taskService: TasksService) {

  }
 

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onTaskAdd(taskData: NewTask) {
    this.taskService.addTask(taskData, this.userId)
    this.isAddingTask = false
  }
}
