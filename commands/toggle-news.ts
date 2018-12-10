import { Message } from 'discord.js';
import {Command} from './command';

export default class ToggleNewsCommand implements Command {
  public async run(args: string[], { guild, channel, member }: Message) {
    const newsRole = guild.roles.find(role => role.name === 'News');

    if (member.roles.has(newsRole.id)) {
      await member.removeRole(newsRole);
      await channel.send('removed news role!');
    } else {
      await member.addRole(newsRole);
      await channel.send('added news role!');
    }
  }
}
