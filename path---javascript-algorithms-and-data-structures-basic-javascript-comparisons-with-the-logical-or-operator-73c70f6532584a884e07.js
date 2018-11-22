webpackJsonp([46105762899478],{3777:function(e,t){e.exports={data:{challengeNode:{title:"Comparisons with the Logical Or Operator",description:["只要<dfn>逻辑或</dfn>运算符<code>||</code>两边任何一个为<code>true</code>，那么它就返回<code>true</code>；否则返回<code>false</code>。","<dfn>逻辑或</dfn>运算符由两个管道符号（|）组成。这个按键位于退格键和回车键之间。","下面这样的语句你应该很熟悉：",'<blockquote>if (num > 10) {<br>&nbsp;&nbsp;return "No";<br>}<br>if (num < 5) {<br>&nbsp;&nbsp;return "No";<br>}<br>return "Yes";</blockquote>','只有当<code>num</code>大于等于 5 或小于等于 10 时，函数返回"Yes"。相同的逻辑可以简写成：','<blockquote>if (num > 10 || num < 5) {<br>&nbsp;&nbsp;return "No";<br>}<br>return "Yes";</blockquote>',"<hr>",'请使用逻辑或运算符把两个 if 语句合并为一个 if 语句，如果<code>val</code>不在 10 和 20 之间(包括 10 和 20)，返回<code>"Outside"</code>。反之，返回<code>"Inside"</code>。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator",blockName:"Basic JavaScript",tests:[{text:"你应该使用一次<code>||</code>操作符",testString:"assert(code.match(/\\|\\|/g).length === 1, '你应该使用一次<code>||</code>操作符');"},{text:"你应该只有一个<code>if</code>表达式",testString:"assert(code.match(/if/g).length === 1, '你应该只有一个<code>if</code>表达式');"},{text:'<code>testLogicalOr(0)</code>应该返回 "Outside"',testString:'assert(testLogicalOr(0) === "Outside", \'<code>testLogicalOr(0)</code>应该返回 "Outside"\');'},{text:'<code>testLogicalOr(9)</code>应该返回 "Outside"',testString:'assert(testLogicalOr(9) === "Outside", \'<code>testLogicalOr(9)</code>应该返回 "Outside"\');'},{text:'<code>testLogicalOr(10)</code>应该返回 "Inside"',testString:'assert(testLogicalOr(10) === "Inside", \'<code>testLogicalOr(10)</code>应该返回 "Inside"\');'},{text:'<code>testLogicalOr(15)</code>应该返回 "Inside"',testString:'assert(testLogicalOr(15) === "Inside", \'<code>testLogicalOr(15)</code>应该返回 "Inside"\');'},{text:'<code>testLogicalOr(19)</code>应该返回 "Inside"',testString:'assert(testLogicalOr(19) === "Inside", \'<code>testLogicalOr(19)</code>应该返回 "Inside"\');'},{text:'<code>testLogicalOr(20)</code>应该返回 "Inside"',testString:'assert(testLogicalOr(20) === "Inside", \'<code>testLogicalOr(20)</code>应该返回 "Inside"\');'},{text:'<code>testLogicalOr(21)</code>应该返回 "Outside"',testString:'assert(testLogicalOr(21) === "Outside", \'<code>testLogicalOr(21)</code>应该返回 "Outside"\');'},{text:'<code>testLogicalOr(25)</code>应该返回 "Outside"',testString:'assert(testLogicalOr(25) === "Outside", \'<code>testLogicalOr(25)</code>应该返回 "Outside"\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function testLogicalOr(val) {\n  // 请把你的代码写在这条注释以下\n\n  if (val) {\n    return "Outside";\n  }\n\n  if (val) {\n    return "Outside";\n  }\n\n  // 请把你的代码写在这条注释以上\n  return "Inside";\n}\n\n// 你可以修改这一行来测试你的代码\ntestLogicalOr(15);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements",id:"56533eb9ac21ba0edf2244d9"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-comparisons-with-the-logical-or-operator-73c70f6532584a884e07.js.map