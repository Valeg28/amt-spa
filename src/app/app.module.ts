import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AssociatoComponent } from './associato/associato.component';
import { NewsComponent } from './news/news.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ProfiloAssCompetenzaComponent } from './profilo-ass-competenza/profilo-ass-competenza.component';
import { RegistraInfoComponent } from './registra-info/registra-info.component';
import { CompletaRegistrazioneComponent } from './completa-registrazione/completa-registrazione.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ProfiloAssInfoComponent } from './profilo-ass-info/profilo-ass-info.component';
import { ProfiloAssFeedComponent } from './profilo-ass-feed/profilo-ass-feed.component';
// Routes
const appRoutes: Routes = [

  // User routes
  { path: '',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'search',  component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'registra-info', component: RegistraInfoComponent },
  { path: 'completa-registrazione', component: CompletaRegistrazioneComponent },
  { path: 'ricerca', component: RicercaComponent },
  { path: 'profilo-ass-info', component: ProfiloAssInfoComponent},
  { path: 'profilo-ass-feed', component: ProfiloAssFeedComponent},
  { path: 'profilo-ass-competenza', component: ProfiloAssCompetenzaComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AboutComponent,
    SearchComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    AdminComponent,
    LoginComponent,
    AssociatoComponent,
    NewsComponent,
    RegistrazioneComponent,
    ProfiloAssCompetenzaComponent,
    RegistraInfoComponent,
    CompletaRegistrazioneComponent,
    RicercaComponent,
    ProfiloAssInfoComponent ,
    ProfiloAssFeedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { scrollPositionRestoration: 'enabled' },
      // { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
