import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Risques } from 'src/app/model/risques';
import { UserService } from 'src/app/service/user.service';
import { RisquesService } from 'src/app/service/risques-service.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements OnInit {
  private risque;
  public dataSource: any;
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  risques: Observable<Risques[]>;
  // tslint:disable-next-line:variable-name
  private array: any;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService , private  risquesService: RisquesService , private _route: Router) { }

  ngOnInit(): void {
    this.getRisques();
  }
// tslint:disable-next-line:typedef
private getRisques() {
     this.risquesService.getRisqueList('get').subscribe(
      data => {this.risques = data.result;
               this.dataSource = new MatTableDataSource<Element>(data);
               this.dataSource.paginator = this.paginator;
               this.array = data;
               this.totalSize = this.array.length;
               this.iterator();

      }
    );

}
  // tslint:disable-next-line:typedef
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
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
