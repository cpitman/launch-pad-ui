import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { App } from '../models/app';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent implements OnInit {

  app: App;

  constructor(private route:ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.params.forEach((params) => {
      let name = params['name'];
      this.appService.getAppByName(name).then((i) => this.app = i);
    });
    
  }

}
