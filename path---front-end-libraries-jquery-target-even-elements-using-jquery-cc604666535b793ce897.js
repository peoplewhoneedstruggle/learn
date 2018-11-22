webpackJsonp([0xf890881fe45b],{3547:function(e,t){e.exports={data:{challengeNode:{title:"Target Even Elements Using jQuery",description:["你也可以用基于位置的<code>:odd</code>和<code>:even</code>选择器选取标签。","注意，jQuery 是<code>零索引（zero-indexed）</code>的，这意味着第 1 个标签的位置编号是<code>0</code>。这有点混乱和反常——<code>:odd</code>表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。","下面的代码展示了选取所有的奇标签并设置类：",'<code>$(".target:odd").addClass("animated shake");</code>',"请尝试选取所有<code>target</code>标签的偶标签并给他们设置<code>animated</code>和<code>shake</code>类。要考虑到<strong>偶（even）</strong>指的是标签位置编号基于<code>0</code>的系统。"],challengeType:0,fields:{slug:"/front-end-libraries/jquery/target-even-elements-using-jquery",blockName:"jQuery",tests:[{text:"所有的<code>target</code>标签应该抖动。",testString:"assert($('.target:even').hasClass('animated') && $('.target:even').hasClass('shake'), '所有的<code>target</code>标签应该抖动。');"},{text:"应该用<code>&#58;even</code>选择器修改这些标签。",testString:"assert(code.match(/\\:even/g), '应该用<code>&#58;even</code>选择器修改这些标签。');"},{text:"仅用 jQuery 给标签添加类。",testString:"assert(code.match(/\\$\\(\".target:even\"\\)/g) || code.match(/\\$\\('.target:even'\\)/g) || code.match(/\\$\\(\".target\"\\).filter\\(\":even\"\\)/g) || code.match(/\\$\\('.target'\\).filter\\(':even'\\)/g), '仅用 jQuery 给标签添加类。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css",raw:null,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<script>\n  $(document).ready(function() {\n    $("#target1").css("color", "red");\n    $("#target1").prop("disabled", true);\n    $("#target4").remove();\n    $("#target2").appendTo("#right-well");\n    $("#target5").clone().appendTo("#left-well");\n    $("#target1").parent().css("background-color", "red");\n    $("#right-well").children().css("color", "orange");\n    $("#left-well").children().css("color", "green");\n    $(".target:nth-child(2)").addClass("animated bounce");\n\n  });\n</script>\n\n<!-- 请修改本行以上的代码 -->\n\n<div class="container-fluid">\n  <h3 class="text-primary text-center">jQuery Playground</h3>\n  <div class="row">\n    <div class="col-xs-6">\n      <h4>#left-well</h4>\n      <div class="well" id="left-well">\n        <button class="btn btn-default target" id="target1">#target1</button>\n        <button class="btn btn-default target" id="target2">#target2</button>\n        <button class="btn btn-default target" id="target3">#target3</button>\n      </div>\n    </div>\n    <div class="col-xs-6">\n      <h4>#right-well</h4>\n      <div class="well" id="right-well">\n        <button class="btn btn-default target" id="target4">#target4</button>\n        <button class="btn btn-default target" id="target5">#target5</button>\n        <button class="btn btn-default target" id="target6">#target6</button>\n      </div>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css",raw:null,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/jquery/use-jquery-to-modify-the-entire-page",id:"bad87fee1348bd9aed008826"},slug:"/front-end-libraries/jquery/target-even-elements-using-jquery"}}}});
//# sourceMappingURL=path---front-end-libraries-jquery-target-even-elements-using-jquery-cc604666535b793ce897.js.map