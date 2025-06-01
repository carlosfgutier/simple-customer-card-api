import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const auth = req.headers['authentication'];
  const expectedToken = process.env.AUTH_TOKEN;

  if (auth !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json({
    cards: [
      {
        key: 'carlos-fernando-gutierrez-take-home-customer-card',
        timeToLiveSeconds: 300,
        components: [
          {
            componentText: {
              text: "Plan: Pro ($399/month)"
            }
          },
          {
            componentText: {
              text: "Events this month: 1,234"
            }
          },
          {
            componentText: {
              text: "Role: Admin"
            }
          },
          {
            componentLinkButton: {
              linkButtonLabel: "Edit in internal tool",
              linkButtonUrl: "https://internal.trackly.io/customers/trackly_001"
            }
          }
        ]
      }
    ]
  });
}
