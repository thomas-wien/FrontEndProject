import { Component } from '@angular/core';
import { carreer, carreers } from '../carreers';
import { ICarreer } from '../ICarreers';

@Component({
  selector: 'app-carreers',
  templateUrl: './carreers.component.html',
  styleUrls: ['./carreers.component.scss']
})
export class CarreersComponent {
  carreers: Array<ICarreer> = carreers;
  carreer: ICarreer = {} as ICarreer;
}
