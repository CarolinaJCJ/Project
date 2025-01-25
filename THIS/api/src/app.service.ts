import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Método para devolver la lista
  getLista(): any[] {
    return [
      { id: 1, nombre: 'Objeto 1' },
      { id: 2, nombre: 'Objeto 2' },
      { id: 3, nombre: 'Objeto 3' },
      { id: 4, nombre: 'Prueba' },
    ];
  }
}
