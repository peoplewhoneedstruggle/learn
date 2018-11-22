webpackJsonp([32795719088768],{3834:function(e,s){e.exports={data:{challengeNode:{title:"Returning Boolean Values from Functions",description:['你应该还记得<a href="javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">相等运算符</a>这道挑战题。在那里我们提到，所有比较操作符都会返回 boolean：要么是<code>true</code>要么是<code>false</code>。',"有时人们通过 if/else 语句来做比较然后返回<code>true</code>或<code>false</code>。","<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;if (a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote>","有一个更好的方法，因为<code>===</code>总是返回<code>true</code>或<code>false</code>，所以我们可以直接返回比较的结果：","<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;return a === b;<br>}</blockquote>","<hr>","移除<code>isLess</code>函数的<code>if/else</code>语句但不影响函数的功能。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions",blockName:"Basic JavaScript",tests:[{text:"<code>isLess(10,15)</code>应该返回 <code>true</code>",testString:"assert(isLess(10,15) === true, '<code>isLess(10,15)</code>应该返回 <code>true</code>');"},{text:"<code>isLess(15,10)</code>应该返回 <code>false</code>",testString:"assert(isLess(15, 10) === false, '<code>isLess(15,10)</code>应该返回 <code>false</code>');"},{text:"You should not use any <code>if</code> or <code>else</code> statements",testString:"assert(!/if|else/g.test(code), '不要使用<code>if</code>或<code>else</code>表达式');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function isLess(a, b) {\n  // 请修改这部分代码\n  if (a < b) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n// Change these values to test\nisLess(10, 15);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions",id:"5679ceb97cbaa8c51670a16b"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-returning-boolean-values-from-functions-3eba824af9b6d45a3d7c.js.map