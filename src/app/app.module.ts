import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeComponent } from './components/pages/home/home.component';

// Entradas blog
import { Blogentrada1Component } from './components/pages/blogentradas/blogentrada1/blogentrada1.component';
import { Blogentrada2Component } from './components/pages/blogentradas/blogentrada2/blogentrada2.component';
import { Blogentrada3Component } from './components/pages/blogentradas/blogentrada3/blogentrada3.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    BlogsidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogdetailsComponent,
    BlogstandardComponent,
    ContactComponent,
    ErrorComponent,
    FaqComponent,
    HomeComponent,
    Blogentrada1Component,
    Blogentrada2Component,
    Blogentrada3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
