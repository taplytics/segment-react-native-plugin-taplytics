import type { IdentifyEventType } from '@segment/analytics-react-native';
import * as Taplytics from 'taplytics-react-native';

export default (event: IdentifyEventType) => {
  const userAttributes = {
    user_id: event.userId,
    ...event.traits,
  };

  const cleanedUserAttributes = JSON.parse(JSON.stringify(userAttributes));

  Taplytics.setUserAttributes(cleanedUserAttributes);
  return event;
};
