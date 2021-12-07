export interface IEvent {
  id: number;
  note: string;
  date: string;
}

export type ICreateNewEventProps = {
  addEvent: (event: IEvent) => void;
  event?: IEvent;
  onDelete?: (id: number) => void;
};

export type IShowEventProps = {
  addEvent?: (event: IEvent) => void;
  event: IEvent;
  onDelete: (id: number) => void;
};
