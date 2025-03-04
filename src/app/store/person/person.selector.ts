import { createSelector, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Person, PersonState } from './person.model';

// Feature selector for PersonState
export const personSelector = createFeatureSelector<PersonState>('person');

// Selector to get persons array
export const getPerson = createSelector(
  personSelector,
  (state: PersonState) => {
    console.log("state", state);
    return state?.persons;
  }
);
