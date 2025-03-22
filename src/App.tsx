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
   

     
      <main className="w-250 m-0 p-8 bg-red-600 overflow-y-auto">
      <Header />
      
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
        {/* Binary Search Visualization goes here */}
        {/* {root && <div>Tree height: {getHeight(root)}</div>} */}
        <TreeVisualization root={root} />
      </main>
  
    
  );
}

export default App;