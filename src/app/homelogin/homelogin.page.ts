import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { FormControl, FormGroup } from '@angular/forms';
import { CalendaryService } from '../calendary.service';
import { Calendary } from '../interface/calendary';
@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.page.html',
  styleUrls: ['./homelogin.page.scss'],
})
export class HomeloginPage implements OnInit {
  calendarys: Calendary[];

  formulario: FormGroup;

  permission: boolean

  alumnobuscado: any
  code: any;

  constructor(private router: Router,private userService: UserService,private http: HttpClient,private barcodeScanner: BarcodeScanner,private calendaryServices: CalendaryService) {
    this.calendarys = [{
      asignatura: 'Estadisticas',
      descripcion: 'Esto es una prueba',
      fecha: "3 de marzo 2022",
      sala: "3"
    }];
  



   }

   ngOnInit() {
    this.calendaryServices.getPlaces().subscribe(calendarys => {
      this.calendarys = calendarys;
    })
  
}
async onClickDelete(place: Calendary) {
  const response = await this.calendaryServices.deletePlace(place);
  console.log(response);
}

 onClick(){
  this.userService.logout()
  .then(()=>{this.router.navigate(['/home'])})
  .catch(error => console.log(error));
}



}