import nats from 'node-nats-streaming';
import {randomBytes} from 'crypto';
import { TicketCreaterListener } from './classes/ticket-listener';

const stan = nats.connect('tickets', randomBytes(4).toString('hex'), {url: 'http://localhost:4222'});

stan.on('connect', () => {
    stan.on('close', () => process.exit());

    new TicketCreaterListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());