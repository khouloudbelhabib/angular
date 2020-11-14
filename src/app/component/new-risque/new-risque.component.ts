import { Component, OnInit } from '@angular/core';
import {Risques} from '../model/risques';
import {Router} from '@angular/router';
import {RisquesService} from '../../service/risques.service';

@Component({
  selector: 'app-new-risque',
  templateUrl: './new-risque.component.html',
  styleUrls: ['./new-risque.component.css']
})
export class NewRisqueComponent implements OnInit {
risque = new Risques();
  // tslint:disable-next-line:variable-name
  constructor( private  _route: Router,  private risquesService: RisquesService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addrisqueformsubmit(){
    this.risquesService.addRisqueToRemote(this.risque).subscribe(
      data =>
      {
        console.log('data added');
        this._route.navigate(['risques']);
      },
      error => console.log('error')
    );
  }
  // tslint:disable-next-line:typedef
  gotolist(){
    this._route.navigate(['risques']);

  }

}
