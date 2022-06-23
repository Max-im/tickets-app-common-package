import { Message } from 'node-nats-streaming';
import { Listener } from './listener';
import { Subjects } from './subjects';
import { ITicketCreated } from './ticket-created-event'; 

export class TicketCreaterListener extends Listener<ITicketCreated> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    queueGroupName = 'payment-service';
    
    onMessage(data: ITicketCreated['data'], msg: Message) {

    }
}