"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStreampayEvent = void 0;

function isStreampayEvent(event) {
    return event.data && event.data.source === 'streampay_widget';
}
exports.isStreampayEvent = isStreampayEvent;