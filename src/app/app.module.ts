import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { LastprojectsComponent } from './lastprojects/lastprojects.component';
import {NgsRevealModule} from 'ng-scrollreveal';
import {Ng2ScrollimateModule} from 'ng2-scrollimate';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';




@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ProjectComponent,
    FooterComponent,
    ExpertiseComponent,
    LastprojectsComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    Ng2ScrollimateModule,
    NgHttpLoaderModule,
    NgsRevealModule.forRoot(),
    RouterModule.forRoot([
      {
      path:'',
      component: HomeComponent
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: ':id',
            component: ProjectDetailComponent
          }
        ]
      },
      {
        path:'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
