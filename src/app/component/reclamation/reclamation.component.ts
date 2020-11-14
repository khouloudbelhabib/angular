import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/service/reclamation.service';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
 reclamation = new Reclamation();

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private reclamationService: ReclamationService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addreclamationformsubmit(reclamation: Reclamation){
    this.reclamationService.addreclamationToRemote(this.reclamation).subscribe(
      data =>
      {
        console.log('data added');
      },
      error => console.log('error')
    );
  }



}
