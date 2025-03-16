import InputForm from './components/InputForm';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { TreeNode } from './utils/binaryTree';
import { insert, getHeight } from './utils/binaryTree';
import { printTree } from './utils/binaryTree';
import TreeVisualization from './components/TreeVisualization';

function App() {

  const [root, setRoot] = useState<TreeNode | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-20">
      <InputForm onSubmit={(array, target) => {
        console.log("Received in App:", array, target);
        let newRoot: TreeNode | null = null;
        array.forEach(num => {
          newRoot = insert(newRoot, num);
        });
        setRoot(newRoot);
        console.log("Tree height:", getHeight(newRoot));
        console.log("Tree structure:");
        printTree(newRoot);
      }} 
      />
     
      <main className="flex-1 p-4 bg-red-600 overflow-y-auto">
        {/* Binary Search Visualization goes here */}
        {/* {root && <div>Tree height: {getHeight(root)}</div>} */}
        <TreeVisualization root={root} />
      </main>
      </div>
      </div>
  );
}

export default App;