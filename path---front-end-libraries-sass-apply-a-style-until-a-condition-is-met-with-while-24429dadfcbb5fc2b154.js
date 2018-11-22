webpackJsonp([92779282721622],{3633:function(e,t){e.exports={data:{challengeNode:{title:"Apply a Style Until a Condition is Met with @while",description:["Sass 中的<code>@while</code>指令与 JavaScript 中的<code>while</code>类似。只要满足条件，它就会一直创建 CSS 代码。","<code>@for</code>挑战提供了一个创建简单网格系统的示例。这也适用于<code>@while</code>。","<blockquote>$x: 1;<br>@while $x< 13 {<br>&nbsp;&nbsp;.col-#{$x} { width: 100%/12 * $x;}<br>&nbsp;&nbsp;$x: $x + 1;<br>}</blockquote>","首先，定义变量<code>$x</code>并将其设置为 1。接下来，使用<code>@while</code>指令，当<code>$x</code>小于 13 时创建网格系统 。","在设置<code>width</code>的 CSS 规则后，<code>$x</code>增加 1 以避免无限循环。","<hr>","使用<code>@while</code>创建一系列具有不同<code>font-sizes</code>的 class。","从<code>text-1</code>到<code>text-10</code>应该有 10 个不同的 class。然后将<code>font-size</code>设置为 5px 乘以当前索引号。注意不要写成死循环！"],challengeType:0,fields:{slug:"/front-end-libraries/sass/apply-a-style-until-a-condition-is-met-with-while",blockName:"Sass",tests:[{text:"你的代码应使用<code>@while</code>指令。",testString:"assert(code.match(/@while /g), '你的代码应使用<code>@while</code>指令。');"},{text:"你的代码应将索引变量设置为 1 才能启动。",testString:"assert(code.match(/\\$.*:\\s*?1;/gi), '你的代码应将索引变量设置为 1 才能启动。');"},{text:"你的代码应该递增计数器变量。",testString:"assert(code.match(/\\$(.*):\\s*?\\$\\1\\s*?\\+\\s*?1;/gi), '你的代码应该递增计数器变量。');"},{text:"<code>.text-1</code>class 的<code>font-size</code>应为5px。",testString:"assert($('.text-1').css('font-size') == '5px', '<code>.text-1</code>class 的<code>font-size</code>应为5px。');"},{text:"<code>.text-2</code>class 的<code>font-size</code>应为 10px。",testString:"assert($('.text-2').css('font-size') == '10px', '<code>.text-2</code>class 的<code>font-size</code>应为 10px。');"},{text:"<code>.text-3</code>class 的<code>font-size</code>应为 15px。",testString:"assert($('.text-3').css('font-size') == '15px', '<code>.text-3</code>class 的<code>font-size</code>应为 15px。');"},{text:"<code>.text-4</code>class 的<code>font-size</code>应为 20px。",testString:"assert($('.text-4').css('font-size') == '20px', '<code>.text-4</code>class 的<code>font-size</code>应为 20px。');"},{text:"<code>.text-5</code>class 的<code>font-size</code>应为 25px。",testString:"assert($('.text-5').css('font-size') == '25px', '<code>.text-5</code>class 的<code>font-size</code>应为 25px。');"},{text:"<code>.text-6</code>class 的<code>font-size</code>应为 30px。",testString:"assert($('.text-6').css('font-size') == '30px', '<code>.text-6</code>class 的<code>font-size</code>应为 30px。');"},{text:"<code>.text-7</code>class 的<code>font-size</code>应为 35px。",testString:"assert($('.text-7').css('font-size') == '35px', '<code>.text-7</code>class 的<code>font-size</code>应为 35px。');"},{text:"<code>.text-8</code>class 的<code>font-size</code>应为 40px。",testString:"assert($('.text-8').css('font-size') == '40px', '<code>.text-8</code>class 的<code>font-size</code>应为 40px。');"},{text:"<code>.text-9</code>class 的<code>font-size</code>应为 45px。",testString:"assert($('.text-9').css('font-size') == '45px', '<code>.text-9</code>class 的<code>font-size</code>应为 45px。');"},{text:"<code>.text-10</code>class 的<code>font-size</code>应为 50px。",testString:"assert($('.text-10').css('font-size') == '50px', '<code>.text-10</code>class 的<code>font-size</code>应为 50px。');"}]},required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style type=\'text/sass\'>\n  \n  \n  \n</style>\n\n<p class="text-1">Hello</p>\n<p class="text-2">Hello</p>\n<p class="text-3">Hello</p>\n<p class="text-4">Hello</p>\n<p class="text-5">Hello</p>\n<p class="text-6">Hello</p>\n<p class="text-7">Hello</p>\n<p class="text-8">Hello</p>\n<p class="text-9">Hello</p>\n<p class="text-10">Hello</p>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],nextChallengePath:"/front-end-libraries/sass/split-your-styles-into-smaller-chunks-with-partials",id:"587d7dbf367417b2b2512bbb"},slug:"/front-end-libraries/sass/apply-a-style-until-a-condition-is-met-with-while"}}}});
//# sourceMappingURL=path---front-end-libraries-sass-apply-a-style-until-a-condition-is-met-with-while-24429dadfcbb5fc2b154.js.map