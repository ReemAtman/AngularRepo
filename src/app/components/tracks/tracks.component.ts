import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent  {

  target2:string="";
  onChange(selected:any){
    let target=selected.target as HTMLInputElement
    this.target2=target.value;
    console.log(this.target2);
    
  }
}
