const heading = document.createElement("h1");
export const headerEl = (heading.textContent = "Template Title");

export const foo = async (a, b) => {
  const d = (await a) * 2;
  const tot = d + b;
  return tot;
};
