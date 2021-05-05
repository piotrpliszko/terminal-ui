import { terminalui } from './terminal-ui';

const doc = `
<div class="terminalui-container" data-terminalui>
  <div data-terminalui-command>echo "test"</div>
  <div data-terminalui-output>test</div>
</div>
<div data-terminalui>
  <div data-terminalui-command>echo "test"</div>
  <div data-terminalui-output>test</div>
</div>`;

describe('terminal-ui', () => {
  it('should return terminal when provided with no options', () => {
    document.body.innerHTML = doc;

    const terminal = terminalui();

    expect(terminal).not.toBeUndefined();
    expect(terminal).not.toBeNull();
  });

  it('should return terminal when provided with empty options object', () => {
    document.body.innerHTML = doc;

    const terminal = terminalui({});

    expect(terminal).not.toBeUndefined();
    expect(terminal).not.toBeNull();
  });

  it('should return terminal when provided with correct selector option', () => {
    document.body.innerHTML = doc;

    const terminal = terminalui({
      selector: '.terminalui-container',
    });

    expect(terminal).not.toBeUndefined();
    expect(terminal).not.toBeNull();
  });

  it('should find only matching objects when custom selector provided', () => {
    document.body.innerHTML = doc;

    const terminal = terminalui({
      selector: '.terminalui-container',
    });

    expect(terminal).not.toBeUndefined();
    expect(terminal).not.toBeNull();
    expect(terminal.containers.length).toEqual(1);
  });

  it('should find all TerminalUI objects when no custom selector provided', () => {
    document.body.innerHTML = doc;

    const terminal = terminalui();

    expect(terminal).not.toBeUndefined();
    expect(terminal).not.toBeNull();
    expect(terminal.containers.length).toEqual(2);
  });

  it('should throw error when no matching objects are found', () => {
    document.body.innerHTML = doc;

    expect(() => {
      terminalui({
        selector: '.no-matches',
      });
    }).toThrow('No TerminalUI objects found');
  });

  it('should only handle unhandled containers', () => {
    document.body.innerHTML = doc;

    const firstTerminal = terminalui({
      selector: '.terminalui-container',
    });

    const secondTerminal = terminalui();

    expect(firstTerminal.containers.length).toEqual(1);
    expect(secondTerminal.containers.length).toEqual(1);
  });
});
