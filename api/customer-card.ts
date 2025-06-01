import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const expectedToken = process.env.AUTH_TOKEN;
  const auth = req.headers['authentication'];

  if (auth !== expectedToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.status(200).json({
    components: [
      {
        key: "plan",
        type: "text",
        text: "Plan: Pro ($399/month)"
      },
      {
        key: "events",
        type: "text",
        text: "Events this month: 1,234"
      },
      {
        key: "role",
        type: "text",
        text: "Role: Admin"
      },
      {
        key: "edit_link",
        type: "link",
        text: "Edit in internal tool",
        href: "https://internal.trackly.io/customers/trackly_001"
      }
    ]
  });
}
