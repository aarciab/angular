const semver = require('semver');

console.log(`semver.valid("3.2.1"): ${semver.valid("3.2.1")}`);
console.log(`semver.valid("a.b.c"): ${semver.valid("a.b.c")}`);
console.log(`semver.satisfies("3.2.1", "3.x || >=3.2.0"): ${semver.satisfies("3.2.1", "3.x || >=3.2.0")}`);
console.log(`semver.gt("3.2.1", "3.2.2"): ${semver.gt("3.2.1", "3.2.2")}`);
console.log(`semver.lt("3.2.1", "3.2.2"): ${semver.lt("3.2.1", "3.2.2")}`);
console.log(`semver.coerce("v3"): ${semver.coerce("v3")}`);