import { createAction  , props } from  '@ngrx/store' ;
import { Person , PersonState } from  './person.model' ;


export const addPerson =  createAction('[person] add ' , props<{person : Person}>());
export const updatePerson  =  createAction('[person] update ' , props<{id : number , person: Person}>());
export const removePerson =  createAction('[person] remove' , props<{id : number }>())