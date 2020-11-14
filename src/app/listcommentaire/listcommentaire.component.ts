import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Risques} from '../model/risques';
import {Commentaire} from '../model/Commentaire';
import {UserService} from '../../service/user.service';
import {RisquesService} from '../../service/risques.service';
import {CommentaireService} from '../../service/commentaire.service';

@Component({
  selector: 'app-listcommentaire',
  templateUrl: './listcommentaire.component.html',
  styleUrls: ['./listcommentaire.component.css']
})
export class ListcommentaireComponent implements OnInit {
  private commentaire;
  commentaires: Observable<Commentaire[]>;
  constructor( private commentaireservice: CommentaireService  ) { }

  ngOnInit(): void {
    this.getCommentaire();
  }
// tslint:disable-next-line:typedef
getCommentaire(){
    this.commentaires = this.commentaireservice.listcommentaireToRemote();
}
}
