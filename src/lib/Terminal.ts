import { Options } from './model/Options';
import { applyCustomPrompt } from './utils';

export class Terminal {
  containers: NodeListOf<HTMLElement>;
  options: Options;

  constructor(containers: NodeListOf<HTMLElement>, options: Options) {
    this.containers = containers;
    this.options = options;
  }

  init(): void {
    if (this.options.prompt) {
      applyCustomPrompt(this.containers, this.options.prompt);
    }
  }
}
