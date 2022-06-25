import { Subjects } from './subjects';

export interface IOrderCanceled {
  subject: Subjects.OrderCanceled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
