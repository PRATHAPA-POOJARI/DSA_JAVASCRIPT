console.log(null === undefined)


null == undefined   // true  ✅ (loose equality special rule)

null === undefined  // false ❌ (strict equality checks type)

Easy trick:

== → only checks value (with conversions)
=== → checks value + type (no conversions)