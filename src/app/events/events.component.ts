import { Component } from '@angular/core';
import { IEvent } from '../IEvents';
import { event, events } from '../events';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: Array<IEvent> = events;
  event: IEvent = {} as IEvent;
}
