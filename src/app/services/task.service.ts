import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { Tasks } from "../mock.test";
import { Observable , of } from "rxjs";
//for auto observable also add in app modue
import { HttpClient  , HttpHeaders  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'http://localhost:5000/tasks'


  //old method without observables 
  // getTasks() : Task[]{
  //   return Tasks;  
  // }
  getTasks():Observable<Task[]>{
    // gives error ; turn it into an observable 
    // return Tasks;
    //without http
    // const tasks = of(Tasks);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
