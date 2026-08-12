
1. + Operator (Addition / Concatenation)

If either operand is a string, + performs string concatenation.

| Expression       | Result     | Type   | Why                          |
| ---------------- | ---------- | ------ | ---------------------------- |
| `5 + 5`          | `10`       | number | Number + Number              |
| `5 + "5"`        | `"55"`     | string | Number converted to string   |
| `"5" + 5`        | `"55"`     | string | String concatenation         |
| `"5" + "5"`      | `"55"`     | string | String concatenation         |
| `10 + "20"`      | `"1020"`   | string | Concatenation                |
| `"10" + 20 + 30` | `"102030"` | string | Left to right                |
| `10 + 20 + "30"` | `"3030"`   | string | `10+20=30`, then concatenate |



2. - Operator (Always tries numeric conversion)   - never concatenates.

| Expression      | Result | Type   |
| --------------- | ------ | ------ |
| `10 - 5`        | `5`    | number |
| `10 - "5"`      | `5`    | number |
| `"10" - 5`      | `5`    | number |
| `"10" - "5"`    | `5`    | number |
| `"abc" - 5`     | `NaN`  | number |
| `true - 1`      | `0`    | number |
| `false - 1`     | `-1`   | number |
| `null - 1`      | `-1`   | number |
| `undefined - 1` | `NaN`  | number |


3. * Operator (Multiplication) 
Converts operands to numbers.


| Expression  | Result |
| ----------- | ------ |
| `"5" * 2`   | `10`   |
| `"5" * "2"` | `10`   |
| `"abc" * 2` | `NaN`  |
| `true * 5`  | `5`    |
| `false * 5` | `0`    |


4. / Operator (Division)

| Expression   | Result     |
| ------------ | ---------- |
| `"10" / 2`   | `5`        |
| `"10" / "2"` | `5`        |
| `"abc" / 2`  | `NaN`      |
| `10 / 0`     | `Infinity` |
| `0 / 10`     | `0`        |
| `0 / 0`      | `NaN`      |  0 / 0 is NaN because division of zero by zero is mathematically undefined.


5. % Operator (Remainder)

| Expression  | Result |
| ----------- | ------ |
| `10 % 3`    | `1`    |
| `"10" % 3`  | `1`    |
| `"abc" % 3` | `NaN`  |


6. Unary + (Convert to Number)

| Expression   | Result | Type   |
| ------------ | ------ | ------ |
| `+"10"`      | `10`   | number |
| `+"5.5"`     | `5.5`  | number |
| `+"abc"`     | `NaN`  | number |
| `+true`      | `1`    | number |
| `+false`     | `0`    | number |
| `+null`      | `0`    | number |
| `+undefined` | `NaN`  | number |


7. Unary - (Negative Number)

| Expression   | Result |
| ------------ | ------ |
| `-"10"`      | `-10`  |
| `-true`      | `-1`   |
| `-false`     | `0`    |
| `-null`      | `-0`   |
| `-undefined` | `NaN`  |


8. == (Loose Equality)

| Expression          | Result  |
| ------------------- | ------- |
| `5 == "5"`          | `true`  |
| `0 == false`        | `true`  |
| `1 == true`         | `true`  |
| `"" == false`       | `true`  |
| `null == undefined` | `true`  |
| `NaN == NaN`        | `false` |      reason:  NaN is never equal to anything 


9. === (Strict Equality)

No type conversion.

| Expression           | Result  |
| -------------------- | ------- |
| `5 === "5"`          | `false` |
| `5 === 5`            | `true`  |
| `true === 1`         | `false` |
| `null === undefined` | `false` |


10. Boolean Conversion

| Value                | Boolean |
| -------------------- | ------- |
| `Boolean(0)`         | `false` |
| `Boolean(1)`         | `true`  |
| `Boolean("")`        | `false` |  reason: empty string Always return  0 beacause no text
| `Boolean("Hello")`   | `true`  |  reson  non empty string always return 1 beacause it has text
| `Boolean(null)`      | `false` |
| `Boolean(undefined)` | `false` |
| `Boolean(NaN)`       | `false` |   
| `Boolean([])`        | `true`  |
| `Boolean({})`        | `true`  |

Easy rule to remember
Empty string "" → false
Empty array [] → true
Empty object {} → true

   
Easy interview rule
+ → Addition or Concatenation
- → Only subtraction
* → Only multiplication
/ → Only division
% → Only remainder


Most Asked JavaScript Interview MCQs

5 + "5"          // "55"
5 - "5"          // 0
"5" * "2"        // 10
"10" / "2"       // 5
+"10"            // 10
-"10"            // -10
5 == "5"         // true
5 === "5"        // false
null == undefined // true
null === undefined // false
Boolean("")      // false
Boolean(" ")     // true (space is a non-empty string)
typeof NaN       // "number"
typeof null      // "object" (historical bug)
[] + []          // ""
[] + {}          // "[object Object]"
{} + []          // 0 (in many JavaScript environments when parsed as a block)