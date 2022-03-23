import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';
import { Task } from '../../Task';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task : Task
// from the task intrfaCe
@Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
//cant import
// faTimes = faTimes;
  constructor() { }
  
  ngOnInit(): void {
  }
  onDelete(task){
    // console.log(task);
    //pass in the task emitted from here 
    this.onDeleteTask.emit(task);
  }

}
