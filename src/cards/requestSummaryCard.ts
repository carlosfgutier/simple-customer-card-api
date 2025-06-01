import { Card } from '../response';
import { CardContext } from './index';

const requestSummaryCard = (ctx: CardContext): Card => {
  const { requestTitle, requestSummary } = ctx;

  return {
    key: 'request-summary-card',
    timeToLiveSeconds: 300,
    components: [
      {
        componentText: {
          text: '📝 **Request Summary**',
          textSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            { componentText: { text: 'Title', textColor: 'MUTED' } },
          ],
          rowAsideContent: [
            { componentText: { text: requestTitle } },
          ],
        },
      },
      {
        componentRow: {
          rowMainContent: [
            { componentText: { text: 'Summary', textColor: 'MUTED' } },
          ],
          rowAsideContent: [
            { componentText: { text: requestSummary } },
          ],
        },
      },
    ],
  };
};

export default requestSummaryCard;
