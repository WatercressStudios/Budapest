import { Message } from 'discord.js';
import Watercress from '../specifics/watercress';
import { Command } from './command';

const COLORS = [
  'E55300',
  'E58806',
  'Fucking Pink',
  'Light Purple',
  'Light Teal',
  'Dark Teal',
  'clear',
];

export default class ColorizeCommand implements Command {
  public async run(args: string[], msg: Message) {
    const color = args[0];

    // check the colors for 
    if (!msg.member.roles.has(Watercress.instance.roles.dev.id)) {
      await msg.channel.send("Hang on... you're not a dev!");
      return;
    }
    
    // Check if the color's valid
    const colorRole = msg.guild.roles.find(role => role.name === color);
    if (colorRole === null) {
      await msg.channel.send(`Uh... I don't think ${color} is a color?`);
      return;
    }
    
    // firstly, delete all the roles so new roles can be applied
    for (const r of msg.member.roles.array()) {
      if (COLORS.includes(r.name)) {
        const roleToRemove = msg.guild.roles.find(x => x.name === r.name);
        await msg.member.removeRole(roleToRemove);
      }
    }

    // stop here if the purpose is to remove roles
    if (color === 'clear') {
      await msg.channel.send('Removed your color role!');
      return;
    }
    
    // color given
    await msg.member.addRole(colorRole);
    await msg.channel.send(`Color ${color} has been given`);
  }
}
