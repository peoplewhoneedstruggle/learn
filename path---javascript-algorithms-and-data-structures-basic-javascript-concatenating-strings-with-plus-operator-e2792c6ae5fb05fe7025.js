webpackJsonp([38038288724741],{3782:function(t,e){t.exports={data:{challengeNode:{title:"Concatenating Strings with Plus Operator",description:["在 JavaScript 中，当对一个<code>String</code>类型的值使用<code>+</code>操作符的时候，它被称作 <dfn>concatenation</dfn> 操作符。你可以通过和其他字符串<dfn>concatenation</dfn>来创建一个新的字符串。","<strong>示例</strong>","<blockquote>'My name is Alan,' + ' I concatenate.'</blockquote>","<strong>提示</strong><br>注意空格。拼接操作不会在两个字符串之间添加空格，所以想加上空格的话，你需要自己在字符串里面添加。","<hr>",'使用<code>+</code>操作符，把字符串<code>"This is the start. "</code>和<code>"This is the end."</code>连接起来并赋值给变量<code>myStr</code>。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator",blockName:"Basic JavaScript",tests:[{text:"<code>myStr</code>的值应该是<code>This is the start. This is the end.</code>",testString:"assert(myStr === \"This is the start. This is the end.\", '<code>myStr</code>的值应该是<code>This is the start. This is the end.</code>');"},{text:"使用<code>+</code>操作符构建<code>myStr</code>",testString:"assert(code.match(/([\"']).*([\"'])\\s*\\+\\s*([\"']).*([\"'])/g).length > 1, '使用<code>+</code>操作符构建<code>myStr</code>');"},{text:"<code>myStr</code>应该被<code>var</code>关键字声明",testString:"assert(/var\\s+myStr/.test(code), '<code>myStr</code>应该被<code>var</code>关键字声明');"},{text:"确保有给<code>myStr</code>赋值",testString:"assert(/myStr\\s*=/.test(code), '确保有给<code>myStr</code>赋值');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 示例\nvar ourStr = "I come first. " + "I come second.";\n\n// 请把你的代码写在这条注释以下\n\nvar myStr;\n\n',head:"",tail:"(function(){\n  if(typeof myStr === 'string') {\n    return 'myStr = \"' + myStr + '\"';\n  } else {\n    return 'myStr is not a string';\n  }\n})();"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator",id:"56533eb9ac21ba0edf2244b7"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-concatenating-strings-with-plus-operator-e2792c6ae5fb05fe7025.js.map