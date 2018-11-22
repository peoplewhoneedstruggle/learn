webpackJsonp([0xa35a014bae49],{4126:function(e,o){e.exports={data:{challengeNode:{title:"Use Clockwise Notation to Specify the Padding of an Element",description:["如果不想每次都要分别声明<code>padding-top</code>，<code>padding-right</code>，<code>padding-bottom</code>和<code>padding-left</code>属性，可以把它们汇总在<code>padding</code>属性里面声明，如下：","<code>padding: 10px 20px 10px 20px;</code>","这四个值按顺时针排序：上，右，下，左，并且设置的效果等同于特定声明每一个方向的<code>padding</code>。","<hr>",'按照顺时针顺序，给".blue-box" class的上内边距以及左内边距设置为<code>40px</code>，右内边距和下内边距则设置为<code>20px</code>。'],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element",blockName:"Basic CSS",tests:[{text:"<code>blue-box</code> class 的上内边距应为<code>40px</code>。",testString:'assert($(".blue-box").css("padding-top") === "40px", \'<code>blue-box</code> class 的上内边距应为<code>40px</code>。\');'},{text:"<code>blue-box</code> class 的右内边距应为<code>20px</code>。",testString:'assert($(".blue-box").css("padding-right") === "20px", \'<code>blue-box</code> class 的右内边距应为<code>40px</code>。\');'},{text:"<code>blue-box</code> class 的下内边距应为<code>20px</code>。",testString:'assert($(".blue-box").css("padding-bottom") === "20px", \'<code>blue-box</code> class 的下内边距应为<code>20px</code>。\');'},{text:"<code>blue-box</code> class 的左内边距应为<code>40px</code>。",testString:'assert($(".blue-box").css("padding-left") === "40px", \'<code>blue-box</code> class 的左内边距应为<code>40px</code>。\');'},{text:"你应该按照顺时针排序，汇总声明的方式来设置<code>blue-box</code>的<code>padding</code>值。",testString:"assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), '你应该按照顺时针排序，汇总声明的方式来设置<code>blue-box</code>的<code>padding</code>值。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  .injected-text {\n    margin-bottom: -25px;\n    text-align: center;\n  }\n\n  .box {\n    border-style: solid;\n    border-color: black;\n    border-width: 5px;\n    text-align: center;\n  }\n\n  .yellow-box {\n    background-color: yellow;\n    padding: 20px 40px 20px 40px;\n  }\n  \n  .red-box {\n    background-color: crimson;\n    color: #fff;\n    padding: 20px 40px 20px 40px;\n  }\n\n  .blue-box {\n    background-color: blue;\n    color: #fff;\n  }\n</style>\n<h5 class="injected-text">margin</h5>\n\n<div class="box yellow-box">\n  <h5 class="box red-box">padding</h5>\n  <h5 class="box blue-box">padding</h5>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element",id:"bad87fee1348bd9aedf08826"},slug:"/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-use-clockwise-notation-to-specify-the-padding-of-an-element-fd216bb225a23ab307ef.js.map