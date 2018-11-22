webpackJsonp([0xf7319848307b],{4072:function(e,t){e.exports={data:{challengeNode:{title:"Push Elements Left or Right with the float Property",description:["接下来要介绍的定位机制并不是<code>position</code>属性的选项，它通过元素的<code>float</code>属性来设置。浮动元素不在文档流中，它向左或向右浮动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。通常需要用<code>width</code>属性来指定浮动元素占据的水平空间。","<hr>","设置<code>#left</code>元素的<code>float</code>为<code>left</code>，设置<code>#right</code>元素的<code>float</code>为<code>right</code>。使这两个元素按两列布局，<code>section</code>和<code>aside</code>左右排列。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property",blockName:"Applied Visual Design",tests:[{text:"id 为<code>left</code>的元素应该有一个值为<code>left</code>的<code>float</code>CSS 属性。",testString:"assert($('#left').css('float') == 'left', 'id 为<code>left</code>的元素应该有一个值为<code>left</code>的<code>float</code>CSS 属性。');"},{text:"id 为<code>right</code>的元素应该有一个值为<code>right</code>的<code>float</code>CSS 属性。",testString:"assert($('#right').css('float') == 'right', 'id 为<code>right</code>的元素应该有一个值为<code>right</code>的<code>float</code>CSS 属性。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<head>\n  <style>\n  #left {\n    \n    width: 50%;\n  }\n  #right {\n    \n    width: 40%;\n  }\n  aside, section {\n    padding: 2px;\n    background-color: #ccc;\n  }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>欢迎！</h1>\n  </header>\n  <section id="left">\n    <h2>内容</h2>\n    <p>好样的</p>\n  </section>\n  <aside id="right">\n    <h2>侧边栏</h2>\n    <p>一些链接</p>\n  </aside>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property",id:"587d78a3367417b2b2512ace"},slug:"/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-push-elements-left-or-right-with-the-float-property-6e9eb584d28b2c24252d.js.map