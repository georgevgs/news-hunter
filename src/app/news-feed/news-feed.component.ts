import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers:[NewsService]
})
export class NewsFeedComponent implements OnInit {
  news: any; 

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsArticlesFetcher();
  }

  newsArticlesFetcher(): void {
    this.newsService.getTopHeadLines().subscribe(
      (result: any) => {
        this.news = result.articles;
        console.table(this.news);
      },
      (err: string) => {
        console.log('ERROR=' + err);
      }
    );
  }
}
