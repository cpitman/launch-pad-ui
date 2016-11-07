import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { App, AppType } from './models/app'
import { ConfigItemType } from './models/config-item'

const SAMPLE_INTEGRATIONS: App[] = [
  { 
    id: 1,
    name: 'Giphy', 
    iconUrl: 'http://giphy.com/static/img/giphy_logo_square_social.png', 
    description: 'When a user sends a message "/giphy something cool", this app searches Giphy for "something cool" and posts the resulting gif. May not be safe for work!',
    tags: ['fun'],
    type: AppType.outgoing,
    configDescription: [
      {name:'apiKey', displayName:'Giphy API Key', type: ConfigItemType.text, description: 'An API Key registered with Giphyfor use with this app.'},
      {name:'rating', displayName:'Rating', type: ConfigItemType.select, description: 'Controls the rating of content returned by Giphy, ranging from the most restrictive (Y) to everything goes (R).', validValues:['y','g', 'pg', 'pg-13', 'r']}
    ]
  },
  {
    id: 2,
    name: 'Trello',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/200px-Trello-logo-blue.svg.png',
    description: 'Watches a trello board for updates and posts them to your channel',
    tags: ['productivity', 'issue-tracking'],
    type: AppType.incoming,
    configDescription: [
      {name:'boardName', displayName:'Trello Board Name', type: ConfigItemType.text, description: 'The name of the Trello board to observe for changes'},
      {
        name:'enablesTriggers', 
        displayName:'Enabled Triggers', 
        type: ConfigItemType.multiselect, 
        description: 'Select the triggers that should be posted to the channel.',
        validValues: [
          'List created',
          'List renamed',
          'List moved to other board',
          'List archived/unarchived',
          'Board renamed',
          'Member added to board',
          'Card created',
          'Card moved',
          'Card renamed',
          'Comment added to card',
          'Attachment added to card',
          'Description changed',
          'Due date changed',
          'Label changed',
          'Member added to card',
          'Card archived/unarchived',
          'Checklist added to card',
          'Checklist Item created',
          'Checklist Item marked complete/incomplete',
        ]
      }
    ]
  }
];

@Injectable()
export class AppService {

  constructor() { }

  getInstalledApps(): Promise<App[]> {
    return Promise.resolve(SAMPLE_INTEGRATIONS);
  }

  getAppByName(name: string): Promise<App> {
    return this.getInstalledApps().then((ints) => _.find(ints, (i) => i.name == name));
  }

}
