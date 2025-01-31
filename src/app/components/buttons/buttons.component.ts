import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
@Input() text: string; 
@Input() color:string;
@Output() btnClick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
   
  onClick(){
    // console.log('Add');
    this.btnClick.emit();
  }
}
