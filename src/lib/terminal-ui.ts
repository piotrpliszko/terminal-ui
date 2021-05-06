import { Terminal } from './Terminal';
import { Options } from './model/Options';

export const DEFAULT_SELECTOR = '[data-terminalui]';
const DEFAULT_OPTIONS: Options = {
  failSilently: true,
};

/**
 * TerminalUI
 *
 * @param options TerminalUI options
 * @returns terminal instance
 */
export const terminalui = (options?: Options): Terminal => {
  const opts = {
    ...DEFAULT_OPTIONS,
    ...(options || {}),
  };
  const selector = `${
    opts.selector || DEFAULT_SELECTOR
  }:not([data-terminaluihandled])`;

  const containers = document.querySelectorAll<HTMLElement>(selector);

  if (!opts.failSilently && (!containers || containers.length === 0)) {
    throw new Error('No TerminalUI objects found');
  }

  containers.forEach((container) => {
    container.dataset.terminaluihandled = 'true';
  });

  const terminal = new Terminal(containers, opts);

  return terminal;
};
