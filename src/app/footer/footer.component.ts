import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jlr-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
    currentYear: number = new Date().getFullYear();

    constructor() {}

    ngOnInit() {}
}
