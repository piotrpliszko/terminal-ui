const PROMPT_CSS_VARIABLE = '--prompt';

export const applyCustomPrompt = (
  containers: NodeListOf<HTMLElement>,
  prompt: string,
): void => {
  containers.forEach((container) => {
    container.style.setProperty(PROMPT_CSS_VARIABLE, `'${prompt}'`);
  });
};
