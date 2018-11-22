webpackJsonp([0xd60c4ce7f707],{3478:function(e,a){e.exports={data:{challengeNode:{title:"Set a Domain and a Range on a Scale",description:["默认情况下，比例尺使用同一关系(identity relationship)，即输入值直接映射为输出值。但是比例尺可以更灵活更有趣。","假设有一个数据集范围为 50 到 480，这是缩放的输入信息，也被称为域(domain)。","你想沿着 10 个单位到 500 个单位的<code>x</code>轴映射这些点到 SVG 画布上。这是输出信息，也被称为范围(range)。","<code>domain()</code>和<code>range()</code>方法设置缩放的值，它们都以至少有两个元素的数组为参数。下面是一个例子：","<blockquote>// 设置域<br>// 域覆盖了一组输入值<br>scale.domain([50, 480]);<br>// 设置范围<br>// 范围覆盖了一组输出值<br>scale.range([10, 500]);<br>scale(50) // 返回 10<br>scale(480) // 返回 500<br>scale(325) // 返回 323.37<br>scale(750) // 返回 807.67<br>d3.scaleLinear()</blockquote>","注意，比例尺使用了域和范围之间的线性关系来找出给定数字的输出值。域中的最小值(50)映射为范围中的最小值(10)。","<hr>","创建一个比例尺，将它的域设置为<code>[250, 500]</code>，范围设置为<code>[10, 150]</code>。","<strong>提示</strong><br>你可以将<code>domain()</code>和<code>range()</code>方法串联在<code>scale</code>变量后。"],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/set-a-domain-and-a-range-on-a-scale",blockName:"Data Visualization with D3",tests:[{text:"你应该使用<code>domain()</code>方法。",testString:"assert(code.match(/\\.domain/g), '你应该使用<code>domain()</code>方法。');"},{text:"比例尺的<code>domain()</code>应该设置为<code>[250, 500]</code>。",testString:"assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), '比例尺的<code>domain()</code>应该设置为<code>[250, 500]</code>。');"},{text:"你应该使用<code>range()</code>方法。",testString:"assert(code.match(/\\.range/g), '你应该使用<code>range()</code>方法。');"},{text:"比例尺的<code>range()</code>应该设置为<code>[10, 150]</code>。",testString:"assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), '比例尺的<code>range()</code>应该设置为<code>[10, 150]</code>。');"},{text:"<code>h2</code>的文本应该为 -102。",testString:"assert($('h2').text() == '-102', '<code>h2</code>的文本应该为 -102。');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <script>\n    // 在下面添加你的代码\n    const scale = d3.scaleLinear();\n    \n    \n    \n    // 在上面添加你的代码\n    const output = scale(50);\n    d3.select("body")\n      .append("h2")\n      .text(output);\n  </script>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/data-visualization-with-d3/use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset",id:"587d7fac367417b2b2512bdb"},slug:"/data-visualization/data-visualization-with-d3/set-a-domain-and-a-range-on-a-scale"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-set-a-domain-and-a-range-on-a-scale-12c26e487861bfe1716c.js.map