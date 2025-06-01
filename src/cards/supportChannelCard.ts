import { Card } from '../response';
import { CardContext } from './index';

const supportChannelCard = (ctx: CardContext): Card => {
  const { channelName, channelStatus, channelHours } = ctx;

  return {
    key: 'support-channel-card',
    timeToLiveSeconds: 300,
    components: [
      {
        componentText: {
          text: '📡 **Support Channel**',
          textSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            { componentText: { text: 'Channel name', textColor: 'MUTED' } },
          ],
          rowAsideContent: [
            { componentText: { text: channelName } },
          ],
        },
      },
      {
        componentRow: {
          rowMainContent: [
            { componentText: { text: 'Status', textColor: 'MUTED' } },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: channelStatus,
                badgeColor: channelStatus === 'Online' ? 'GREEN' : 'GREY',
              },
            },
          ],
        },
      },
      {
        componentRow: {
          rowMainContent: [
            { componentText: { text: 'Hours', textColor: 'MUTED' } },
          ],
          rowAsideContent: [
            { componentText: { text: channelHours } },
          ],
        },
      },
    ],
  };
};

export default supportChannelCard;
