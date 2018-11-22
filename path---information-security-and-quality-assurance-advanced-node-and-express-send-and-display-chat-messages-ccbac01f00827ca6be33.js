webpackJsonp([0xd090be981746],{3661:function(e,a){e.exports={data:{challengeNode:{title:"Send and Display Chat Messages",guideUrl:null,description:["注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。","现在，我们可以开始实现聊天室功能了。整体逻辑很简单，只需要获取用户发给服务端的消息，再通过服务端给所有客户端发送信息就可以了。在 client.js 文件里，你应该已经注意到了这段提交表单的代码：<code>$('form').submit(function(){ /*logic*/ });</code>","<hr>现在我们需要处理事件的 emit，它应该发生在定义 'messageToSend' 之后，以及清除<code>#m</code>中的文本之前。我们称这个事件叫 'chat message'，需发送的数据叫 'messageToSend'：<code>socket.emit('chat message', messageToSend);</code>","在服务端，我们需要监听包含 'message' 的 'chat message' 事件。一旦事件发生，我们就通过<code>io.emit</code> 把包含 'name' 和 'message' 的 'chat message' 事件发送给所有已连接的 socket。","回到客户端，我们需要监听 'chat message' 事件。只要接收到这个事件，就把包含名字和消息的内容（注意：需要在名字后添加冒号）通过<code>&#60;li&#62;</code>添加到<code>#messages</code>。","至此，我们已经完成发送信息到所有客户端的功能。完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在 <a href='https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136'>这里对应服务端</a> 和 <a href='https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744'>这里对应客户端</a> 来检查完成代码。"],challengeType:2,fields:{blockName:"Advanced Node and Express",slug:"/information-security-and-quality-assurance/advanced-node-and-express/send-and-display-chat-messages",tests:[{text:"服务端应监听 'chat message'，且应在监听到后 emit。",testString:"getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|\")chat message('|\")[^]*io.emit.*('|\")chat message('|\").*name.*message/gi, '服务端应监听 \"chat message\" 事件，然后把包含 name 和 message 字段的事件发送给所有已连接的用户。'); }, xhr => { throw new Error(xhr.statusText); })"},{text:"客户端应正确处理和展示从 'chat message' 事件发来的新数据。",testString:"getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")chat message('|\")[^]*messages.*li/gi, '应在客户端监听 \"chat message\" 事件，且在回调函数中为 #messages 添加列表项。'); }, xhr => { throw new Error(xhr.statusText); })"}]}}},pathContext:{challengeMeta:{introPath:"/information-security-and-quality-assurance/information-security-and-quality-assurance-projects",template:null,required:[],nextChallengePath:"/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/metric-imperial-converter",id:"589fc832f9fc0f352b528e79"},slug:"/information-security-and-quality-assurance/advanced-node-and-express/send-and-display-chat-messages"}}}});
//# sourceMappingURL=path---information-security-and-quality-assurance-advanced-node-and-express-send-and-display-chat-messages-ccbac01f00827ca6be33.js.map