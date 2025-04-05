import React from 'react';
import Tree, { RawNodeDatum, TreeNodeDatum } from 'react-d3-tree';


interface AVLTreeNode {
  value: number;
  height: number;
  left: AVLTreeNode | null;
  right: AVLTreeNode | null;
}


interface TreeVisualizationProps {
  root: AVLTreeNode | null;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ root }) => {
 
  const convertToTreeData = (node: AVLTreeNode | null): RawNodeDatum | undefined => {
    if (!node) return undefined; 
    return {
      name: node.value.toString(), 
      attributes: { height: node.height }, 
      children: [
        convertToTreeData(node.left),
        convertToTreeData(node.right),
      ].filter(child => child !== undefined) as RawNodeDatum[],
    };
  };

  
  const renderCustomNodeElement = ({ nodeDatum }: { nodeDatum: TreeNodeDatum }) => (
    <g>
      <circle r={15} fill="lightblue" />
      <text fill="black" strokeWidth="0" x="0" y="5" textAnchor="middle">
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes?.height && (
        <text fill="black" strokeWidth="0" x="0" y="25" textAnchor="middle">
          h: {nodeDatum.attributes.height}
        </text>
      )}
    </g>
  );

  
  const renderTree = () => {
    const treeData = convertToTreeData(root);
    return (
      <div className="w-full h-full">
        <Tree
          data={treeData}
          orientation="vertical"
          translate={{ x: 300, y: 50 }}
          separation={{ siblings: 1, nonSiblings: 1 }}
          nodeSize={{ x: 150, y: 100 }}
          zoomable={true}
          renderCustomNodeElement={renderCustomNodeElement} 
        />
      </div>
    );
  };

  return (
    <div className="w-full h-[500px] p-1 flex items-center justify-center">
      {root ? renderTree() : (
        <div className="text-cyan-500 text-center">
          <h2>Tree Visualization Component</h2>
          <p>This will display the AVL Tree soon!</p>
        </div>
      )}
    </div>
  );
};

export default TreeVisualization;