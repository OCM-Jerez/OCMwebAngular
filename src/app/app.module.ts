import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/pages/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';

// Entradas blog
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
import { MotivosPreocupacionComponent } from './components/pages/blogentradas/motivos-preocupacion/motivos-preocupacion.component';
import { TsunamiEconomicoComponent } from './components/pages/blogentradas/tsunami-economico/tsunami-economico.component';
import { AutobusesAccesibilidadComponent } from './components/pages/blogentradas/autobuses-accesibilidad/autobuses-accesibilidad.component';
import { CardEntradaComponent } from './components/pages/blogstandard/components/card-entrada/card-entrada.component';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogdetailsComponent,
    BlogsidebarComponent,
    BlogstandardComponent,
    ContactComponent,
    ErrorComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PreloaderComponent,
    Blogentrada1Component,
    Blogentrada2Component,
    Blogentrada3Component,
    LoQueSeVeComponent,
    Comujesa202109Component,
    CuentasGenerales20192020Component,
    JerezNoLesInteresaComponent,
    Jerez14999Component,
    DescontrolPresupuestarioComponent,
    AQuienLeImportaComponent,
    MotivosPreocupacionComponent,
    TsunamiEconomicoComponent,
    AutobusesAccesibilidadComponent,
    CardEntradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
