import { Client } from 'discord.js';

import loadWidgetListeners from './core/loadWidgetListeners';
import config from "./config";

const client = new Client();
loadWidgetListeners(client);

client.login(config.token).catch((error) => {
  console.error(error);
  process.exit(1);
});
