import type { NextApiRequest, NextApiResponse } from 'next';
import { EmbedBuilder, WebhookClient } from 'discord.js';

const webhookId = process.env.DISCORD_WEBHOOK_ID as string;
const webhookToken = process.env.DISCORD_WEBHOOK_TOKEN as string;

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const ip = req.headers['x-forwarded-for'];
  const userAgent = req.headers['user-agent'];

  const { title } = JSON.parse(req.body);

  const embed = new EmbedBuilder({
    title,
    description: `IP: ${ip}\n User agent: ${userAgent}`,
    color: 0x1d8954,
  });

  webhookClient.send({
    username: 'lrnxie.com log',
    embeds: [embed],
  });

  return res.status(200).send('ok');
}
