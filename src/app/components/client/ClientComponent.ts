import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  persona: Persona = new Persona(); 

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.Guardar(this.persona);
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona)
      .subscribe(data => {
        alert("Se envió con éxito");
      });
  }
}
