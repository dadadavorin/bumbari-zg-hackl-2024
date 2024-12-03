export interface IEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  image_url?: string;
  price?: number;
  link: string;
}

export interface IEventResponse {
  event: IEvent;
}

export interface IEventList {
  events: Array<IEvent>;
}
