webpackJsonp([0xcfc8e0d42028],{3421:function(e,o){e.exports={data:{challengeNode:{title:"Towers of Hanoi",description:["    Task:",'<p>Solve the <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: Towers_of_Hanoi">Towers of Hanoi</a>  problem.</p>',"<p>","Your solution should accept the number of discs as the first parameters, and","three string used to identify each of the three stacks of discs, for example","<code>towerOfHanoi(4, 'A', 'B', 'C')</code>. The function should return an","array of arrays containing the list of moves, source -> destination. For","example, the array <code>[['A', 'C'], ['B', 'A']]</code> indicates that the","1st move was to move a disc from stack A to C, and the 2nd move was to move a","disc from stack B to A.","</p>"],challengeType:5,fields:{slug:"/coding-interview-prep/rosetta-code/towers-of-hanoi",blockName:"Rosetta Code",tests:[{text:"<code>towerOfHanoi</code> is a function.",testString:"assert(typeof towerOfHanoi === 'function', '<code>towerOfHanoi</code> is a function.');"},{text:"<code>towerOfHanoi(3, ...)</code> should return 7 moves.",testString:"assert(res3.length === 7, '<code>towerOfHanoi(3, ...)</code> should return 7 moves.');"},{text:"<code>towerOfHanoi(3, 'A', 'B', 'C')</code> should return [['A','B'],['A','C'],['B','C'],['A','B'],['C','A'],['C','B'],['A','B']].\")",testString:"assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves, \"<code>towerOfHanoi(3, 'A', 'B', 'C')</code> should return [['A','B'],['A','C'],['B','C'],['A','B'],['C','A'],['C','B'],['A','B']].\");"},{text:'<code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.',testString:"assert.deepEqual(res5[9], ['Y', 'X'], '<code>towerOfHanoi(5, \"X\", \"Y\", \"Z\")</code> 10th move should be Y -> X.');"},{text:"<code>towerOfHanoi(7, 'A', 'B', 'C')</code> first ten moves are [['A','B'],['A','C'],['B','C'],['A','B'],['C','A'],['C','B'],['A','B'],['A','C'],['B','C'],['B','A']].\")",testString:"assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves, \"<code>towerOfHanoi(7, 'A', 'B', 'C')</code> first ten moves are [['A','B'],['A','C'],['B','C'],['A','B'],['C','A'],['C','B'],['A','B'],['A','C'],['B','C'],['B','A']].\");"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function towerOfHanoi (n, a, b, c) {\n  // Good luck!\n  return [[]];\n}",head:"",tail:"const res3 = towerOfHanoi(3, 'A', 'B', 'C');\nconst res3Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']];\nconst res5 = towerOfHanoi(5, 'X', 'Y', 'Z');\nconst res7First10Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A']];"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/rosetta-code/vector-cross-product",id:"5951ed8945deab770972ae56"},slug:"/coding-interview-prep/rosetta-code/towers-of-hanoi"}}}});
//# sourceMappingURL=path---coding-interview-prep-rosetta-code-towers-of-hanoi-c45b6e82f57ec1cae679.js.map