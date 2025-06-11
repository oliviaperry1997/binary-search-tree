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

    find(value) {
        let current = this.root;

        while (value !== current.value) {
            if (value < current.value) {
                if (current.left === null) {
                    return null;
                } else {
                    current = current.left;
                }
            }
            if (value > current.value) {
                if (current.right === null) {
                    return null;
                } else {
                    current = current.right;
                }
            }
        }

        return current;
    }

    levelOrder(callback) {
        if (!callback) throw new Error("Callback required.");

        if (!this.root) return;

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();
            callback(current);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    preOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required");

        if (!node) return;

        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
    }

    inOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required");

        if (!node) return;

        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback, node.right);
    }

    postOrder(callback, node = this.root) {
        if (!callback) throw new Error("Callback required");

        if (!node) return;

        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
    }

    height(node = this.root) {
        if (node === null) return -1;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    depth(value) {
        let current = this.root;
        let level = 0;

        while (value !== current.value) {
            if (value < current.value) {
                if (current.left === null) {
                    return null;
                } else {
                    current = current.left;
                    level++;
                }
            }
            if (value > current.value) {
                if (current.right === null) {
                    return null;
                } else {
                    current = current.right;
                    level++;
                }
            }
        }

        return level;
    }

    isBalanced(node = this.root) {
        if (node === null) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        const diff = Math.abs(leftHeight - rightHeight);

        if (diff > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    rebalance() {
        let values = [];

        this.inOrder((node) => {
            values.push(node.value);
        });

        const buildRecursive = (arr, start = 0, end = arr.length - 1) => {
            if (start > end) return null;

            const mid = Math.floor((start + end) / 2);
            const node = new Node(arr[mid]);

            node.left = buildRecursive(arr, start, mid - 1);
            node.right = buildRecursive(arr, mid + 1, end);

            return node;
        };

        this.root = buildRecursive(values);
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
