/**
 * Terminal options
 */
export interface Options {
  /**
   * Custom selector to specify which terminalui objects should be handled.
   * By default, all terminalui objects present in DOM are handled.
   */
  selector?: string;
  /**
   * Custom prompt for commands (`data-terminalui-command`)
   * @default '$ '
   */
  prompt?: string;
  /**
   * Specify if instance should throw error or fail silently if no matching containers are found
   * @default true
   */
  failSilently?: boolean;
}
