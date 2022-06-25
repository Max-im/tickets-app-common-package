import { Subjects } from './subjects';

export interface ITicketUpdated {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
  };
}
