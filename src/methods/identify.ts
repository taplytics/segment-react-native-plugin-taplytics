import type { IdentifyEventType } from '@segment/analytics-react-native';
import * as Taplytics from 'taplytics-react-native';

export default (event: IdentifyEventType) => {
  const { email, firstName, lastName, name, age, gender, ...customAttributes } = event.traits;

  const userAttributes = {
    user_id: event.userId,
    email,
    firstName,
    lastName,
    name,
    age,
    gender,
    customData: customAttributes,
  };

  const cleanedUserAttributes = JSON.parse(JSON.stringify(userAttributes));

  Taplytics.setUserAttributes(cleanedUserAttributes);
  return event;
};
