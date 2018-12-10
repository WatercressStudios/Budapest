import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

import logger from './helpers/logger';
import parseCommand from './helpers/parse-command';

import route from './router';
import Watercress from './specifics/watercress';

dotenv.load();
const PREFIX = '!';
const buda = new Client();

buda.on('guildMemberAdd', async member => {
  await member.setRoles([
    Watercress.instance.roles.guest,
    Watercress.instance.roles.dev,
  ]);
});

buda.on('message', async msg => {
  if (msg.content.startsWith(PREFIX)) { // Is a command
    const [command, ...args] = parseCommand(msg.content);
    await route(command.substring(PREFIX.length), args, msg);
  }
});

buda.login(process.env.DISCORD_TOKEN).then(async () => {
  await buda.user.setPresence({ status: 'online', game: { name: `Palinurus | ${PREFIX}help for info!` } });
  const wcServer = buda.guilds.get('219252484122738688');

  Watercress.instantiate(wcServer);
  logger.info('Budapest started');
});
