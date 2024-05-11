import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})

export class WeekService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  basePath = this.firestore.collection('weeks');

  public getAll() {
    const weeksDB = this.basePath;
    return weeksDB.snapshotChanges();
  }
}
