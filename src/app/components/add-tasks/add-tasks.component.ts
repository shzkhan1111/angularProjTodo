import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  //create two way data binding add ngnodel in app moduld
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter() 
  text:string;
  day:string;
  reminder:boolean = false; 
  showAddTask : Boolean ;
  subscription : Subscription
  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value => this.showAddTask = value)
    )
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('PLease add a Task')
      return;
    }
    const newTask = {
      text:this.text,
      day: this.day,
      reminder : this.reminder
    }
    
    this.onAddTask.emit(newTask);

    this.text = ''
    this.day = ''
    this.reminder = false

  }

}
