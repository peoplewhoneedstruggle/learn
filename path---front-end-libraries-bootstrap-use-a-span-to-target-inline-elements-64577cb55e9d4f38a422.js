webpackJsonp([63187489063324],{3524:function(t,e){t.exports={data:{challengeNode:{title:"Use a span to Target Inline Elements",description:["你可以使用 span 标签来创建行内元素。还记得我们怎么使用 <code>btn-block</code> class 来创建填满整行的按钮吗？","<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>normal button</button>","<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>btn-block button</button>",'上面的例子就是 "inline" （行内）元素和 "block" （块级）元素的区别。',"通过使用行内元素 <code>span</code>，你可以把不同的元素放在同一行，甚至能为一个的元素不同部分指定样式。",'把 "Things cats love" 中的 "love" 放入 <code>span</code> 标签。然后为其添加 <code>text-danger</code> class 来使其文字变成红色。','"Top 3 things cats hate" 元素的写法如下：','<code>&#60;p&#62;Top 3 things cats &#60;span class="text-danger"&#62;hate:&#60;/span&#62;&#60;/p&#62;</code>'],challengeType:0,fields:{slug:"/front-end-libraries/bootstrap/use-a-span-to-target-inline-elements",blockName:"Bootstrap",tests:[{text:"<code>span</code> 元素应该在 <code>p</code> 元素内。",testString:'assert($("p span") && $("p span").length > 0, \'<code>span</code> 元素应该在 <code>p</code> 元素内。\');'},{text:"<code>span</code> 元素应该只含有文本 <code>love</code>。",testString:'assert($("p span") && $("p span").text().match(/love/i) && !$("p span").text().match(/Things cats/i), \'<code>span</code> 元素应该只含有文本 <code>love</code>。\');'},{text:"<code>span</code> 元素应该含有 class <code>text-danger</code>。",testString:'assert($("span").hasClass("text-danger"), \'<code>span</code> 元素应该含有 class <code>text-danger</code>。\');'},{text:"确保你的 <code>span</code> 元素有一个闭合标签。",testString:"assert(code.match(/<\\/span>/g) && code.match(/<span/g) && code.match(/<\\/span>/g).length === code.match(/<span/g).length, '确保你的 <code>span</code> 元素有一个闭合标签。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n\n  h2 {\n    font-family: Lobster, Monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n    border-radius: 50%;\n  }\n\n</style>\n\n<div class="container-fluid">\n  <h2 class="text-primary text-center">CatPhotoApp</h2>\n\n  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n\n  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">\n  <div class="row">\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-primary">Like</button>\n    </div>\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-info">Info</button>\n    </div>\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-danger">Delete</button>\n    </div>\n  </div>\n  <p>Things cats love:</p>\n  <ul>\n    <li>cat nip</li>\n    <li>laser pointers</li>\n    <li>lasagna</li>\n  </ul>\n  <p>Top 3 things cats hate:</p>\n  <ol>\n    <li>flea treatment</li>\n    <li>thunder</li>\n    <li>other cats</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor"> Indoor</label>\n    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>\n    <label><input type="checkbox" name="personality"> Loving</label>\n    <label><input type="checkbox" name="personality"> Lazy</label>\n    <label><input type="checkbox" name="personality"> Crazy</label>\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/bootstrap/create-a-custom-heading",id:"bad87fee1348bd9aedf08845"},slug:"/front-end-libraries/bootstrap/use-a-span-to-target-inline-elements"}}}});
//# sourceMappingURL=path---front-end-libraries-bootstrap-use-a-span-to-target-inline-elements-64577cb55e9d4f38a422.js.map