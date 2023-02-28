import { Component } from '@angular/core';
import { IStory } from '../IStories';
import { story, stories } from '../stories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  stories: Array<IStory> = stories;
  event: IStory = {} as IStory;
}
