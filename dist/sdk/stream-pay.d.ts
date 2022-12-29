import { SignedWidgetParams } from '../interfaces/widget-parameters';
import { EnvironmentMode } from '../interfaces/environment';
import { EventType, StreampayEventMap } from '..';
/**
 * `mountElement`: HTMLElement — inside which iframe will appear
 *
 * `environment`: string — `development` or `production`, `production` is used by default
 *
 * `params`: SignedWidgetParams — optional, if you have merchant `apiKey`
 *
 * `iframeClass`: string - optional `StreamPay__iframe` by default. You may pass custom class, it will override default one.
 *
 * `iframeId`: string - same as `iframeClass` but for #id attribute
 *
 */
declare type StreamPayParams = {
    mountElement: HTMLElement;
    environment?: EnvironmentMode;
    params?: SignedWidgetParams;
    iframeClass?: string;
    iframeId?: string;
};
export declare class StreamPay {
    iframe: HTMLIFrameElement | null;
    mountElement: HTMLElement;
    private _listeners;
    private _params;
    private _env;
    private _initialized;
    private _iframeClass;
    private _iframeId;
    constructor({ mountElement, environment, params, }: StreamPayParams);
    private startWindowHandling;
    private createIframe;
    init(): void;
    addListener<K extends keyof StreampayEventMap>(type: K, listener: (data: StreampayEventMap[K]['payload']) => void): void;
    removeListener<K extends EventType>(type: K, listener: (data: StreampayEventMap[K]['payload']) => void): void;
}
export {};
