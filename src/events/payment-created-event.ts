import { Subjects } from './subjects';

export interface IPaymentCreated {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
