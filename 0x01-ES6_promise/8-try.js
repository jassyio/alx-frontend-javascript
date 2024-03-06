/* When denominator argument is equal to 0, the function should throw  new
error with  message cannot divide by 0. Otherwise it should return the
numerator divided by  denominator */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by 0');
  return numerator / denominator;
}