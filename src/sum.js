export function sum(a, b) {
  return a + b;
}

export function consolePromptSum() {
  const a = Number(prompt("a="));
  const b = Number(prompt("b="));
  console.log(`${a}+${b}=${a + b}`);
}
