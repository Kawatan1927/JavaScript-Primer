// `===`では、異なるデータ型の比較結果はfalse
console.log(1 === "1"); // => false
// `==`では、異なるデータ型は暗黙的な型変換をしてから比較される
// 暗黙的な型変換によって 1 == 1 のように変換されてから比較される
console.log(1 == "1"); // => true
// 暗黙的な型変換が行われ、数値の加算として計算される
console.log(1 + true); // => 2
// 次のように暗黙的に変換されてから計算される
// 1 + 1; // => 2