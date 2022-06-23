import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './classes/ticket-created-publisher';

const stan = nats.connect('tickets', 'abc', {url: 'http://localhost:4222'});

stan.on('connect', async () => {

    const publisher = new TicketCreatedPublisher(stan);
    
    try{

        await publisher.publish({
            id: 'eee',
            title: 'concert',
            price: 20
        });
    } catch(err) {
        console.log(err)
    }
});
