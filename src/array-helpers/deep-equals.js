export default function deepEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  if (a[0] === b[0] && (a[1] === b[1])) {
    return true;
  } else {
    return false;
  }
}
