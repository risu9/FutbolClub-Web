import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page  {
  
  formularioLogin: FormGroup;
  constructor(private userService: UserService,private authService: AuthService, private router:Router,public fb: FormBuilder,
    public alertController: AlertController) {
      this.formularioLogin = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
  
     }

  ngOnInit() {
  }

 /*async ingresar(){
   
  var f = this.formularioLogin.value;

  var usuario = JSON.parse(localStorage.getItem('usuario'));

  if(usuario.nombre == f.nombre && usuario.password == f.password){
    
   console.log('Ingresado');
     this.router.navigate(['/homelogin']);
    // this.authService
    // .login(this.formularioLogin.get('nombre')?.value, this.formularioLogin.get('password')?.value)
    // .subscribe((response) => {
    //   this.router.navigate(['/homelogin']);
    // });
 }else{
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Los datos que ingresaste son incorrectos.',
      buttons: ['Aceptar']
    }); 

    await alert.present();
 }


}*/




onSubmit(){
  this.userService.loginapp(this.formularioLogin.value)
  .then(Response =>{this.router.navigate(['/homelogin'])})
  .catch(error => console.log(error));
}


}
