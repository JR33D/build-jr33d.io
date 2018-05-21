import { Component, OnInit } from '@angular/core';
import { IChronologyEvent } from 'ngx-chronology';

interface IEvent {
    title: string;
    icon?: string;
    content: string;
}

@Component({
  selector: 'jr-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    events: Array<IChronologyEvent> = [
        {
            title: 'The Miracle of Birth',
            icon: 'check-circle',
            faLibrary: 'far',
            content: `Patient:Is it a boy or a girl?`
        },
        {
            title: 'Early Years',
            icon: 'clock',
            faLibrary: 'far',
            content: `Typical K-12, First robotics changed perspective.`
        },
        {
            title: 'Middle Age',
            content: `Jobs here or there`
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
