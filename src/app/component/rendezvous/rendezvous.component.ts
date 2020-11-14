import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Rendezvous } from 'src/app/model/rendezvous';
import { RendezvousService } from 'src/service/rendezvous.service';


@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
rendezvous = new Rendezvous();
rendezvous1: any;
  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router, private  rendezvousService: RendezvousService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addrendezvousformsubmit() {
    this.rendezvous1 = this.rendezvousService.addRendezvous(this.rendezvous);
    if (this.rendezvous1 == null){
      this.rendezvousService.saveRendezvous(this.rendezvous);
      console.log('data est ajouté');

    }else {
      console.log('imposible de prendre un rendez_vous');
    }

  }
}
