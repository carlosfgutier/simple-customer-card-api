import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const auth = req.headers['authentication'];
  const expectedToken = process.env.AUTH_TOKEN;

  if (auth !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.setHeader('Cache-Control', 'no-cache');

  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const formattedTime = `${hours}:${minutes}:${seconds}`;


  res.status(200).json({
    cards: [
      {
        key: 'carlos-fernando-gutierrez-take-home-customer-card',
        timeToLiveSeconds: 7200,
        components: [
          {
            componentSpacer: {
              spacerSize: 'S',
            },
          },
          {
            componentRow: {
              rowMainContent: [
                {
                  componentText: {
                    text: 'Plan',
                    textColor: 'MUTED',
                  },
                },
              ],
              rowAsideContent: [
                {
                  componentText: {
                    text: 'Pro ($399/month)',
                  },
                },
              ],
            },
          },
          {
            componentSpacer: {
              spacerSize: 'M',
            },
          },
          {
            componentRow: {
              rowMainContent: [
                {
                  componentText: {
                    text: 'Events this month',
                    textColor: 'MUTED',
                  },
                },
              ],
              rowAsideContent: [
                {
                  componentText: {
                    text: '1,234',
                  },
                },
              ],
            },
          },
          {
            componentSpacer: {
              spacerSize: 'M',
            },
          },
          {
            componentRow: {
              rowMainContent: [
                {
                  componentText: {
                    text: 'Total events',
                    textColor: 'MUTED',
                  },
                },
              ],
              rowAsideContent: [
                {
                  componentText: {
                    text: '34,834',
                  },
                },
              ],
            },
          },
          {
            componentText: {
              text: `Last updated: ${formattedTime}`,
              textColor: 'MUTED',
              textSize: 'S',
            },
          },
        ],
      },
    ],
  });
}
