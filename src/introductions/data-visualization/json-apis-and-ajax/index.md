---
title: Introduction to the JSON APIs and AJAX Challenges
block: JSON APIs and Ajax
superBlock: Data Visualization
---
## Introduction to the JSON APIs and AJAX Challenges

用户界面是用来帮助人们如何使用程序，而应用编程接口（APIs）是用来帮助程序与其他程序交互。APIs 是计算机间相互通信的工具，专门用于发送和接受数据。当你理解了如何发送请求和处理数据后，你就可以在页面中使用 API 了，程序员们通常会使用 AJAX 技术来发起 API 请求。

AJAX 术语 是 Asynchronous JavaScript And XML 的首字母缩写，它不是一个单一技术，而是一系列技术的组合。它向服务器发出异步请求以传输数据，然后将返回的数据加载到页面中。正是因为 AJAX 是异步的，所以浏览器不会停止加载页面来等待服务器的响应，也无需刷新整个页面就可以将更新的数据插入页面。

异步能在多方面提升用户的体验，由于浏览器不用在渲染页面的时候等待服务器做出响应，因而页面的加载速度更快。请求和传输都在后台进行，不会中断用户当前的操作。当浏览器接受到新的数据的时候，只有特定的区域会刷新，这些特性很大程度上增强了单页应用程序的用户体验。

浏览器和服务器之间传输的数据通常使用一种叫 JSON（JavaScript Object Notation）的格式。JSON 类似于 JavaScript 的对象字面量语法，只是它是以字符串的形式传输，一旦接收，就可以将其转换成对象在脚本中使用。

本节将通过 freeCodeCamp API 的使用来了解 AJAX 技术的数据传输和使用。
