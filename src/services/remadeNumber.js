export function remadeNumber (number) {
  const numberSplit = number.split('');
  numberSplit.splice(3, 0, '-')
  numberSplit.splice(6, 0, '-').join('');
  return numberSplit.join('');
};
