webpackJsonp([44864988975468],{3545:function(e,t){e.exports={data:{challengeNode:{title:"Target Elements by Class Using jQuery",description:['我们如何使所有的<code>button</code>标签有弹性的动画效果？我们用<code>$("button")</code>选取所有的<code>button</code>标签，并用<code>.addClass("animated bounce");</code>给其添加一些 CSS 属性。',"jQuery 的<code>.addClass()</code>方法用来给标签添加类。",'首先，我们使用<code>$(".well")</code>选取类为<code>well</code>的<code>div</code>标签。',"值得注意的是，和 CSS 声明一样，在类名前需要添加<code>.</code>。","然后，用 jQuery 的<code>.addClass()</code>方法添加<code>animated</code>和<code>shake</code>类。","例如，在<code>document ready function</code>中添加下面的代码，能使所有类为<code>text-primary</code>的标签抖动：",'<code>$(".text-primary").addClass("animated shake");</code>'],challengeType:0,fields:{slug:"/front-end-libraries/jquery/target-elements-by-class-using-jquery",blockName:"jQuery",tests:[{text:"用 jQuery 的<code>addClass&#40&#41</code>方法给所有类为<code>well</code>的标签添加<code>animated</code>和<code>shake</code>类。",testString:'assert($(".well").hasClass("animated") && $(".well").hasClass("shake"), \'用 jQuery 的<code>addClass&#40&#41</code>方法给所有类为<code>well</code>的标签添加<code>animated</code>和<code>shake</code>类。\');'},{text:"仅用 jQuery 给标签添加类。",testString:"assert(!code.match(/class\\.\\*animated/g), '仅用 jQuery 给标签添加类。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css",raw:null,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<script>\n  $(document).ready(function() {\n    $("button").addClass("animated bounce");\n  });\n</script>\n\n<!-- 请修改本行以上的代码 -->\n\n<div class="container-fluid">\n  <h3 class="text-primary text-center">jQuery Playground</h3>\n  <div class="row">\n    <div class="col-xs-6">\n      <h4>#left-well</h4>\n      <div class="well" id="left-well">\n        <button class="btn btn-default target" id="target1">#target1</button>\n        <button class="btn btn-default target" id="target2">#target2</button>\n        <button class="btn btn-default target" id="target3">#target3</button>\n      </div>\n    </div>\n    <div class="col-xs-6">\n      <h4>#right-well</h4>\n      <div class="well" id="right-well">\n        <button class="btn btn-default target" id="target4">#target4</button>\n        <button class="btn btn-default target" id="target5">#target5</button>\n        <button class="btn btn-default target" id="target6">#target6</button>\n      </div>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css",raw:null,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/jquery/target-elements-by-id-using-jquery",id:"bad87fee1348bd9aedc08826"},slug:"/front-end-libraries/jquery/target-elements-by-class-using-jquery"}}}});
//# sourceMappingURL=path---front-end-libraries-jquery-target-elements-by-class-using-jquery-0b96e1926aeca15da4d1.js.map