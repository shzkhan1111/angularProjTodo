import { Injectable } from '@angular/core';
import { Observable , Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  //call it on add button
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    //pass the value of the current task 
    this.subject.next(this.showAddTask)
  }

  //do something when subscribe to on toggle
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
