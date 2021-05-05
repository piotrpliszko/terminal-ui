import { Terminal } from './Terminal';
import { Options } from './model/Options';

export const DEFAULT_SELECTOR = '[data-terminalui]';

/**
 * TerminalUI
 *
 * @param options TerminalUI options
 * @returns terminal instance
 */
export const terminalui = (options?: Options): Terminal => {
  const opts = options || {};
  const selector = `${
    opts.selector || DEFAULT_SELECTOR
  }:not([data-terminaluihandled])`;

  const containers = document.querySelectorAll<HTMLElement>(selector);

  if (!containers || containers.length === 0) {
    throw new Error('No TerminalUI objects found');
  }

  containers.forEach((container) => {
    container.dataset.terminaluihandled = 'true';
  });

  const terminal = new Terminal(containers, opts);

  return terminal;
};
