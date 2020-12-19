import { Injectable } from '@angular/core';
 
@Injectable()
export class MarthasService {
  

    private marthas:any[]= [
        {
          nombre: "Marthita arcoíris ",
          bio: "Es un fenómeno óptico que sin importar quién eres y a dónde vas, frente a esta mujer te emocionarás siempre y te deslumbrará con su gran sonrisa.",
          img: "assets/img/marthita_1.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Marthita Princesa ",
          bio: "Es la más débil, pero lo compensa con su inteligencia y su gran belleza.",
          img: "assets/img/marthita_2.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Marthita like ",
          bio: "Es una mujer determinada y con mucha confianza. No es una mujer pesada, es una persona mu bonita porque ella quiere que todas las personas alcancen el éxito que se merece y que todos puedan brillar. Se tiene fé y sabe que tenerse fé a uno mismo es fundamental para alcanzar los propios sueños.",
          img: "assets/img/marthita_3.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Marthita dormilona",
          bio: "Arriesgando su futuro en la carrera por 15 minutos extra de sueño.",
          img: "assets/img/marthita_4.jpg",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Marthita ojos bonitos",
          bio: "Ella tiene unos ojos hermosos, no por el color que tienen, sino por lo que transmiten y causan.",
          img: "assets/img/marthita_5.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Marthita flor",
          bio: "Ella es una flor que crece en la superficie de la luna. Única y misteriosa, su belleza es un regalo precioso sobre lienzo de luna. Cuando miras a una mujer por primera vez, de hecho estás ciego ante su belleza. La verdadera belleza de una mujer se revela solo después de que la conoces",
          img: "assets/img/marthita_6.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Marthita Elegante",
          bio: "Apesar de ser muy elegante he visto el negro absoluto; es indescriptiblemente hermos@.",
          img: "assets/img/marthita_7.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Marthita Deportista",
          bio: "Es una mujer fuerte porque se levanta cada mañana con ganas de ganarle al día, porque cada vez que se cae se vuelve a levantar más convencida y porque se para frente a la vida con actitud y con ganas de ser la mejor versión de si mismaa a diario. Da cabida a la pena y el dolor, pero aún más a la gratitud y alegría.",
          img: "assets/img/marthita_8.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Marthita Ninja",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia.",
          img: "assets/img/marthita_9.jpeg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
        
  
  
    constructor() { 
        console.log("Servicio listo para usar!!!");


     }

     getMarthas(){
        return this.marthas;
      }


}

export interface Martha {
nombre:string;
bio:string;
img:string;
aparicion:string;
casa:string;

};