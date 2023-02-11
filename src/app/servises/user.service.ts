import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  baseUrl:string='http://localhost:3005/users';
  constructor(private myClient:HttpClient) {
    
   }
   getAllUsers(){
    return this.myClient.get(this.baseUrl);
   }
   getUserById(userId:any){
    return this.myClient.get(`${this.baseUrl}/${userId}`);
   }
   addNewUser(user:any){
    return this.myClient.post(this.baseUrl,user);

   }
   updateUser(userId:any,user:any){
    return this.myClient.put(`${this.baseUrl}/${userId}`,user);

   }
   deleteUser(userId:any){
    return this.myClient.delete(`${this.baseUrl}/${userId}`);

   }

}
