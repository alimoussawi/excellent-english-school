import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './layout/footer/footer.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { ShellComponent } from './shell/shell.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    FooterComponent,
    CourseDetailsComponent,
    ShellComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(
      { defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
