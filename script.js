function tabuada(){
    let num, contador;
    num = document.getElementById('num').value;
    contador = ''
    
        for(cont = 0; cont <= 10; cont++){
          contador += `${num} x ${cont} = ${num * cont}<br>`
        
        document.getElementById('resultado').innerHTML = contador
      }
    }