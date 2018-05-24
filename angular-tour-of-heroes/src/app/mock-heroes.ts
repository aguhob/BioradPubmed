import { Hero } from './hero';

// this import statement ensures this HEROES variable, 
// which holds the Hero array, conforms to the same
// id / name types referred to in Heroes component TS file.

export const HEROES: Hero[] = [
  { id: 11, name: 'Materials1' },
  { id: 12, name: 'Materials2' },
  { id: 13, name: 'Methods3' },
  { id: 14, name: 'Methods4' },
  { id: 15, name: 'Biochem5' },
  { id: 16, name: 'Biochem6' }
];