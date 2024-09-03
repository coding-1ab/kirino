import { ApplyOptions } from '@sapphire/decorators'
import { Listener } from '@sapphire/framework'
import type { Client } from 'discord.js'

@ApplyOptions<Listener.Options>({})
export class ReadyEvent extends Listener {
	public override run(client: Client) {
		const { username } = client.user!

		this.container.logger.info(
			`Logged in as ${username}`,
		)
	}
}
