webpackJsonp([0x7ad9baddd831],{3574:function(e,n){e.exports={data:{challengeNode:{title:"Create a Component with Composition",description:["现在我们来看看如何组合多个 React 组件。想象一下，你正在构建一个应用程序，并创建了三个组件：<code>Navbar</code>、<code>Dashboard</code>和<code>Footer</code>。","要将这些组件组合在一起，你可以创建一个<code>App</code><i>父组件</i>，将这三个组件分别渲染成为<i>子组件</i>。要在 React 组件中渲染一个子组件，你需要在 JSX 中包含作为自定义 HTML 标签编写的组件名称。例如，在<code>render</code>方法中，你可以这样编写：","<blockquote>return (<br> &lt;App&gt;<br>&nbsp;&nbsp;&lt;Navbar /&gt;<br>&nbsp;&nbsp;&lt;Dashboard /&gt;<br>&nbsp;&nbsp;&lt;Footer /&gt;<br> &lt;/App&gt;<br>)</blockquote>","当 React 遇到引用另一个组件的自定义 HTML 标签时（如本例所示，组件名称包含在<code>&lt; /&gt;</code>中），它在标签的位置渲染该组件的标签。这可以说明<code>App</code>组件和<code>Navbar</code>、<code>Dashboard</code>以及<code>Footer</code>之间的父子关系。","<hr>","在代码编辑器中，有一个名为<code>ChildComponent</code>的简单功能组件和一个名为<code>ParentComponent</code>的 React 组件。通过在<code>ParentComponent</code>中渲染<code>ChildComponent</code>来将两者组合在一起。确保使用正斜杠关闭<code>ChildComponent</code>标签。","<strong>注意：</strong>&nbsp;<code>ChildComponent</code>是使用 ES6 的箭头函数定义的，因为这是使用 React 时非常常见的做法。但是，要知道这只是一个函数。如果你不熟悉箭头函数语法，请参阅 JavaScript 部分。"],challengeType:6,fields:{slug:"/front-end-libraries/react/create-a-component-with-composition",blockName:"React",tests:[{text:"React 组件应该返回单个<code>div</code>元素。",testString:"assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === 'div'; })(), 'React 组件应该返回单个<code>div</code>元素。');"},{text:"组件应该返回两个嵌套的元素。",testString:"assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })(), '组件应该返回两个嵌套的元素。');"},{text:"组件的第二个子元素应该是 ChildComponent。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find('ParentComponent').find('ChildComponent').length === 1; })(), '组件的第二个子元素应该是 ChildComponent。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const ChildComponent = () => {\n  return (\n    <div>\n      <p>I am the child</p>\n    </div>\n  );\n};\n\nclass ParentComponent extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <h1>I am the parent</h1>\n        { /* change code below this line */ }\n\n\n        { /* change code above this line */ }\n      </div>\n    );\n  }\n};",head:"",tail:"ReactDOM.render(<ParentComponent />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/use-react-to-render-nested-components",id:"5a24c314108439a4d4036164"},slug:"/front-end-libraries/react/create-a-component-with-composition"}}}});
//# sourceMappingURL=path---front-end-libraries-react-create-a-component-with-composition-4479fa6a0df46f70b424.js.map