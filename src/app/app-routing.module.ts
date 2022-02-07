import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { Blogentrada1Component } from './components/pages/blogentradas/blogentrada1/blogentrada1.component';
import { Blogentrada2Component } from './components/pages/blogentradas/blogentrada2/blogentrada2.component';
import { Blogentrada3Component } from './components/pages/blogentradas/blogentrada3/blogentrada3.component';
import { LoQueSeVeComponent } from './components/pages/blogentradas/lo-que-se-ve/lo-que-se-ve.component';
import { Comujesa202109Component } from './components/pages/blogentradas/comujesa202109/comujesa202109.component';
import { CuentasGenerales20192020Component } from './components/pages/blogentradas/cuentas-generales20192020/cuentas-generales20192020.component';
import { JerezNoLesInteresaComponent } from './components/pages/blogentradas/jerez-no-les-interesa/jerez-no-les-interesa.component';
import { Jerez14999Component } from './components/pages/blogentradas/jerez14999/jerez14999.component';
import { DescontrolPresupuestarioComponent } from './components/pages/blogentradas/descontrol-presupuestario/descontrol-presupuestario.component';
import { AQuienLeImportaComponent } from './components/pages/blogentradas/a-quien-le-importa/a-quien-le-importa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog-detail',
    component: BlogdetailsComponent,
  },
  {
    path: 'blog',
    component: BlogstandardComponent,
  },

  // Inicio entradas blog
  {
    path: 'blogentrada1',
    component: Blogentrada1Component,
  },
  {
    path: 'blogentrada2',
    component: Blogentrada2Component,
  },
  {
    path: 'blogentrada3',
    component: Blogentrada3Component,
  },
  {
    path: 'loQueSeVe',
    component: LoQueSeVeComponent,
  },

  {
    path: 'comujesa202109',
    component: Comujesa202109Component,
  },

  {
    path: 'cuentasGenerales20192020',
    component: CuentasGenerales20192020Component,
  },
  {
    path: 'JerezNoLesInteresa',
    component: JerezNoLesInteresaComponent,
  },
  {
    path: 'Jerez14999',
    component: Jerez14999Component,
  },
  {
    path: 'DescontrolPresupuestario',
    component: DescontrolPresupuestarioComponent,
  },
  {
    path: 'AQuienLeImporta',
    component: AQuienLeImportaComponent,
  },

  // Final entradas blog

  {
    path: 'faqs',
    component: FaqComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
