/** const,let等の変数*/

// const val14 = {
//   name:"じゃけえ",
//   age:"28"
// };

// val14.name="jak";
// console.log(val14);

// const val5 = ['dog','cat'];
// val5[0]="bird";
// console.log(val5);

/**テンプレート文字列 */

// const name="じゃけえ";
// const age =28;
// // 私の名前はじゃけえです。年齢は28歳です。

// //従来の方法
// const message1="私の名前は"+name+"です。年齢は"+age+"です";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 =`私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);

// 従来の関数　アロー関数
function Func1(str) {
  return str;
}

console.log(Func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
