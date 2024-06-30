import { Log } from './log';

export class EventDispatcher extends Log {
  private listeners: { [type: string]: Function[] } = {};

  protected addEventListener(type: string, listener: Function) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    if (this.listeners[type].indexOf(listener) === -1) {
      this.listeners[type].push(listener);
    }
  }

  protected removeEventListener(type: string) {
    this.listeners[type] = [];
  }

  protected dispatchEvent(type: string, data: any) {
    const listenerArray = this.listeners[type] || [];
    if (listenerArray.length === 0) return;
    listenerArray.forEach((listener) => {
      listener.call(this, data);
    });
  }
}
