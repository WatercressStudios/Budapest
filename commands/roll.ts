import { Message } from 'discord.js';
import * as droll from 'droll';
import { Command } from './command';

export default class RollCommand implements Command {
  public async run(args: string[], msg: Message) {
    const roll = droll.roll(args[0]);
    await msg.channel.send(`Your rolls are ${roll.rolls}.\nin total, ${roll.total}!`);
  }
}
