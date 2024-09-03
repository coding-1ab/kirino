import { ApplyOptions } from '@sapphire/decorators'
import { Listener } from '@sapphire/framework'
import { ActivityType } from 'discord.js'

@ApplyOptions<Listener.Options>({})
export class ReadyEvent extends Listener {
	public override run() {
		const { username, discriminator } =
			this.container.client.user!

		this.container.logger.info(
			`Logged in as ${username}#${discriminator}`,
		)

		this.container.client.user!.setPresence({
			activities: [
				{
					name: ' ',
					type: ActivityType.Custom,
					state: `분탕 때려잡는 중...`,
				},
			],
		})
	}
}
