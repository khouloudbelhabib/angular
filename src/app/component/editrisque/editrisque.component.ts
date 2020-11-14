import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Risques } from 'src/app/model/risques';
import { RisquesService } from 'src/service/risques.service';


@Component({
  selector: 'app-editrisque',
  templateUrl: './editrisque.component.html',
  styleUrls: ['./editrisque.component.css']
})
export class EditrisqueComponent implements OnInit {
  risque = new Risques();
  id: number;

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private risquesService: RisquesService , private  _activateRouter: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // tslint:disable-next-line:radix
    const  id = parseInt(this._activateRouter.snapshot.paramMap.get('id'));
    this.risquesService.getRisqueById(id).subscribe(
      data =>
      {console.log('received');
       this.risque = data;
      },

      error => console.log('error')
    );
  }
  // tslint:disable-next-line:typedef
  updaterisqueformsubmit(){
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
