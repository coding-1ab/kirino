import { PrismaClient } from '@prisma/client'

export class ReportQueue {
	constructor(private readonly prisma: PrismaClient) {}

	async report({
		accused,
		messages,
		reporter,
	}: {
		accused: string
		messages: Array<string>
		reporter: string
	}) {
		await this.prisma.report.create({
			data: {
				accused,
				messages,
				voters: [reporter],
			},
		})
	}

	async showOpenedReports() {
		return this.prisma.report.findMany({
			where: { status: 'REPORTED' },
		})
	}

	async resolve(reportId: string, resolvedBy: string) {
		await this.prisma.report.update({
			where: { id: reportId },
			data: {
				status: 'RESOLVED',
				resolvedBy,
			},
		})
	}
}
