import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";
 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[] = [];
//to use a service pass it as a procider intio the ctor
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    // if without the observables 
    // this.tasks = this.taskService.getTasks()
    // for an observable you do a subscribe which is like a promise 
    this.taskService.getTasks().subscribe( (tasks) => this.tasks = tasks )
  }
  deleteTask(task :Task){
    this.taskService.deleteTask(task).subscribe( () =>
    //now filter the list 
    (this.tasks = this.tasks.filter(t => t.id !== task.id)) )
  }
}
