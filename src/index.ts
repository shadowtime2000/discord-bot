import { Client } from 'discord.js';

import config from "./config";

const client = new Client();

require("./core/loadWidgetListeners")(client);

client.login(config.token).catch((error) => {
  console.error(error);
  process.exit(1);
});
