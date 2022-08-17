
let autos = [
    {
    marca: 'Ford',
    modelo: 'Fiesta',
    precio: 150000,color: 'Azul',
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: 'APL123',
    vendido: false,
    },
    {
    marca: 'Toyota',
    modelo: 'Corolla',
    precio: 100000,
    km: 0,
    color: 'Blanco',
    cuotas: 14,
    anio: 2019,
    patente: 'JJK116',
    vendido: false,
    }
]



let concesionaria = {
    
    autos: autos,

    buscarAuto: function(patente){
       
        for(let i = 0; i < this.autos.length; i++){
            if (this.autos[i].patente == patente){
              return this.autos[i];
            } 
        } return null;


      
    },

  




    venderAuto: function(patente){
       let autoBuscado = this.buscarAuto(patente)
       if(autoBuscado != null){
       return autoBuscado.vendido = true;
       }
    
      

    },
    autosParaLaVenta: function(){
        let autosParaVender =  this.autos.filter(function(elemento){
           return elemento.vendido == false;
        }) 
        return autosParaVender;
    },
    
    autosNuevos: function(){
        let autosN = this.autosParaLaVenta().filter(function(elemento){
            return elemento.km <100;
        })
        return autosN;
    },
   
    autosVendidos: function(){
      let autosVen=   this.autos.filter(function(elemento){
            return elemento.vendido == true;
        })
        return autosVen;
        
    },
    
    listaDeVentas: function(){
        let listV = [];

        for (i=0; i< this.autosVendidos().length; i++) {
            listV.push(this.autosVendidos()[i].precio);
        }
        return listV;
    },  

    totalDeVentas: function(){
        if (this.listaDeVentas() == 0){
            return 0
        }

        let totalVen = this.listaDeVentas().reduce(function(a,b){
            return a + b;

        })
        return totalVen;
    },

    puedeComprar: function(auto,persona){
        if((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas))){
            return true;
        } else {
            return false;
        }

    },

    
    autosQuePuedeComprar: function(persona){
        let autosVenta = this.autosParaLaVenta();
        let autosPuedeComprar = []; 

        for(i =0; i < autosVenta.length; i++){
        //let puedeComprar = this.puedeComprar(autosVenta,persona);  
         //console.log("Lista puede comprar " + puedeComprar + i);
         if (this.puedeComprar(autosVenta[i],persona) == true){
           autosPuedeComprar.push(autosVenta[i]);

           //for(let x of autosVenta){
           // if (this.puedeComprar(x,persona)==true){
           //    autosPuedeComprar.push(x);
            }
           
         }
        return autosPuedeComprar; 

        },
      

  
};
let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,}
 



console.log(concesionaria.autosQuePuedeComprar(persona));
/*
    puedeComprar: function(){
        let autoAComprar = this.autosParaLaVenta();
        let persona = {
            nombre: "Juan",
            capacidadDePagoEnCuotas: 20000,
            capacidadDePagoTotal: 100000,

        }
        for(i = 0; i < autoAComprar.length; i++){
           if((persona.capacidadDePagoTotal>= autoAComprar[i].precio) && (persona.capacidadDePagoEnCuotas > (autoAComprar[i].precio/autoAComprar[i].cuotas)) ){
            return true;  
        
        } 
                
        } 
          return false; 
          
          */
        

  





    

    



