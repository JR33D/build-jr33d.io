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
            icon: 'check-circle green',
            content: `Patient:Is it a boy or a girl?
            Obstetrician: Now, I think it's a little early to start imposing roles on it, don't you?
            Now, a word of advice. You may find that you suffer for some time a totally irrational feeling of depression.
            PND is what we doctors call it. So it's lots of happy pills for you,
            and you can find out all about the birth when you get home.
            It\'s available on Betamax, VHS, and Super 8.`
        },
        {
            title: 'Growth and Learning',
            icon: 'check-circle green',
            content: `And spotteth twice they the camels before the third hour.
            And so the Midianites went forth to Ram Gilead in Kadesh Bilgemath by Shor Ethra Regalion,
            to the house of Gash-Bil-Betheul-Bazda, he who brought the butter dish to Balshazar
            and the tent peg to the house of Rashomon, and there slew they the goats, yea,
            and placed they the bits in little pots Here endeth the lesson.`
        },
        {
            title: 'Fighting Each Other',
            icon: 'clock yellow',
            content: `Here is better than home, eh, sir? I mean, at home if you kill someone they arrest you —
            here they'll give you a gun and show you what to do, sir. I mean, I killed fifteen of those buggers.
            Now, at home they'd hang me — here they'll give me a fucking medal, sir!`
        },
        {
            title: 'Middle Age',
            content: `It's real Hawaiian food served in an authentic medieval English dungeon atmosphere.`
        },
        {
            title: 'The Miracle of Birth',
            icon: 'check-circle green',
            content: `Patient:Is it a boy or a girl?
            Obstetrician: Now, I think it's a little early to start imposing roles on it, don't you?
            Now, a word of advice. You may find that you suffer for some time a totally irrational feeling of depression.
            PND is what we doctors call it. So it's lots of happy pills for you,
            and you can find out all about the birth when you get home.
            It\'s available on Betamax, VHS, and Super 8.`
        },
        {
            title: 'Growth and Learning',
            icon: 'check-circle green',
            content: `And spotteth twice they the camels before the third hour.
            And so the Midianites went forth to Ram Gilead in Kadesh Bilgemath by Shor Ethra Regalion,
            to the house of Gash-Bil-Betheul-Bazda, he who brought the butter dish to Balshazar
            and the tent peg to the house of Rashomon, and there slew they the goats, yea,
            and placed they the bits in little pots Here endeth the lesson.`
        },
        {
            title: 'Fighting Each Other',
            icon: 'clock yellow',
            content: `Here is better than home, eh, sir? I mean, at home if you kill someone they arrest you —
            here they'll give you a gun and show you what to do, sir. I mean, I killed fifteen of those buggers.
            Now, at home they'd hang me — here they'll give me a fucking medal, sir!`
        },
        {
            title: 'Middle Age',
            content: `It's real Hawaiian food served in an authentic medieval English dungeon atmosphere.`
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
