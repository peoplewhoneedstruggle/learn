webpackJsonp([0xb3531f042bb1],{2795:function(e,o){e.exports={data:{challengeNode:{title:"Install and Set Up Mongoose",guideUrl:null,description:["在 package.json 文件中添加 MongoDB 和 Mongoose 依赖，将 mLab 数据库的 URI 作为 MONGO_URI 变量存储在私有 .env 文件中。然后<code>require('mongoose')</code>，使用<code>mongoose.connect(<Your URI>)</code>命令来连接数据库。"],challengeType:2,fields:{blockName:"MongoDB and Mongoose",slug:"/apis-and-microservices/mongodb-and-mongoose/install-and-set-up-mongoose",tests:[{text:'在 package.json 文件中应该有 "mongodb" 依赖。',testString:"getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'mongodb'); }, xhr => { throw new Error(xhr.responseText); })"},{text:'在 package.json 文件中应该有 "mongoose" 依赖。',testString:"getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'mongoose'); }, xhr => { throw new Error(xhr.responseText); })"},{text:'"mongoose" 应该已经连接数据库。',testString:"getUserInput => $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(data => {assert.isTrue(data.isMongooseOk, 'mongoose is not connected')}, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/mongodb-and-mongoose/create-a-model",id:"587d7fb6367417b2b2512c06"},slug:"/apis-and-microservices/mongodb-and-mongoose/install-and-set-up-mongoose"}}}});
//# sourceMappingURL=path---apis-and-microservices-mongodb-and-mongoose-install-and-set-up-mongoose-73fffb6448b4b5410f59.js.map