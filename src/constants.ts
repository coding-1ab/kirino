import { Status } from '@prisma/client'

export const statusColor = {
	[Status.REPORTED]: 0xed4245,
	[Status.RESOLVED]: 0x57f287,
	[Status.CLOSED]: 0x2c2f33,
}
