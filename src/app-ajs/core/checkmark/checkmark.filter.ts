export function checkmarkFilter() {
  return function (input: any) {
    return input ? '\u2713' : '\u2718';
  };
}
