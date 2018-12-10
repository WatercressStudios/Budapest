import { Message } from 'discord.js';
import { Command } from './command';

export default class NotFoundCommand implements Command {
  public async run(args: string[], msg: Message) {
    await msg.channel.send("Sorry, I couldn't understand your command?");
  }
}
