import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Calendary } from './interface/calendary';
@Injectable({
  providedIn: 'root'
})
export class CalendaryService {

  constructor(private firestore: Firestore) { }


  addPlace(calendary: Calendary) {
    const placeRef = collection(this.firestore, 'calendary');
    return addDoc(placeRef, calendary);
  }

  getPlaces(): Observable<Calendary[]> {
    const placeRef = collection(this.firestore, 'calendary');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Calendary[]>;
  }

  deletePlace(calendary: Calendary) {
    const placeDocRef = doc(this.firestore, `calendary/${calendary.id}`);
    return deleteDoc(placeDocRef);
  }

}
