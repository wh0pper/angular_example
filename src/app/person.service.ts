import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './people';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class PersonService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Person[]> {
    this.messageService.add('PersonService: fetched people')
    return of(PEOPLE);
  }

  getPerson(id: number): Observable<Person> {
    this.messageService.add('PersonService: fetched person id=${id}');
    return of(PEOPLE.find(person => person.id === id));
  }
}
