import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import {NavController, AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {

  formularioRegistro: FormGroup;
  
  constructor(private router: Router,private userService: UserService , public fb: FormBuilder, public navCtrl: NavController,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

 /* async guardar(){
    var f = this.formularioRegistro.value;
  
    if(this.formularioRegistro.invalid || f.password !=f.confirmacionPassword){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

  
      await alert.present();
      return;

    } else{
      this.navCtrl.navigateRoot('/login1');
    }
  
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
   
  }*/
 
  onSubmit(){
    this.userService.register(this.formularioRegistro.value)
    .then(Response =>{this.router.navigate(['/login1'])})
    .catch(error => console.log(error));

  }


}