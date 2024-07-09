//二項演算子
    console.log(1 + 1); // => 2
    console.log(10 + 0.5); // => 10.5
    const value = "文字列" + "結合";
    console.log(value); // => "文字列結合"
    console.log(1 - 1); // => 0
    console.log(10 - 0.5); // => 9.5
    console.log(2 * 8); // => 16
    console.log(10 * 0.5); // => 5
    console.log(8 / 2); // => 4
    console.log(10 / 0.5); // => 20
    console.log(10 / 0); // => Infinity
    console.log(8 % 2); // => 0
    console.log(9 % 2); // => 1
    console.log(10 % 0.5); // => 0
    console.log(10 % 4.5); // => 1
    // べき乗演算子（ES2016）で2の4乗を計算
        console.log(2 ** 4); // => 16
    //べき乗演算子と同じ動作をするMath.powメソッド
        console.log(Math.pow(2, 4)); // => 16

//算術単項演算子
    console.log(+1); // => 1
    //単項プラス演算子は数値以外も数値へと変換(使うべきではない)
    //→Numberコンストラクタ関数やparseInt関数などの明示的な変換方法が存在するため
        console.log(+"1"); // => 1
    // 数値ではない文字列はNaNという値に変換される
        console.log(+"文字列"); // => NaN
    /*Nan について
    ・自分自身とも一致しない
    ・Number型である
    ・Number.isNaNメソッドを使うことでNaNの判定を行える。
    */
    console.log(-1); // => -1
    //単項マイナス演算子はマイナスの数値を反転できる
    console.log(-(-1)); // => 1
    console.log(-(-1)); // => 1
    console.log(-"文字列"); // => NaN

    /*インクリメント演算子
    ・後置インクリメント演算子
    1.numの評価結果を返す
    2.numに対して+1する
    ・前置インクリメント演算子
    1.numに対して+1する
    2.numの評価結果を返す
    */

//比較演算子    
    /*
    厳密等価演算子（===）⇔　厳密不等価演算子(!==)
    ：左右2つのオペラントを比較し、同じ型で同じ値である場合にtrueを返す
    */
    console.log(1 === 1);  // => true
    console.log(1 === "1");  // => false
    // {} は新しいオブジェクトを作成している
    const objA = {};
    const objB = {};
    // 生成されたオブジェクトは異なる参照となる
    console.log(objA === objB); // => false
    // 同じ参照を比較している場合
    console.log(objA === objA); // => true

    /*
    等価演算子(==) ⇔ 厳密不等価演算子(!=)
    同じデータ型のオペラントを比較する場合は厳密等価演算子と同じ結果になるが、
    オペラント同士が異なる型の値であった場合に同じ型となるように暗黙的な型変換してから比較
    意図しない挙動となるため等価演算子を使うべきではない
    nullとundefinedの比較でのみ使用
    */
    // 文字列を数値に変換してから比較
    console.log(1 == "1"); // => true
    // "01"を数値にすると`1`となる
    console.log(1 == "01"); // => true
    // 真偽値を数値に変換してから比較
    console.log(0 == false); // => true
    // nullの比較はfalseを返す
    console.log(0 == null); // => false
    // nullとundefinedの比較は常にtrueを返す
    console.log(null == undefined); // => true

    console.log(42 > 21); // => true
    console.log(42 > 42); // => false
    console.log(42 >= 21); // => true
    console.log(42 >= 42); // => true
    console.log(42 >= 43); // => false
    console.log(21 < 42); // => true
    console.log(42 < 42); // => false
    console.log(21 <= 42); // => true
    console.log(42 <= 42); // => true
    console.log(43 <= 42); // => false

//ビット演算子
/*
数値を符号付き32ビット整数（0と1からなる32個のビットの集合）として扱い、その演算結果を10進数の数値として返す。
*/
//ビット論理積（&）
    console.log(15     & 9);      // => 9
    // 同じ位の各ビット同士をAND演算する（上位の`0`は省略）
    // 1111
    // 1001
    // ----
    // 1001
    console.log(0b1111 & 0b1001); // => 0b1001
//ビット論理和演算子（|）
console.log(15     | 9);      // => 15
    // 同じ位の各ビット同士をOR演算する（上位の`0`は省略）
    // 1111
    // 1001
    // ----
    // 1111
    console.log(0b1111 | 0b1001); // => 0b1111
//ビット排他的論理和(^)
    console.log(15     ^ 9);      // => 6
    // 同じ位の各ビット同士をXOR演算する（上位の`0`は省略）
    // 1111
    // 1001
    // ----
    // 0110
    console.log(0b1111 ^ 0b1001); // => 0b0110
//ビット否定(~):オペランドの各ビットを反転した値を返す
    console.log(~15); // => -16
//左シフト演算子（<<）:数値であるnumをbitの数だけ左へシフトし、あふれたビットは破棄され、0のビットを右からの詰める
    console.log(     9 << 2); // => 36
    console.log(0b1001 << 2); // => 0b10_0100
//右シフト演算子（>>）:数値であるnumをbitの数だけ右へシフトし、あふれたビットは破棄され、左端のビットのコピーを左から詰める
    console.log((-9) >> 2); // => -3
    //    1111_1111_1111_1111_1111_1111_1111_0111 >> 2
    // => 1111_1111_1111_1111_1111_1111_1111_1101
//ゼロ埋め右シフト演算子（>>>）:数値であるnumをbitの数だけ右へシフトし、あふれたビットは破棄され、0のビットを左から詰めます
    console.log((-9) >>> 2); // => 1073741821
    //    1111_1111_1111_1111_1111_1111_1111_0111 >>> 2
    // => 0011_1111_1111_1111_1111_1111_1111_1101

/*分割代入（Destructuring assignment）
：配列やオブジェクトの値を複数の変数へ同時に代入できる短縮記法の1つ
*/
    //配列の分割代入
    const array = [1, 2];
    // aには`array`の0番目の値、bには1番目の値が代入される
    const [a, b] = array;
    console.log(a); // => 1
    console.log(b); // => 2
    //次に書いたのと同じ結果になる
    // const array = [1, 2];
    // const a = array[0];
    // const b = array[1];

    //オブジェクトの分割代入
    const obj = {
        "key": "value"
    };
    // プロパティ名`key`の値を、変数`key`として定義する
    const { key } = obj;
    console.log(key); // => "value"

//論理演算子
//AND演算子(&&)
    // 左辺はtrueであるため、右辺の評価結果を返す
    console.log(true && "右辺の値"); // => "右辺の値"
    // 左辺がfalseであるなら、その時点でfalseを返す
    // 右辺は評価されない
    console.log(false && "右辺の値"); // => false
    //falsyな値：暗黙的な型変換によってfalseに変換される値
    //左辺がfalsyであるため、評価結果として左辺を返す
    console.log("" && "右辺の値"); // => ""
    console.log(0 && "右辺の値"); // => 0
    console.log(null && "右辺の値"); // => null
//OR演算子
    //左辺がtrueなので左辺の値が返される
    console.log(true || "右辺の値"); // => true
    //左辺がfalseなので右辺の値が返される
    console.log(false || "右辺の値"); // => "右辺の値"
    //左辺がtrueの場合右辺は評価しない(短絡評価)
    //左辺を真偽値へと暗黙的な型変換
//NOT演算子
