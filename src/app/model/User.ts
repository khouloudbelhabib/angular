import { Role } from './Role';

export class User {

  id: any;
  nom: any;
  prenom: any;
  dateNaiss: any;
  adress: any;
  email: any;
  login;
  role?: Role[];
}
