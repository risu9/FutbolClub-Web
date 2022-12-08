import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { CalendaryService } from '../calendary.service';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  formulario: FormGroup;

  constructor(private calendaryService: CalendaryService,public fb: FormBuilder) { 
    


    this.formulario = new FormGroup({
      asignatura: new FormControl(),
      descripcion: new FormControl(),
      fecha: new FormControl(),
      sala: new FormControl(),
    })

  }

  ngOnInit() {
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.calendaryService.addPlace(this.formulario.value);
    console.log(response);
  }
}
