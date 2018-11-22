webpackJsonp([0x7b33f386efbc],{4174:function(e,o){e.exports={data:{challengeNode:{title:"Use the flex Shorthand Property",description:["上面几个 flex 属性有一个简写方式。<code>flex-grow</code>、<code>flex-shrink</code>和<code>flex-basis</code>属性可以在<code>flex</code>中一同设置。","例如，<code>flex: 1 0 10px;</code>会把项目属性设为<code>flex-grow: 1;</code>、<code>flex-shrink: 0;</code>以及<code>flex-basis: 10px;</code>。","属性的默认设置是<code>flex: 0 1 auto;</code>。","<hr>","在<code>#box-1</code>和<code>#box-2</code>添加<code>flex</code>属性。把<code>#box-1</code>设置成<code>flex-grow</code>为 2，<code>flex-shrink</code>为 2，<code>flex-basis</code>为 150px。把<code>#box-2</code>设置成<code>flex-grow</code>为 1，<code>flex-shrink</code>为 1，<code>flex-basis</code>为 150px。","上面设置的属性，在容器大于 300px 时，会让<code>#box-1</code>填充倍率为<code>#box-2</code>的两倍；在容器小于 300px 时，缩小倍率为<code>#box-2</code>的两倍。300px 是两个盒子的<code>flex-basis</code>的值之和。"],challengeType:0,fields:{slug:"/responsive-web-design/css-flexbox/use-the-flex-shorthand-property",blockName:"CSS Flexbox",tests:[{text:"<code>#box-1</code>元素应有<code>flex</code>属性，其值应为 2 2 150px。",testString:"assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px', '<code>#box-1</code>元素应有<code>flex</code>属性，其值应为 2 2 150px。');"},{text:"<code>#box-2</code>元素应有<code>flex</code>属性，其值应为 1 1 150px。",testString:"assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px', '<code>#box-2</code>元素应有<code>flex</code>属性，其值应为 1 1 150px。');"},{text:"应对<code>#box-1</code>和<code>#box-2</code>使用<code>flex</code>属性。",testString:"assert(code.match(/flex:\\s*?\\d\\s+?\\d\\s+?150px;/g).length == 2, '应对<code>#box-1</code>和<code>#box-2</code>使用<code>flex</code>属性。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  #box-container {\n    display: flex;\n    height: 500px;\n  }\n  #box-1 {\n    background-color: dodgerblue;\n    \n    height: 200px;\n  }\n\n  #box-2 {\n    background-color: orangered;\n    \n    height: 200px;\n  }\n</style>\n\n<div id="box-container">\n  <div id="box-1"></div>\n  <div id="box-2"></div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items",id:"587d78ae367417b2b2512afe"},slug:"/responsive-web-design/css-flexbox/use-the-flex-shorthand-property"}}}});
//# sourceMappingURL=path---responsive-web-design-css-flexbox-use-the-flex-shorthand-property-5d019585a719ff7aacb7.js.map