import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  hero!: Heroe[];

  transform(heroes: Heroe[], cambiar: string = ''): Heroe[] {
    //! si a > b quiere decir que b debe estar antes
    //! si a < b quiere decir que a debe moverse a la izquierda
    if (cambiar === 'nombre') {
    } else if (cambiar === 'vuela') {
    } else if (cambiar === 'color') {
    } else {
      return heroes
    }

    switch (cambiar) {
      case 'nombre':
        return this.hero = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
        break;

      case 'vuela':
        return this.hero = heroes.sort((a, b) => (a.vuela < b.vuela) ? 1 : -1)
        break;

      case 'color':
        return this.hero = heroes.sort((a, b) => (a.color < b.color) ? 1 : -1)
        break;

      default: heroes
        break;
    }

    return this.hero;
    // return heroes.sort();
  }

}
