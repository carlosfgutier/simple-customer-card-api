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
            type: "text",
            key: "plan",
            text: "Plan: Pro ($399/month)"
          },
          {
            type: "text",
            key: "events",
            text: "Events this month: 1,234"
          },
          {
            type: "text",
            key: "role",
            text: "Role: Admin"
          },
          {
            type: "link",
            key: "edit_link",
            text: "Edit in internal tool",
            href: "https://internal.trackly.io/customers/trackly_001"
          }
        ]
      }
    ]
  });
}
