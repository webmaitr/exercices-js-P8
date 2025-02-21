function pairNumbers(a, b) {
  for (let i=a; i<=b; i++) {
    let st = [];
    if (i%2 === 0) {
      st.push(i);
    }
  }
  return st.toString();
}

export default pairNumbers
