import { Card } from '../response';
import takeHomeCustomerCard from './takeHomeCustomerCard';
import supportChannelCard from './supportChannelCard';
import requestSummaryCard from './requestSummaryCard';

export type CardContext = {
  eventsCount: number;
  eventsBudget: number;
  contractValue: number;
  teamName: string;
  role: string;
  id: string;
  channelName: string;
  channelStatus: 'Online' | 'Offline';
  channelHours: string;
  requestTitle: string;
  requestSummary: string;
};

export function getCustomerCards(ctx: CardContext): Card[] {
  return [
    takeHomeCustomerCard(ctx),
    supportChannelCard(ctx),
    requestSummaryCard(ctx),
  ];
}
