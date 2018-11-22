webpackJsonp([0xd55ca9529d61],{3778:function(e,t){e.exports={data:{challengeNode:{title:"Compound Assignment With Augmented Addition",description:["在编程当中，通常通过赋值来修改变量的内容。记住，赋值时 Javascript 会先计算<code>=</code>右边的内容，所以我们可以写这样的语句：","<code>myVar = myVar + 5;</code>","以上是最常见的运算赋值语句，即先运算、再赋值。还有一类操作符是一步到位既做运算也赋值的。","其中一种就是<code>+=</code>运算符。","<blockquote>var myVar = 1;<br>myVar += 5;<br>console.log(myVar); // 返回 6</blockquote>","<hr>","使用<code>+=</code>操作符实现同样的效果。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition",blockName:"Basic JavaScript",tests:[{text:"<code>a</code>应该等于<code>15</code>",testString:"assert(a === 15, '<code>a</code>应该等于<code>15</code>');"},{text:"<code>b</code>应该等于<code>26</code>",testString:"assert(b === 26, '<code>b</code>应该等于<code>26</code>');"},{text:"<code>c</code>应该等于<code>19</code>",testString:"assert(c === 19, '<code>c</code>应该等于<code>19</code>');"},{text:"你应该对每个变量使用<code>+=</code>操作符",testString:"assert(code.match(/\\+=/g).length === 3, '你应该对每个变量使用<code>+=</code>操作符');"},{text:"不要修改注释上面的代码",testString:"assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), '不要修改注释上面的代码');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var a = 3;\nvar b = 17;\nvar c = 12;\n\n// 请只修改这条注释以下的代码\n\na = a + 12;\nb = 9 + b;\nc = c + 7;\n",head:"",tail:'(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);'},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction",id:"56533eb9ac21ba0edf2244af"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-compound-assignment-with-augmented-addition-b8b7f8accc855dff8941.js.map