
let pk = isNaN('12');
console.log(pk)
Expression          | Result  | Explanation                                                              |
------------------- | ------- | ------------------------------------------------------------------------ |
| `isNaN(NaN)`        | `true`  | NaN is obviously "Not-a-Number"                                          |
| `isNaN(undefined)`  | `true`  | `Number(undefined)` → `NaN`                                              |
| `isNaN(null)`       | `false` | `Number(null)` → `0`                                                     |
| `isNaN(true)`       | `false` | `Number(true)` → `1`                                                     |
| `isNaN(false)`      | `false` | `Number(false)` → `0`                                                    |
| `isNaN("123")`      | `false` | `"123"` becomes `123`                                                    |
| `isNaN("123abc")`   | `true`  | Invalid number string → `NaN`                                            |
| `isNaN("")`         | `false` | Empty string → `0`                                                       |
| `isNaN(" ")`        | `false` | Space-only string → `0`                                                  |
| `isNaN([])`         | `false` | `Number([])` → `0`                                                       |
| `isNaN([123])`      | `false` | `Number([123])` → `123`                                                  |
| `isNaN([1,2,3])`    | `true`  | `Number([1,2,3])` → `NaN` (cannot convert multi-element array to number) |
| `isNaN({})`         | `true`  | `Number({})` → `NaN`                                                     |
| `isNaN("NaN")`      | `true`  | `"NaN"` is a string → becomes NaN                                        |
| `isNaN(Infinity)`   | `false` | `Infinity` is a valid number                                             |
| `isNaN("Infinity")` | `false` | `"Infinity"` becomes `Infinity`                                          |
