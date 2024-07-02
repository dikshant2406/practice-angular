import { Component, EventEmitter, Output, WritableSignal, signal } from '@angular/core';
import { NewTask } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void> () ;
  @Output() add = new EventEmitter<NewTask>()

  onCancel() {
    this.cancel.emit()
  }

  enteredTitle = signal("")
  enteredSummary = "" 
  enteredDate = ""

  onSubmit() {
    console.log("inside on submit");
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
