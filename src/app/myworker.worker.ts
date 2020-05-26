/// <reference lib="webworker" />
import { sqrt } from 'mathjs';

addEventListener('message', (e: MessageEvent) => {
  postMessage(sqrt(4));
});
