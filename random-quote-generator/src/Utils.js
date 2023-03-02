export function randomIntFromMax(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function random_rgba() {
  var o = Math.round, r = Math.random, s = 230;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.8 + ')';
}