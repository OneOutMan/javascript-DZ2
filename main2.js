let myName = Daniil;
function value(myName) {
  let message = "привет мир! меня зовут";
  let newLet = message + myName;
  value(newLet);
}
