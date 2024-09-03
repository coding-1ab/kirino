import { ApplyOptions } from '@sapphire/decorators'
import { Listener } from '@sapphire/framework'

@ApplyOptions<Listener.Options>({})
export class ReadyEvent extends Listener {
	public override run() {
		const { username, discriminator } =
			this.container.client.user!

		this.container.logger.info(
			`Logged in as ${username}#${discriminator}`,
		)
	}
}
