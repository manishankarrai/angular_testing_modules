import { createReducer, on } from '@ngrx/store';
import { Person, PersonState } from './person.model';
import { addPerson, removePerson, updatePerson } from './person.actions';


export const initialState: PersonState = { persons: [] };



export const personReducer = createReducer(
  initialState,
  on(addPerson, (state, { person }) => {
    return {
      persons: [...state.persons, person]
    };
  }),
  on(removePerson, (state, { id }) => {
    let newPersome = state.persons.filter(item => item.id != id)
    return {
      persons: [...newPersome]
    };
  }),
  on(updatePerson, (state, { id, person }) => {

    return {
      persons: state.persons.map((item, i) =>  item.id=== id ? { ...person }: item )};
  }),


)
