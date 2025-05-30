export default function handler(req, res) {
  res.status(200).json({
    components: [
      {
        type: "text",
        text: "Plan: Pro ($399/month)"
      },
      {
        type: "text",
        text: "Events this month: 1,234"
      },
      {
        type: "text",
        text: "Role: Admin"
      },
      {
        type: "link",
        text: "Edit in internal tool",
        href: "https://internal.trackly.io/customers/trackly_001"
      }
    ]
  });
}
