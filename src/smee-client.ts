import SmeeClient from 'smee-client';

const smee = new SmeeClient({
  source: 'https://smee.io/KNpRk0s5DGwxR51E',
  target: 'http://localhost:3000/webhook/clickup',
  logger: console
});

const events = smee.start();

// Stop forwarding events
process.on('SIGINT', () => {
  events.close();
  process.exit();
});