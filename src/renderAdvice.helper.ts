const connectToApi = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data.slip;
};

export const renderAdvice: (
  // eslint-disable-next-line no-unused-vars
  adviceContainer: HTMLElement
) => Promise<void> = async (adviceContainer) => {
  const data = await connectToApi();
  adviceContainer.innerText = '';
  const adviceNumberElement = document.createElement('p');
  adviceNumberElement.innerText = `ADVICE #${data.id}`;

  const adviceTextElement = document.createElement('h1');
  adviceTextElement.innerText = `"${data.advice}"`;
  adviceContainer.appendChild(adviceNumberElement);
  adviceContainer.appendChild(adviceTextElement);
};
