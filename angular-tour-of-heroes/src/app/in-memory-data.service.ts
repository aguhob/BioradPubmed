import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      //Changed to pubmed queries
    { id: 11, name: 'Materials1' },
    { id: 12, name: 'Materials2' },
    { id: 13, name: 'Methods3' },
    { id: 14, name: 'Methods4' },
    { id: 15, name: 'Biochem5' },
    { id: 16, name: 'Biochem6' }
    ];
    return {heroes};
  }
}