import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {RisquesService} from '../../service/risques.service';
import {Router} from '@angular/router';
import {Risques} from '../model/risques';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements OnInit {
  private risque;
  risques: Observable<Risques[]>;
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService , private  risquesService: RisquesService , private _route: Router) { }

  ngOnInit(): void {
    this.getRisques();
  }
// tslint:disable-next-line:typedef
private getRisques() {
    this.risques =  this.risquesService.getRisqueList('get');

}
  // tslint:disable-next-line:typedef
  gotoEditRisque(id: number){
    console.log('id' + id);
    this._route.navigate(['/editrisque', id]);
  }
  // tslint:disable-next-line:typedef
  gotoAddRisque(){
    this._route.navigate(['/newrisque']);
  }
  // tslint:disable-next-line:typedef
  deleteRisque(id: number){
    this.risquesService.deleteRisqueById(id).subscribe(
      data => {
      console.log('delete succesfully');
      this._route.navigate(['/risques']);
      },
      error => console.log('Exception')


    );

  }
}
