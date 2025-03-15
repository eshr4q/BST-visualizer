import InputForm from './components/InputForm';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { TreeNode } from './utils/binaryTree';
import { insert, getHeight } from './utils/binaryTree';
import { printTree } from './utils/binaryTree';

function App() {

  const [root, setRoot] = useState<TreeNode | null>(null);

  return (
    <div className="min-h-screen flex">
      {/* <Header /> */}
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
      }} />
      <main className="flex-grow p-4 ml-72">
        {/* Binary Search Visualization goes here */}
        {root && <div>Tree height: {getHeight(root)}</div>}
      </main>
    </div>
  );
}

export default App;