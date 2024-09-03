import {
	container,
	SapphireClient,
} from '@sapphire/framework'
import { ReportQueue } from './services/report-queue.js'
import { PrismaClient } from '@prisma/client'

export class KirinoClient extends SapphireClient {
	private readonly _token: string

	public constructor({ token }: { token: string }) {
		super({
			intents: [],
		})

		this._token = token
	}

	public override async login() {
		container.prisma = new PrismaClient()
		container.reportQueue = new ReportQueue(
			container.prisma,
		)
		return super.login(this._token)
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		prisma: PrismaClient
		reportQueue: ReportQueue
	}
}
