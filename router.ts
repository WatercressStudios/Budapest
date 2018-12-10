import { Message } from 'discord.js';
import { Command } from './commands/command';

import logger from './helpers/logger';

import ColorizeCommand from './commands/colorize';
import HelpCommand from './commands/help';
import NotFoundCommand from './commands/notfound';
import RollCommand from './commands/roll';
import ToggleNewsCommand from './commands/toggle-news';

const router: {[id: string]: Command} = {
  colorize: new ColorizeCommand(),
  togglenews: new ToggleNewsCommand(),
  roll: new RollCommand(),
  help: new HelpCommand(),
};

export default async function route(cmd: string, args: string[], msg: Message) {
  logger.info(`${cmd}: ${args}`);
  const command: Command = router[cmd] || new NotFoundCommand();
  await command.run(args, msg);
}
