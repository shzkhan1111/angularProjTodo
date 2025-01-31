import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes : Routes = [
  {
    path:'',
    component : TasksComponent
  },
  {
    path:'about',
    component : AboutComponent
  },
  {
    path:'footer',
    component : FooterComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    TasksComponent,
    TaskItemComponent,
    AddTasksComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes , {enableTracing : true})
    // FontAwesomeModule
  ],
  // enable tracing for debugg
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
