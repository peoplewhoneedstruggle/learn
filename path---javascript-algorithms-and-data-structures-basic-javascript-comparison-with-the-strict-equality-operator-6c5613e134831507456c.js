webpackJsonp([0xc90eb2720101],{3774:function(t,e){t.exports={data:{challengeNode:{title:"Comparison with the Strict Equality Operator",description:["严格相等运算符（<code>===</code>）是相对相等操作符（<code>==</code>）的另一种比较操作符。与相等操作符不同的是，它会同时比较元素的值和<code>数据类型</code>。","<strong>示例</strong>","<blockquote>3 === 3   // true<br>3 === '3' // false</blockquote>","<code>3</code>是一个<code>数字</code>类型的，而<code>'3'</code>是一个<code>字符串</code>类型的，所以 3 不全等于 '3'。","<hr>",'在<code>if</code>语句值使用严格相等运算符，这样当<code>val</code>严格等于7的时候，函数会返回"Equal"。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator",blockName:"Basic JavaScript",tests:[{text:'<code>testStrict(10)</code>应该返回 "Not Equal"',testString:'assert(testStrict(10) === "Not Equal", \'<code>testStrict(10)</code>应该返回 "Not Equal"\');'},{text:'<code>testStrict(7)</code>应该返回 "Equal"',testString:'assert(testStrict(7) === "Equal", \'<code>testStrict(7)</code>应该返回 "Equal"\');'},{text:'<code>testStrict("7")</code>应该返回 "Not Equal"',testString:'assert(testStrict("7") === "Not Equal", \'<code>testStrict("7")</code>应该返回 "Not Equal"\');'},{text:"你应该使用<code>===</code>运算符",testString:"assert(code.match(/(val\\s*===\\s*\\d+)|(\\d+\\s*===\\s*val)/g).length > 0, '你应该使用<code>===</code>运算符');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 初始化变量\nfunction testStrict(val) {\n  if (val) { // 请修改这一行\n    return "Equal";\n  }\n  return "Not Equal";\n}\n\n// 你可以修改这一行来测试你的代码\ntestStrict(10);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values",id:"56533eb9ac21ba0edf2244d1"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-comparison-with-the-strict-equality-operator-6c5613e134831507456c.js.map