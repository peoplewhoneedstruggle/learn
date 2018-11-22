webpackJsonp([0xb270519be10a],{3559:function(e,n){e.exports={data:{challengeNode:{title:"Connect Redux to React",description:["既然写了<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>两个函数，现在你可以用它们来把<code>state</code>和<code>dispatch</code>映射到 React 组件的<code>props</code>了。React Redux 的<code>connect</code>方法可以完成这个任务。此方法有<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>两个可选参数，它们是可选的，原因是你的组件可能仅需要访问<code>状态</code>但不需要分发任何 actions，反之亦然。","为了使用此方法，需要传入函数参数并在调用时传入组件。这种语法有些不寻常，如下所示：","<code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code>","<strong>注意：</strong>&nbsp;如果要省略<code>connect</code>方法中的某个参数，则应当用<code>null</code>替换这个参数。","<hr>","在编辑器上有两个函数：<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>，还有一个叫<code>Presentational</code>的 React 组件。用<code>ReactRedux</code>全局对象中的<code>connect</code>方法将此组件连接到 Redux，并立即在<code>Presentational</code>组件中调用，把结果赋值给一个名为<code>ConnectedComponent</code>的代表已连接组件的新常量。大功告成！你已成功把 React 连接到 Redux！尝试更改任何一个<code>connect</code>参数为<code>null</code>并观察测试结果。"],challengeType:6,fields:{slug:"/front-end-libraries/react-and-redux/connect-redux-to-react",blockName:"React and Redux",tests:[{text:"应渲染<code>Presentational</code>组件。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })(), '应渲染<code>Presentational</code>组件。');"},{text:"<code>Presentational</code>组件应通过<code>connect</code>接收一个<code>messages</code>属性。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return props.messages === '__INITIAL__STATE__'; })(), '<code>Presentational</code>组件应通过<code>connect</code>接收一个<code>messages</code>属性。');"},{text:"<code>Presentational</code>组件应通过<code>connect</code>接收一个<code>submitNewMessage</code>属性。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return typeof props.submitNewMessage === 'function'; })(), '<code>Presentational</code>组件应通过<code>connect</code>接收一个<code>submitNewMessage</code>属性。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const addMessage = (message) => {\n  return {\n    type: 'ADD',\n    message: message\n  }\n};\n\nconst mapStateToProps = (state) => {\n  return {\n    messages: state\n  }\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    submitNewMessage: (message) => {\n      dispatch(addMessage(message));\n    }\n  }\n};\n\nclass Presentational extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return <h3>This is a Presentational Component</h3>\n  }\n};\n\nconst connect = ReactRedux.connect;\n// 请在本行以下添加你的代码\n",head:"",tail:"\nconst store = Redux.createStore(\n  (state = '__INITIAL__STATE__', action) => state\n);\nclass AppWrapper extends React.Component {\n  render() {\n    return (\n      <ReactRedux.Provider store = {store}>\n        <ConnectedComponent/>\n      </ReactRedux.Provider>\n    );\n  }\n};\nReactDOM.render(<AppWrapper />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],nextChallengePath:"/front-end-libraries/react-and-redux/connect-redux-to-the-messages-app",id:"5a24c314108439a4d4036147"},slug:"/front-end-libraries/react-and-redux/connect-redux-to-react"}}}});
//# sourceMappingURL=path---front-end-libraries-react-and-redux-connect-redux-to-react-51210539e3e49fa364d7.js.map