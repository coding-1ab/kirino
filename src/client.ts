import { SapphireClient } from '@sapphire/framework'
import { ReportQueue } from './services/report-queue.js'
import { PrismaClient } from '@prisma/client'

export class KirinoClient extends SapphireClient {
	private readonly _token: string
	private prisma: PrismaClient
	reportQueue: ReportQueue

	public constructor({ token }: { token: string }) {
		super({
			intents: [],
		})

		this._token = token
	}

	public override async login() {
		this.prisma = new PrismaClient()
		this.reportQueue = new ReportQueue(this.prisma)
		return super.login(this._token)
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		reportQueue: ReportQueue
	}
}
