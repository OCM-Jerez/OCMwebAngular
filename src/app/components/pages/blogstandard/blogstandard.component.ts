import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../commons/interfaces/post.interface';

@Component({
  selector: 'app-blogstandard',
  templateUrl: './blogstandard.component.html',
  styleUrls: ['./blogstandard.component.css']
})
export class BlogstandardComponent implements OnInit {
  public posts: IPost[];
  constructor() { }

  ngOnInit(): void {
    this.posts = [
      // {
      //   title: '',
      //   author: 'Por OCM',
      //   date: '',
      //   new: false,
      //   extract: '',
      //   extract1: '',
      //   extract2: '',
      //   image: '',
      //   tag: 'Economia',
      //   routerLink: ''
      // },
      {
        title: 'Autobuses Urbanos y Accesibilidad en Jerez',
        author: 'Por OCM',
        date: '26 enero 2023',
        new: true,
        extract: '¿Ignorancia, insensibilidad o incumplimiento ante la discapacidad?',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'autobuses',
        routerLink: '/AutobusesAccesibilidad'
      },
      {
        title: 'EL TSUNAMI (ECONÓMICO) LLEGARÁ A JEREZ EN 2024…',
        author: 'Por OCM',
        date: '19 marzo 2022',
        new: false,
        extract: 'Los jerezanos recordaremos en 2024 a los que siguen alimentando el tsunami económico que se nos viene encima…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/TsunamiEconomico'
      },
      {
        title: '  Motivos para la preocupación (otra vez...) con las cuentas del Ayuntamiento',
        author: 'Por OCM',
        date: '8 marzo 2022',
        new: false,
        extract: 'No sé si tendrá razón un buen amigo, que me dijo que “Jerez es como Mónaco, pero en tieso”… Lo que sí sé es que los jerezanos recordaremos en 2024 a los que siguen alimentando el tsunami económico que se nos viene encima…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/MotivosPreocupacion'
      },
      {
        title: 'A quién le importa',
        author: 'Por OCM',
        date: '7 febrero 2022',
        new: false,
        extract: 'Hace casi cuarenta años que la cantante Alaska, junto con el grupo Dinarama, hizo tremendamente popular la canción “A quién le importa”…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/AQuienLeImporta'
      },
      {
        title: 'Descontrol presupuestario',
        author: 'Por OCM',
        date: '2 diciembre 2021',
        new: false,
        extract: 'Como gobernar sin rigor presupuestario alguno, o mejor aún, sin presupuesto…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/DescontrolPresupuestario'
      },
      {
        title: 'Jerez se vende por sólo 14.999 euros…',
        author: 'Por OCM',
        date: '30 noviembre 2021',
        new: false,
        extract: 'Imagine por un momento que tuviera usted un par de hijos…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Contratos',
        routerLink: '/Jerez14999'
      },
      {
        title: 'JEREZ NO (les) INTERESA…',
        author: 'Por OCM',
        date: '12 noviembre 2021',
        new: false,
        extract: 'No se equivoque: JEREZ SÍ INTERESA… La Feria, la Semana Santa, las zambombas, el flamenco, los vinos, los caballos, las motos… Jerez interesa y atrae con sus encantos a cientos de miles de personas cada año. A toda esa gente claro que les interesa. De quienes les hablo es de otros. De los gobernantes de los distintos niveles de la administración…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/JerezNoLesInteresa'
      },
      {
        title: 'Cuentas generales del Ayuntamiento. Las irregularidades que no cesan…',
        author: 'Por OCM',
        date: '16 octubre 2021',
        new: false,
        extract: 'Imagine por un momento que vuelve a ser un niño en edad escolar… Imagine que, año tras año, suspende siempre la misma asignatura… Imagine que el examen es siempre el mismo, y que usted se equivoca en las mismas preguntas, dando las mismas respuestas erróneas una y otra vez…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/cuentasGenerales20192020'
      },
      {
        title: 'A vueltas con Comujesa y los autobuses…',
        author: 'Por OCM',
        date: '23 septiembre 2021',
        new: false,
        extract: ' En julio de 2020 nuestro Ayuntamiento anunció su intención de trasladar parte de los servicios prestados por Comujesa a la parcela de la Ciudad de la Justicia…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/comujesa202109'
      },
      {
        title: 'Lo que se ve, y lo que no se ve…',
        author: 'Por OCM',
        date: '10 septiembre 2021',
        new: false,
        extract: 'Es probable que dentro de unos días el pleno del Ayuntamiento de Jerez apruebe la solicitud para 2022 de un nuevo préstamo de 9 millones de euros, para el pago de sentencias a pagar a antiguos proveedores, con la posibilidad de que el préstamo se amplíe a 12 millones…',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/loQueSeVe'
      },
      {
        title: 'Lo que no te han contado del presupuesto…',
        author: 'Por OCM',
        date: '17 agosto 2021',
        new: false,
        extract: 'Hace ya más de dos semanas que la Delegada de Economía del Ayuntamiento de Jerez, Laura Álvarez, compareció ante los medios para informar del, a su juicio, excelente estado de las cuentas municipales',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/blogentrada3'
      },
      {
        title: 'Coste efectivo de los servicios prestados por el Ayuntamiento año 2019.',
        author: 'Por OCM',
        date: '3 agosto 2021',
        new: false,
        extract: 'odos los datos se han obtenido del informe emitido por el servicio económico-financiero del Ayuntamiento de Jerez',
        extract1: '',
        extract2: '',
        image: '',
        tag: 'Economia',
        routerLink: '/blogentrada1'
      }
    ]
  }





}
