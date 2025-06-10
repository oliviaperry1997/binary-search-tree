class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        this.root = null;
        this.buildTree(array);
    }

    buildTree(array) {
        for (let i = 0; i < array.length; i++) {
            const newNode = new Node(array[i]);

            if (this.root === null) {
                this.root = newNode;
                continue;
            }

            let current = this.root;

            while (true) {
                if (array[i] < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else if (array[i] > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                } else {
                    break;
                }
            }
        }
    }
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
