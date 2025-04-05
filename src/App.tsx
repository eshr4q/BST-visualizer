import InputForm from './components/InputForm';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { TreeNode } from './utils/binaryTree';
import { insert} from './utils/binaryTree';
import TreeVisualization from './components/TreeVisualization';


function App() {

  const [root, setRoot] = useState<TreeNode | null>(null);
  const [target, setTarget] = useState<number | null>(null);

  return (
      <div>
      {/* Input Form Section */}
      <InputForm
        onSubmit={(array, targetNum) => {
          let newRoot: TreeNode | null = null;
          array.forEach(num => {
            newRoot = insert(newRoot, num);
          });
          setRoot(newRoot);
          setTarget(targetNum); 
          // console.log("Tree height:", getHeight(newRoot));
          // console.log("Tree structure:");
          // printTree(newRoot);
        }}
      />

      {/* Main Content Section */}
      <main className="w-250 p-1 overflow-y-auto">
        <Header />
        <TreeVisualization root={root} target={target} />
      </main>
    </div>
  );
}

export default App;