import { Subjects } from './subjects';

export interface IOrderCanceled {
  subject: Subjects.OrderCanceled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
