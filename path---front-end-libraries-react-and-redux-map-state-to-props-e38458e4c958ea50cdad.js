webpackJsonp([0x858203b39b5a],{3566:function(e,t){e.exports={data:{challengeNode:{title:"Map State to Props",description:["<code>Provider</code>可向 React 组件提供<code>state</code>和<code>dispatch</code>，但你必须确切地指定所需要的 state 和 actions，以确保每个组件只能访问所需的 state。完成这个任务，你需要创建两个函数：<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>。","在这两个函数中，声明 state 中函数所要访问的部分及需要 dispatch 的创建 action 的函数。完成这些，我们就可以迎接下一个挑战，学习如何使用 React Redux 的<code>connect</code>方法来把函数连接到组件了。","<strong>注意：</strong>&nbsp;在幕后，React Redux 用<code>store.subscribe()</code>方法来实现<code>mapStateToProps()</code>。","<hr>","创建<code>mapStateToProps()</code>函数，以<code>state</code>为参数，然后返回一个对象，该对象把 state 映射到特定属性名上，这些属性能通过<code>props</code>访问组件。由于此示例把 app 应用的整个状态保存在单一数组中，你可把整个状态传给组件。在返回的对象中创建<code>messages</code>属性，并设置为<code>state</code>。"],challengeType:6,fields:{slug:"/front-end-libraries/react-and-redux/map-state-to-props",blockName:"React and Redux",tests:[{text:"常量<code>state</code>应为空数组。",testString:"assert(Array.isArray(state) && state.length === 0, '常量<code>state</code>应为空数组。');"},{text:"<code>mapStateToProps</code>应为函数。",testString:"assert(typeof mapStateToProps === 'function', '<code>mapStateToProps</code>应为函数。');"},{text:"<code>mapStateToProps</code>应返还一个对象。",testString:"assert(typeof mapStateToProps() === 'object', '<code>mapStateToProps</code><code>mapStateToProps</code>应返还一个对象。');"},{text:"把 state 数组传入<code>mapStateToProps</code>后应返回赋值给<code>messages</code>键的数组。",testString:"assert(mapStateToProps(['messages']).messages.pop() === 'messages', '把 state 数组传入<code>mapStateToProps</code>后应返回赋值给<code>messages</code>键的数组。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const state = [];\n\n// 请在本行以下添加你的代码\n",head:"",tail:""}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],nextChallengePath:"/front-end-libraries/react-and-redux/map-dispatch-to-props",id:"5a24c314108439a4d4036145"},slug:"/front-end-libraries/react-and-redux/map-state-to-props"}}}});
//# sourceMappingURL=path---front-end-libraries-react-and-redux-map-state-to-props-e38458e4c958ea50cdad.js.map