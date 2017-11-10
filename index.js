// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  return drivers.push('Ralph');
};

function destructivelyPrependDriver(){
  return drivers.unshift('Bob');
};

function destructivelyRemoveLastDriver(){
  return drivers.pop();
};

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
};

function appendDriver(){
  const appendBroom = [...drivers, 'Broom'];
};

function prependDriver(){
  return ['Arnold', ...drivers];
};

function removeLastDriver(){
  const removeGarfield = drivers.slice(0, drivers.length- 1);
  return removeGarfield;
};

function removeFirstDriver(){
  const removeMilo = drivers.slice(1);
  return removeMilo;
};