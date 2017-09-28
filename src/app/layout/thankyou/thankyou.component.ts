import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-thankyou',
    templateUrl: './thankyou.component.html',
    styleUrls: ['./thankyou.component.scss'],
    animations: [routerTransition()]
})
    export class ThankyouComponent implements OnInit {
      constructor() { }
     ngOnInit() { }
 }