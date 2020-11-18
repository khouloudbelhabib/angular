import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Risques } from 'src/app/model/risques';
import { UserService } from 'src/app/service/user.service';
import { RisquesService } from 'src/app/service/risques-service.service';

@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements OnInit {
  private risque;
  public dataSource: any;
  risques: any;
  // tslint:disable-next-line:variable-name
  private array: any;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService, private risquesService: RisquesService, private _route: Router) { }

  ngOnInit(): void {
    this.getRisques();
  }
  // tslint:disable-next-line:typedef
  private getRisques() {
    this.risquesService.getRisqueList().subscribe(
      data=> {
        console.log('data id  ' + data);
        this.risques = data;
      }
    );

  }

  // tslint:disable-next-line:typedef
  gotoEditRisque(id: number) {
    console.log('id' + id);
    this._route.navigate(['/editrisque', id]);
  }
  // tslint:disable-next-line:typedef
  gotoAddRisque() {
    this._route.navigate(['/newrisque']);
  }
  // tslint:disable-next-line:typedef
  deleteRisque(id: number) {
    this.risquesService.deleteRisqueById(id).subscribe(
      data => {
        console.log('delete succesfully');
        this._route.navigate(['/risques']);
      },
      error => console.log('Exception')
    );

  }
}
