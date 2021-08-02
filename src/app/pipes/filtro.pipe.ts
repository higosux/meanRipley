// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    if(searchText.toLocaleLowerCase().includes("todo") || searchText.toLocaleLowerCase() == "all"){
      return items;
    }

    if (items.find(it => it.nombre.toLocaleLowerCase().includes(searchText))){
      return items.filter(it => {return it.nombre.toLocaleLowerCase().includes(searchText);})
    }else if(items.find(it => it.rut.toLocaleLowerCase().includes(searchText))){
      return items.filter(it => {return it.rut.toLocaleLowerCase().includes(searchText);})
    }else if(items.find(it => it.banco.toLocaleLowerCase().includes(searchText))){
      return items.filter(it => {return it.banco.toLocaleLowerCase().includes(searchText);})
    }else{
      return items.filter(it => {return it.numeroCuenta.toString().includes(searchText);})
    }
     

  }
}