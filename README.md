# StreamPay Widget SDK

`@stream-pay/streampay-widget-sdk` allows you to easily integrate the StreamPay widget into your web app and communicate with it.

Using this SDK is not necessary, although it will simplify your experience and therefore is recommended.

It's written with TypeScript, with all the typings defined out of the box.

## Installation

You can find the package here - https://www.npmjs.com/package/@stream-pay/streampay-widget-sdk.

Install via Yarn:

```shell
yarn add @stream-pay/streampay-widget-sdk
```

Install via npm:

```shell
npm install @stream-pay/streampay-widget-sdk
```

## Quick Start

```ts
import {
  StreamPay,
  SignedWidgetParams,
  EventType,
  ResizePayload,
} from '@stream-pay/streampay-widget-sdk';

// more info about params available at SignedWidgetParams definition
const params: SignedWidgetParams = {
  toAmount: '',
  toCurrency: '',
  toWallet: '',
  signature: '',
  apiKey: 'your-public-api-key',
  contractCall: {
    method: '',
    args: {},
  },
};

const body = document.querySelector('body');

const widget = new StreamPay({
  mountElement: body,
  environment: 'stage', // or production
  params,
});

// Subscribing to events
widget.addListener(EventType.Onload, (data: ResizePayload) => {
  // react to changes!
});

// render iframe
widget.init();
```

## StreamPay Events

StreamPay widget notifies parent window (your website), via `window.postMessage` interface.
In listener you get `event` object with browser type of `MessageEvent`.
It has property `data`, which contains our `event` object with type `WidgetMessageEventData` and properties `source` and `data`,
where data is object with type `WidgetEvent`.

### Type of StreamPay event :

```ts
interface WidgetMessageEventData {
  source: 'streampay_widget';
  data: WidgetEvent;
}
```

### Example of StreamPay event:

```
{
    source: 'streampay_widget',
    data: {
        type: 'onload',
        payload: {
            width: 480,
            height: 612
        }
    }
}
```

### Available Events

All the typings for events and their `payload` are defined and exported from `@stream-pay/streampay-widget-sdk`

```ts
// EventType is a union type that consist of every event type available
import {
  EventType,
  WidgetEvent,
  WidgetMessageEventData,
  OnLoadedEvent,
  OnErrorEvent,
  OnResizeEvent,
  OnExitEvent,
  OnStartedEvent,
  OnOperationCreated,
  OnPaymentSent,
  OnOperationPending,
  OnOperationSuccess,
  OnOperationFail,
  OnUnsupported,
  OnForceContinue,
} from '@stream-pay/streampay-widget-sdk';
```

## 📖 Integration Docs

Look for more info about integrating SteramPay into your products [here](https://icy-ulna-81b.notion.site/StreamPay-Web-App-Widget-SDK-Wiki-79977d478e714415af90250555b2f983)
