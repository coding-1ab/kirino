import { KirinoClient } from './client.js'
import '@sapphire/plugin-hmr/register'
import 'dotenv/config'

const client = new KirinoClient({
	token: process.env.DISCORD_TOKEN!,
})

await client.login()
