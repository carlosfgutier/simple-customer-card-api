import { Card } from '../response';
import takeHomeCustomerCard from './takeHomeCustomerCard';

// mocked card context
export type CardContext = {
    eventsCount: number;
    eventsBudget: number;
    contractValue: number;
    teamName: string,
    role: string,
    id: string,
};

export function getCustomerCards(ctx: CardContext): Card[] {
  return [
    takeHomeCustomerCard(ctx.eventsCount, ctx.eventsBudget, ctx.contractValue, ctx.teamName, ctx.role, ctx.id),
  ];
}