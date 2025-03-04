

export interface Person {
    id ?: number  ;
    name: string;
    department: string;
    salary: number;
}

export interface PersonState {
    persons: Person[]
}