import { Subjects } from './subjects';
import { Publisher } from './publisher';
import { ITicketCreated } from './ticket-created-event';

export class TicketCreatedPublisher extends Publisher<ITicketCreated> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}