import {Guild, Role} from 'discord.js';

interface RoleCollection {
  dev: Role;
  guest: Role;
  newsNotification: Role;
}

export default class Watercress {
  public static instance: Watercress;

  public guild: Guild;
  public roles: RoleCollection;

  public static instantiate(guild: Guild) {
    const wc = new Watercress();
    wc.guild = guild;
    wc.roles = {
      dev: guild.roles.find(role => role.name === 'Watercress Devs'),
      guest: guild.roles.find(role => role.name === 'Guest'),
      newsNotification: guild.roles.find(role => role.name === 'News'),
    };
    Watercress.instance = wc;
  }
}
