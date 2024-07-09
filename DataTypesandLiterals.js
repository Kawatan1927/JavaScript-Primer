//データ型とリテラル
console.log(typeof true);
console.log(typeof 42);
console.log(typeof 9007199254740992n);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof {"key" : "value"});
console.log(typeof function(){});

console.log(1); // => 1
console.log(10); // => 10
console.log(255); // => 255

/*0bからはじまる2進数リテラル
ビットを表現するのによく利用
b：2進数を表すbinary
*/
console.log(0b1111); // => 15
console.log(0b10000000000); // => 1024

/*0oからはじまる8進数リテラル
ファイルのパーミッションを表現するのによく利用
o:8進数を表すoctal
*/
console.log(0o644);  // => 420
console.log(0o777);  // => 511
    // 非推奨な8進数の書き方
    // strict modeは例外が発生
    // console.log(0644);  // => 420
    // console.log(0777);  // => 511

/*0xからはじまる16進数リテラル
文字のコードポイントやRGB値の表現などに利用
x：16進数を表すhex
*/
console.log(0xFF); // => 255
// 小文字で書いても意味は同じ
console.log(0xff); // => 255
console.log(0x30A2); // => 12450

/*浮動小数点リテラル
    3.14159 のような .（ドット）を含んだ数値
    2e8 のような e または E を含んだ数値
0からはじまる浮動小数点数は、0を省略して書ける    
→.をオブジェクトにおいて利用する機会が多いため、省略せずに書いたほうが良い
*/
console.log(.123); // => 0.123
console.log(2e8); // => 200000000

/*BigInt
2^53-1（9007199254740991）よりも大きな整数を正しく表現
数値の後ろにnをつける
*/
console.log(typeof 1n); // => 1n
// 2^53-1より大きな値も扱える
console.log(9007199254740992n); // => 9007199254740992n

/*Numeric Separators
数値リテラル内の区切り文字として_を追加できる
*/
console.log(1_000_000_000_000);

/*文字列リテラルは同じ記号で囲む必要があるため、
次のように文字列の中に同じ記号が出現した場合は、\'のように\（バックスラッシュ）を使ってエスケープする必要あり。
もしくは文字列内部に出現しない別のクォート記号を使う
*/
'8 o\'clock'; // => "8 o'clock"

//改行の代わりに改行記号のエスケープシーケンス（\n）を使うことで複数行の文字列を書くことが可能
"複数行の\n文字列を\n入れたい";

/*テンプレートリテラル
`（バッククォート）で囲んだ範囲を文字列とするリテラル
前述したエスケープシーケンスが不要
*/
`複数行の
文字列を
入れたい`; // => "複数行の\n文字列を\n入れたい"
//テンプレートリテラル内で${変数名}と書いた場合に、その変数の値を埋め込むことが可能
const str = "文字列";
console.log(`これは${str}です`);
//テンプレートリテラルも同じリテラル記号を内包したい場合は、\を使ってエスケープする必要あり

/*nullリテラル
null値を返すリテラル
undefinedはグローバル変数で再定義が可能(するべきではない)
*/

/*オブジェクトリテラル
キー名：文字列またはSymbol
値：なんでも可
*/
const obj = {
    "key": "value"
};
//オブジェクトのkeyプロパティを参照する方法
    // ドット記法
    console.log(obj.key); // => "value"
    // ブラケット記法
    console.log(obj["key"]); // => "value"

/*配列リテラル*/
const emptyArray = []; // 空の配列を作成
const array = [1, 2, 3]; // 値を持った配列を作成
// 0番目の要素を参照
console.log(array[0]); // => 1
// 1番目の要素を参照
console.log(array[1]); // => 2

//正規表現リテラル
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("123")); // => true

/*ラッパーオブジェクト
Boolean, Number, Stringをオブジェクトとして表現する方法
プリミティブ型のデータに対してもオブジェクトのように参照できるため明示的に使う理由はない
*/
//文字列をラップしたStringラッパーオブジェクト
const string = new String("文字列");
//ラッパーオブジェクトはobject型のデータ
console.log(typeof string); // => "object"
//Stringオブジェクトのlengthプロパティで文字列の長さを検索
console.log(string.length); // => 3