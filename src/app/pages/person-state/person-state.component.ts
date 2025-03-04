import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person, PersonState } from '../../store/person/person.model';
import { Store } from '@ngrx/store';
import { personReducer } from '../../store/person/person.reducer';
import { getPerson } from '../../store/person/person.selector';
import { addPerson, removePerson, updatePerson } from '../../store/person/person.actions';

@Component({
  selector: 'app-person-state',
  templateUrl: './person-state.component.html',
  styleUrl: './person-state.component.css'
})
export class PersonStateComponent implements OnInit, OnDestroy {
  personList: Person[] = [];
  personForm: FormGroup;
  isEditing: WritableSignal<boolean> = signal(false);
  constructor(private fb: FormBuilder, private store: Store<PersonState>) {
    this.personForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      department: [null, Validators.required],
      salary: [null, Validators.required],
    });
    this.store.select(getPerson).subscribe(item => {
      console.log("person ", item)
      this.personList = item;
    })
  }

  ngOnInit(): void {

  }

  submitForm(): void {
    if (!this.isEditing()) {
      this.store.dispatch(addPerson({ person: this.personForm.value }))
    } else {
      this.store.dispatch(updatePerson({ id: this.personForm.value.id, person: this.personForm.value }))
      this.isEditing.set(false);
      this.personForm.reset();
    }
  }
  removePerson(id: number | undefined): void {
    if (id) {
      this.store.dispatch(removePerson({ id }))
    }
  }
  editPerson(item: Person): void {
    this.personForm.patchValue(item);
    this.isEditing.set(true);
  }

  ngOnDestroy(): void {

  }


}
