import { ConfigItem } from './config-item'

export enum AppType {
    incoming, //Message originates from third party system and will post to chat
    outgoing  //Message originates from chat and will (maybe) post to third party system
}

export class App {
    id: number
    name: string
    iconUrl: string
    description: string
    tags: string[]

    type: AppType
    configDescription: ConfigItem[];
}