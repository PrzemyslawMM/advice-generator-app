import { renderAdvice } from './renderAdvice.helper';

const adviceContainer: HTMLElement =
  document.querySelector('.container__advice');
const diceButton: HTMLButtonElement = document.querySelector('.dice');

diceButton.addEventListener('click', () => renderAdvice(adviceContainer));

renderAdvice(adviceContainer);
