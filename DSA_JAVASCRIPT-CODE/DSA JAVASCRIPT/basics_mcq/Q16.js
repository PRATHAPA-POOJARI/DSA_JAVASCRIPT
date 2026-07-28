console.log("" || "Default"); // "Default"
console.log("" ?? "Default"); // ""

console.log(false || true);   // true
console.log(false ?? true);   // false

console.log(null || "Guest"); // "Guest"
console.log(null ?? "Guest"); // "Guest"

console.log(undefined || 10); // 10
console.log(undefined ?? 10); // 10


