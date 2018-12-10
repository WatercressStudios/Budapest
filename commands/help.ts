import { Message } from 'discord.js';
import { Command } from './command';

const helpMessage = `
**Budapest use guides**
\`!help\` - show this guide!
\`!colorize\` [color|clear] - colorize your username!
\`!roll [dice-notation]\` - roll dice.
\`!togglenews\` - toggle server pings.
`;

export default class HelpCommand implements Command {
  public async run(args: string[], msg: Message) {
    await msg.author.send(helpMessage);
  }
}
