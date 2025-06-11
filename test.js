import { prettyPrint, Tree } from "./tree.js";

function randomArr(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

const tree = new Tree(randomArr(31));

prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.preOrder((node) => {
    console.log(node.value);
});
console.log("")

tree.postOrder((node) => {
    console.log(node.value);
});
console.log("")

tree.inOrder((node) => {
    console.log(node.value);
});

tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
tree.insert(Math.floor(1 / (Math.random() / 100)));
prettyPrint(tree.root)
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root)
console.log(tree.isBalanced());

tree.preOrder((node) => {
    console.log(node.value);
});
console.log("")

tree.postOrder((node) => {
    console.log(node.value);
});
console.log("")

tree.inOrder((node) => {
    console.log(node.value);
});
