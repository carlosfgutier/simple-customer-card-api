import { Card } from '../response';

const takeHomeCustomerCard = (
  eventsCount: number,
  eventsBudget: number,
  contractValue: number,
  teamName: string,
  role: string,
  id: string,
): Card => {
  const now = new Date();
  const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  const usagePercentage = eventsBudget > 0 ? eventsCount / eventsBudget : 0;
  const usageBadgeColor =
    usagePercentage < 0.4 ? 'RED' :
    usagePercentage < 0.75 ? 'YELLOW' : 'GREEN';

  const contractBadgeColor = contractValue > 0 ? 'GREEN' : 'GREY';

  return {
    key: 'carlos-fernando-gutierrez-take-home-customer-card',
    timeToLiveSeconds: 300,
    components: [
      {
    "componentContainer": {
      "containerContent": [
      {
        componentText: {
          text: '📊 **Usage Overview**',
          textSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Events this month',
                textColor: 'MUTED',
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: `${eventsCount} events`,
                badgeColor: usageBadgeColor,
              },
            },
          ],
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Usage budget',
                textColor: 'MUTED',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: `${eventsBudget}`,
              },
            },
          ],
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: 'M',
        },
      },
      {
        componentText: {
          text: '💰 **Billing**',
          textSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Contract value',
                textColor: 'MUTED',
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: `$${contractValue}/month`,
                badgeColor: contractBadgeColor,
              },
            },
          ],
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: 'M',
        },
      },
      {
        componentText: {
          text: '👤 **Account Info**',
          textSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Team name',
                textColor: 'MUTED',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: `${teamName}`,
              },
            },
          ],
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Role',
                textColor: 'MUTED',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: `${role}`,
              },
            },
          ],
        },
      },
      {
        componentText: {
          text: 'Trackly ID',
          textColor: 'MUTED',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: `${id}`,
                textColor: 'MUTED',
                textSize: 'S',
              },
            },
          ],
          rowAsideContent: [
            {
              componentCopyButton: {
                copyButtonTooltipLabel: 'Copy ID',
                copyButtonValue: `${id}`,
              },
            },
          ],
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: 'M',
        },
      },
      {
        componentLinkButton: {
          linkButtonLabel: 'Edit in Admin Portal',
          linkButtonUrl: 'https://www.plain.com/docs/api-reference/ui-components',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentText: {
          text: `Last refreshed: ${formattedTime}`,
          textColor: 'MUTED',
          textSize: 'S',
        },
      },
    ]}}],
  };
};

export default takeHomeCustomerCard;