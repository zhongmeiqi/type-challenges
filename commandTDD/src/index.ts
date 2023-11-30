export function add(a, b) {
  return a + b;
}

export function parseArgs(options, args: unknown[]) {
  const keys = Object.keys(options);
  const key = keys[0];

  const result = {};
  /*   keys.forEach((key) => {
    let value = parse(options, key, args);
    result[key] = value;
  });

  return result; */
  return keys.reduce((result, key) => {
    result[key] = parse(options, key, args);
    return result;
  }, {});
}
/* const map = new Map();

map.set(Boolean, parseBoolean);
map.set(Number, parseNumber);
map.set(String, parseString); */

const map = initMap();
function initMap() {
  const map = new Map();
  map.set(Boolean, parseBoolean);
  map.set(Number, parseNumber);
  map.set(String, parseString);
  return map;
}

function parse(options, key, args) {
  let parseHandler = map.get(options[key]);
  return parseHandler(args, key);
}

function getFlagValue(args, key) {
  const flagIndex = args.indexOf("-" + key);
  return args[flagIndex + 1];
}
function parseBoolean(args, key) {
  return args.includes("-" + key);
}
function parseNumber(args, key) {
  return Number.parseInt(getFlagValue(args, key));
}
function parseString(args, key) {
  return getFlagValue(args, key);
}

