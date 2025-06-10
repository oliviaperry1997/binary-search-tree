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

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;

            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else if (value > current.value) {
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

    delete(value, node = this.root, parent = null) {
        if (node === null) return;

        if (value < node.value) {
            this.delete(value, node.left, node);
        } else if (value > node.value) {
            this.delete(value, node.right, node);
        } else {
            if (!node.left && !node.right) {
                if (parent === null) {
                    this.root = null;
                } else if (parent.left === node) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            } else if (node.left && !node.right) {
                if (parent === null) {
                    this.root = node.left;
                } else if (parent.left === node) {
                    parent.left = node.left;
                } else {
                    parent.right = node.left;
                }
            } else if (!node.left && node.right) {
                if (parent === null) {
                    this.root = node.right;
                } else if (parent.left === node) {
                    parent.left = node.right;
                } else {
                    parent.right = node.right;
                }
            } else {
                let successorParent = node;
                let successor = node.right;
                while (successor.left !== null) {
                    successorParent = successor;
                    successor = successor.left;
                }

                node.value = successor.value;

                if (successorParent.left === successor) {
                    successorParent.left = successor.right;
                } else {
                    successorParent.right = successor.right;
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
