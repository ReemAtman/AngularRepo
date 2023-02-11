import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string="";
  age:number=0;
  counter:number=0;
  Nameflage:Boolean=false;
  Ageflage:Boolean=false;
  stundents:{id:number,name:string,age:number}[]=[];
  addStudent(){
    
    if(this.username.length>=3&&this.age<18){
      this.Ageflage=true;
      this.Nameflage=false;
      
    }else if(this.username.length<3 && this.age<18){
      this.Ageflage=true;
      this.Nameflage=true;
    }else if(this.username.length<3 && this.age>=18){
      this.Nameflage=true;
      this.Ageflage=false;
      
    }else{
      this.Ageflage=false;
      this.Nameflage=false;
      this.counter++;
      this.stundents.push({id:this.counter,name:this.username,age:this.age});
      this.username="";
      this.age=0;
      

    }

  
    console.log(this.stundents);

  }

  getAge(ageInput:Event){
    let target=ageInput.target as  HTMLInputElement;
    this.age=Number(target.value);


  }
  

}
