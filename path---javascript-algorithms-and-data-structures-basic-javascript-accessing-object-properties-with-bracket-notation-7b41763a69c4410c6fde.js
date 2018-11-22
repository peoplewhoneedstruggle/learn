webpackJsonp([0xb6aa11cf9d4e],{3757:function(e,t){e.exports={data:{challengeNode:{title:"Accessing Object Properties with Bracket Notation",description:["第二种访问对象的方式就是中括号操作符(<code>[]</code>)，如果你想访问的属性的名称有一个空格，这时你只能使用中括号操作符(<code>[]</code>)。","这是一个使用中括号操作符(<code>[]</code>)读取对象属性的例子：",'<blockquote>var myObj = {<br>&nbsp;&nbsp;"Space Name": "Kirk",<br>&nbsp;&nbsp;"More Space": "Spock",<br>&nbsp;&nbsp;"NoSpace": "USS Enterprise"<br>};<br>myObj["Space Name"]; // Kirk<br>myObj[\'More Space\']; // Spock<br>myObj["NoSpace"];    // USS Enterprise</blockquote>',"提示：属性名称中如果有空格，必须把属性名称用单引号或双引号包裹起来。","<hr>",'用中括号操作符读取对象<code>testObj</code>的属性<code>"an entree"</code>值和属性<code>"the drink"</code>值，并赋给<code>entreeValue</code>和<code>drinkValue</code>。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation",blockName:"Basic JavaScript",tests:[{text:"<code>entreeValue</code>应该是一个字符串",testString:"assert(typeof entreeValue === 'string' , '<code>entreeValue</code>应该是一个字符串');"},{text:'<code>entreeValue</code>的值应该是<code>"hamburger"</code>',testString:"assert(entreeValue === 'hamburger' , '<code>entreeValue</code>的值应该是<code>\"hamburger\"</code>');"},{text:"<code>drinkValue</code>应该是一个字符串",testString:"assert(typeof drinkValue === 'string' , '<code>drinkValue</code>应该是一个字符串');"},{text:'<code>drinkValue</code>的值应该是<code>"water"</code>',testString:"assert(drinkValue === 'water' , '<code>drinkValue</code>的值应该是<code>\"water\"</code>');"},{text:"你应该使用中括号两次",testString:"assert(code.match(/testObj\\s*?\\[('|\")[^'\"]+\\1\\]/g).length > 1, '你应该使用中括号两次');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 初始化变量\nvar testObj = {\n  "an entree": "hamburger",\n  "my side": "veggies",\n  "the drink": "water"\n};\n\n// 请把你的代码写在这条注释以下\n\nvar entreeValue = testObj;   // 请修改这一行\nvar drinkValue = testObj;    // 请修改这一行',head:"",tail:'(function(a,b) { return "entreeValue = \'" + a + "\', drinkValue = \'" + b + "\'"; })(entreeValue,drinkValue);'},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables",id:"56533eb9ac21ba0edf2244c8"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-accessing-object-properties-with-bracket-notation-7b41763a69c4410c6fde.js.map