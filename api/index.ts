import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getCustomerCards, CardContext } from '../src/cards';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-cache');

  const requestedCardKeys = req.body?.cardKeys || [];

  // Mocked values otherwised parsed from the request body.
  // I wanted to try different types of cards, and realized that
  // in real life it would make more sense to group cards by type 
  // under endpoints like: /customer-info, /request-info, etc.
  // to avoid having massive contexts with data from different objects.
  const context: CardContext = {
    eventsCount: 1850,
    eventsBudget: 2000,
    contractValue: 399,
    teamName: 'Engineering',
    role: 'Admin',
    id: 'adm_340y990c',
    channelName: 'Support (Chat)',
    channelStatus: 'Online',
    channelHours: 'Mon–Fri, 9am–6pm',
    requestTitle: 'Issue with onboarding',
    requestSummary: 'Customer reported an issue with connecting their Google account during onboarding.',
  };

  const allCards = getCustomerCards(context);
  const filteredCards = requestedCardKeys.length
    ? allCards.filter((card) => requestedCardKeys.includes(card.key))
    : allCards;

  res.status(200).json({ cards: filteredCards });
}
