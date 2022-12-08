import { Injectable } from '@angular/core';
import { signOut,Auth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }


  register({nombre,password}:any){
    return createUserWithEmailAndPassword(this.auth, nombre,password);

}

loginapp({nombre,password}:any){

  return signInWithEmailAndPassword(this.auth,nombre,password);
}

logout(){
  return signOut(this.auth);

}


}
