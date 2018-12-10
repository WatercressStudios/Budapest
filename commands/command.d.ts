import { Message } from 'discord.js';

export interface Command {
  run(args: string[], msg: Message): Promise<void>;
}
