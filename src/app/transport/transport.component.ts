import { Component } from '@angular/core';
import { Transport } from '../Transport';
import { TRANSPORTS } from '../mock';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent {
  transports: Transport[] = TRANSPORTS;
  selectedTransport: Transport | null = null;
}
