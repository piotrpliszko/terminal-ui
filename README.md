# TerminalUI

[![npm version](https://img.shields.io/npm/v/@piopli/terminal-ui)](https://www.npmjs.com/package/@piopli/terminal-ui) [![license](https://img.shields.io/npm/l/@piopli/terminal-ui)](https://github.com/piotrpliszko/terminal-ui/blob/master/LICENSE)

Simple and lightweight terminal UI component.

![Screenshot 1](./assets/screenshot-1.png)
![Screenshot 2](./assets/screenshot-2.png)

## Installation

```
npm install @piopli/terminal-ui
```

## Usage

Example:

```html
<div data-terminalui>
  <div data-terminalui-command>
    echo "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  </div>
  <div data-terminalui-output>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </div>
</div>
```

You can use CSS-only version or include JavaScript to get some dynamic functionality.

### CSS-only

Just include `styles.css` file in your project.

### JavaScript

```javascript
import terminalui from '@piopli/terminal-ui';
```

```javascript
const terminal = terminalui();
terminal.init();
```

## Configuration

Available options:

- `selector` - custom selector to handle only selected TerminalUI objects with created instance
- `prompt` - custom terminal prompt, default: `$`
- `failSilently` - specify if instance should throw error or fail silently if no matching containers are found, default: `true`

Example configuration:

```javascript
const terminal = terminalui({
  selector: '.custom-terminalui-selector',
  prompt: '>',
  failSilently: true,
});
```
