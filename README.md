# @taplytics/segment-react-native-plugin-taplytics

`DestinationPlugin` for [Taplytics](https://taplytics.com/). Wraps [`taplytics-react-native`](https://github.com/taplytics/taplytics-react-native).

## Installation

You need to install the `@taplytics/segment-react-native-plugin-taplytics` and the `taplytics-react-native` dependency.

Using NPM:
```bash
npm install --save @taplytics/segment-react-native-plugin-taplytics taplytics-react-native
```

Using Yarn:
```bash
yarn add @taplytics/segment-react-native-plugin-taplytics taplytics-react-native
```

Run `pod install` after the installation to autolink the Taplytics SDK.

See [taplytics-react-native](https://docs.taplytics.com/docs/react-native-sdk#set-user-attributes) for more details of this dependency.
See [@segment/analytics-react-native](https://github.com/segmentio/analytics-react-native) for more details on how to add Segment analytics to your React Native app.
## Usage

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with a `TaplyticsPlugin` instance. 

```ts
import { createClient } from '@segment/analytics-react-native';

import { TaplyticsPlugin } from '@taplytics/segment-react-native-plugin-taplytics';

const segmentClient = createClient({
  writeKey: 'SEGMENT_KEY'
});

segmentClient.add({ plugin: new TaplyticsPlugin() });
```
