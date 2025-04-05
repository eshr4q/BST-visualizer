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
      <div>
      {/* Input Form Section */}
      <InputForm
        onSubmit={(array, target) => {
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

      {/* Main Content Section */}
      <main className="w-250 p-1 overflow-y-auto">
        <Header />
        <TreeVisualization root={root} />
      </main>
    </div>
  );
}

export default App;