import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {  

  repositories = [
    {
      "Title": "ReactBookApp",
      "Description": "basic React application utilizing google api to get and read data.",
      "Type": "JavaScript",
      "Stars": 1,
      "Forks": 0
    },
    {
      "Title": "TheNewsFeed",
      "Description": "News Feed displaying top results for news now in the US.",
      "Type": "TypeScript",
      "Stars": 6,
      "Forks": 1
    },
    {
      "Title": "TheShoppingApplication",
      "Description": "basic React application utilizing google api to get and read data.",
      "Type": "TypeScript",
      "Stars": 8,
      "Forks": 2
    },
    {
      "Title": "WeatherApp",
      "Description": "basic React application utilizing google api to get and read data.",
      "Type": "TypeScript",
      "Stars": 3,
      "Forks": 1
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
