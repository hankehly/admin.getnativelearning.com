/**
 * index
 * admin.get-native.com
 *
 * Created by henryehly on 2017/06/14.
 */

import { DebugElement } from '@angular/core';

export function newEvent(eventName: string, bubbles = false, cancelable = false) {
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}

// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
    left:  { button: 0 },
    right: { button: 2 }
};

export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}