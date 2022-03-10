import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = '0';
  valorA = '0';
  operation = '';

  newItem = true;
  digitosGroup = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'C', '/', '=']
  ];

  onPress(symbol){
    console.log(symbol);

    if(this.numeric(symbol)){
      console.log("es un numero");

      if(this.newItem){
        this.valor = '' + symbol;
      }else{
        this.valor += '' + symbol;
        this.newItem = false;
      }
      
    }
    else if(symbol === 'C'){
      this.valor = '0';
      this.newItem = true;
      
    }

    else if(symbol === '='){
      if(this.operation === 'x'){//producto
        this.valor = '' + (parseInt(this.valorA) * parseInt(this.valor));
      }else if(this.operation === '-'){//resta
        this.valor = '' + (parseInt(this.valorA) - parseInt(this.valor));
      }else if(this.operation === '+'){//suma
        this.valor = '' + (parseInt(this.valorA) + parseInt(this.valor));
      }else if(this.operation === '/'){//dividir
        this.valor = '' + (parseInt(this.valorA) / parseInt(this.valor));
      this.newItem = true;
      }
    }
    else{
      this.newItem = true;
      this.valorA = this.valor;
      this.operation = symbol;
    }
    
  }
  constructor() {}

  numeric(n){
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

}
