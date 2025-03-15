class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }   
}

function getHeight(node: TreeNode | null): number {
    if (node === null) {
        return 0;
    } else {
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

function getBalance(node: TreeNode | null): number {
    if (node === null) {
        return 0;
    }
    return getHeight(node.left) - getHeight(node.right);
}

function updateHeight(node: TreeNode): void {
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function rightRotate(y: TreeNode): TreeNode {
    const x = y.left!;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    updateHeight(y);
    updateHeight(x);

    return x;
}

function leftRotate(x: TreeNode): TreeNode {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    updateHeight(x);
    updateHeight(y);

    return y;
}

function insert(node: TreeNode | null, value: number): TreeNode {
    if (node === null) {
        return new TreeNode(value);
    }
    if (value <= node.value) {
        node.left = insert(node.left, value);
    } else {
        node.right = insert(node.right, value);
    }

    updateHeight(node);

    const balance = getBalance(node);

    if (balance > 1 && value < node.left!.value) {
        return rightRotate(node);
    }
    if (balance > 1 && value > node.left!.value) {
        node.left = leftRotate(node.left!);
        return rightRotate(node);
    }
    if (balance < -1 && value > node.right!.value) {
        return leftRotate(node);
    }
    if (balance < -1 && value < node.right!.value) {
        node.right = rightRotate(node.right!);
        return leftRotate(node);
    }

    return node;
}

function printTree(node: TreeNode | null, level: number = 0, prefix: string = ""): void {
    if (node === null) {
        console.log(`${"  ".repeat(level)}${prefix}null`);
        return;
    }

    console.log(`${"  ".repeat(level)}${prefix}${node.value} (height: ${node.height})`);
    printTree(node.left, level + 1, "L---- ");
    printTree(node.right, level + 1, "R---- ");
}

export { TreeNode, getHeight, insert, printTree };