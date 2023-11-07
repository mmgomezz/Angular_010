import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  clientName: string = '';
  clientAddress: string = '';

  submitForm() {
    console.log('Nombre: ' + this.clientName);
    console.log('Dirección: ' + this.clientAddress);
  }
}
