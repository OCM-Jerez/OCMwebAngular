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


// Entradas blog


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
