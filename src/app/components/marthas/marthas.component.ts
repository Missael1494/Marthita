import { Component, OnInit } from '@angular/core';
import { MarthasService, Martha } from '../../servicios/marthas.service';



@Component({
  selector: 'app-marthas',
  templateUrl: './marthas.component.html',
  styleUrls: ['./marthas.component.css']
})
export class MarthasComponent implements OnInit {

  marthas:Martha[] = []


  constructor( private _marthasService:MarthasService) { 
    console.log("constructor");
  }





  ngOnInit() {

    this.marthas = this._marthasService.getMarthas();

    console.log(this.marthas);

  }

}
