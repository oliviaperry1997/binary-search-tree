import { prettyPrint, Tree } from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.insert(2);
tree.insert(0);
tree.insert(-1);
tree.insert(-13);
tree.insert(-7);
tree.insert(-2);
tree.insert(-9);
tree.insert(-0.5);
tree.insert(0.5);
tree.insert(0.413);
tree.insert(0.826);
tree.insert(0.612);

tree.delete(324);
tree.delete(-13);
tree.delete(1);
tree.delete(7);

console.log(tree.find(0.826));
prettyPrint(tree.root);

tree.levelOrder((node) => {
    console.log(node.value);
});

console.log("");

tree.preOrder((node) => {
    console.log(node.value);
});

console.log("");

tree.inOrder((node) => {
    console.log(node.value);
});

console.log("");

tree.postOrder((node) => {
    console.log(node.value);
});
