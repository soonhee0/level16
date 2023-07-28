'use strict'

/**
 * 【問題】
 * 
 * 関数over100を定義しましょう。
 * over100は、100以上ならtrue、100未満だったらfalseを返します。
 * 
 * @param {number}
 * @returns {boolean}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題 ***");


test(over100(1), false);
test(over100(120), true);
test(over100(20), false);
test(over100(99), false);
test(over100(100), true);