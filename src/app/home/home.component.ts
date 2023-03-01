import { Component } from '@angular/core';
import { events } from '../events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  upcomingEvents = events;
}
