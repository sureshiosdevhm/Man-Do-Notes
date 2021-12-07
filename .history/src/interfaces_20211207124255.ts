export interface IEvent {
  id: number;
  note: string;
  date: string;
}

export interface ICreateNewEventProps {
  addEvent: (event: IEvent) => void;
  event?: IEvent;
  onDelete?: (id: number) => void;
}

export interface IShowEventProps {
  addEvent?: (event: IEvent) => void;
  event: IEvent;
  onDelete: (id: number) => void;
}
