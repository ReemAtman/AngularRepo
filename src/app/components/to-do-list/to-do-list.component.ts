import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  {

  
  list:string[]=[];
  task:string="";
  
  addToList(){
    this.list.push(this.task);
    this.task="";
    

  }
  removeList(index:number){
    
    this.list=this.list.filter((item,i)=> index !=i)

  }

}
