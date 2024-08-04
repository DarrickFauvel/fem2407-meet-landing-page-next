function padWithLeadingZeros(num: number, numLength: number) {
  return String(num).padStart(numLength, "0");
}

export default padWithLeadingZeros;
