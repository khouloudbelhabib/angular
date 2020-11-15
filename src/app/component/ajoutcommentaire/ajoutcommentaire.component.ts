import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/model/Commentaire';
import { CommentaireService } from 'src/app/service/commentaire.service';

@Component({
  selector: 'app-ajoutcommentaire',
  templateUrl: './ajoutcommentaire.component.html',
  styleUrls: ['./ajoutcommentaire.component.css']
})
export class AjoutcommentaireComponent implements OnInit {
  commentaire = new Commentaire();
  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private commentaireService: CommentaireService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addCommentaireformsubmit(){
    this.commentaireService.addcommentaireToRemote(this.commentaire).subscribe(
      data =>
      {
        console.log('data added');
      },
      error => console.log('error')
    );
  }

}
