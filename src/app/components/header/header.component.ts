import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Task Manager'
  showAddTask:boolean = false; 
  subscription : Subscription
  constructor(private uiService : UiService , private router:Router) {
    //to catch change of toggle add task in service  we need to use the subscription
    this.subscription = this.uiService.onToggle().subscribe(
      (value => this.showAddTask = value)
    )
   }

  ngOnInit(): void {
    //life cycle method 
  }
toggleAddTask(){
  console.log('toggle')
  this.uiService.toggleAddTask();
  
}
hasRoute(route : string){
  return this.router.url === route
}
}
