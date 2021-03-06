import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { WeatherFeedComponent } from './weather-feed/weather-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewsFeedComponent,
    WeatherFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
