import {WidgetMessageEventData} from '../events';

export function isStreampayEvent(
  event: MessageEvent,
): event is MessageEvent<WidgetMessageEventData> {
  return event.data && event.data.source === 'streampay_widget';
}
