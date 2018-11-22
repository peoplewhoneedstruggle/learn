webpackJsonp([0xbca9fbdd6c5d],{4124:function(e,t){e.exports={data:{challengeNode:{title:"Use Attribute Selectors to Style Elements",description:["你已经通过设置元素的<code>id</code>和<code>class</code>，来显示你想要的样式，而它们也被分别叫做 ID 选择器和 Class 选择器。另外，也还有其他的 CSS 选择器，可以让我们给特定的元素设置样式。","让我们再次通过猫咪图片项目来练习 CSS 选择器。","在这个挑战里，你会使用<code>[attr=value]</code>属性选择器修改复选框的样式。这个选择器使用特定的属性值来匹配和设置元素样式。例如，下面的代码会改变所有<code>type</code>为<code>radio</code>的元素的外边距。","<blockquote>[type='radio'] {<br>&nbsp;&nbsp;margin: 20px 0px 20px 0px;<br>}</blockquote>","<hr>","使用<code>type</code>属性选择器，尝试改变复选框的上外边距为 10px，下外边距为 15px。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements",blockName:"Basic CSS",tests:[{text:"使用<code>type</code>属性选择器来匹配复选框。",testString:"assert(code.match(/<style>[\\s\\S]*?\\[type=(\"|')checkbox\\1\\]\\s*?{[\\s\\S]*?}[\\s\\S]*?<\\/style>/gi),'使用<code>type</code>属性选择器来匹配复选框。');"},{text:"复选框的上外边距应为 10px。",testString:"assert((function() {var count=0; $(\"[type='checkbox']\").each(function() { if($(this).css('marginTop') === '10px') {count++;}});return (count===3)}()),'复选框的上外边距应为 10px。');"},{text:"复选框的下外边距应为 15px。",testString:"assert((function() {var count=0; $(\"[type='checkbox']\").each(function() { if($(this).css('marginBottom') === '15px') {count++;}});return (count===3)}()),'复选框的下外边距应为 15px。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n  .red-text {\n    color: red;\n  }\n\n  h2 {\n    font-family: Lobster, monospace;\n  }\n\n  p {\n    font-size: 16px;\n    font-family: monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n    border-radius: 50%;\n  }\n\n  .smaller-image {\n    width: 100px;\n  }\n\n  .silver-background {\n    background-color: silver;\n  }\n</style>\n\n<h2 class="red-text">CatPhotoApp</h2>\n<main>\n  \n  <a href="#"><img class="smaller-image thick-green-border" src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>\n  \n  <div class="silver-background">\n    <p>猫咪最喜欢的三件东西：</p>\n    <ul>\n      <li>猫薄荷</li>\n      <li>激光笔</li>\n      <li>千层饼</li>\n    </ul>\n    <p>猫咪最讨厌的三件东西：</p>\n    <ol>\n      <li>跳蚤</li>\n      <li>打雷</li>\n      <li>同类</li>\n    </ol>\n  </div>\n  \n  <form action="/submit-cat-photo" id="cat-photo-form">\n    <label><input type="radio" name="indoor-outdoor">室内</label>\n    <label><input type="radio" name="indoor-outdoor">室外</label><br>\n    <label><input type="checkbox" name="personality">忠诚</label>\n    <label><input type="checkbox" name="personality">懒惰</label>\n    <label><input type="checkbox" name="personality">积极</label><br>\n    <input type="text" placeholder="猫咪图片地址" required>\n    <button type="submit">提交</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/understand-absolute-versus-relative-units",id:"58c383d33e2e3259241f3076"},slug:"/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-use-attribute-selectors-to-style-elements-d46019cad78785f7dab4.js.map