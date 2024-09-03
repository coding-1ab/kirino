import { SapphireClient } from '@sapphire/framework'
import '@sapphire/plugin-hmr/register'
import { ReportQueue } from './services/report-queue.js'
import { PrismaClient } from '@prisma/client'

export class KirinoClient extends SapphireClient {
	private readonly _token: string
	private prisma: PrismaClient
	private reportQueue: ReportQueue

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
