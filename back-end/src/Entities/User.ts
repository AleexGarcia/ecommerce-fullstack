import {randomUUID} from 'crypto';
import Store from './Store';

export default class User {
   userID: string;
   name?: string;
   email: string;
   password: string;
   store?: Store;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.userID = randomUUID();
  }

}


