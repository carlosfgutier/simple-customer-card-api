import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getCustomerCards } from '../src/cards';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-cache');

  // Test values
  // const context = {
  //   eventsCount: 1234,
  //   eventsBudget: 2000,
  //   contractValue: 399,
  //   teamName: 'Sales',
  //   role: 'User',
  //   id: 'usr_9a8b7c6x5t',
  // };

  const context = {
    eventsCount: 1850,
    eventsBudget: 2000,
    contractValue: 0,
    teamName: 'Engineering',
    role: 'Admin',
    id: 'adm_340y990c',
  };

  

  const cards = getCustomerCards(context);
  res.status(200).json({ cards });
}
