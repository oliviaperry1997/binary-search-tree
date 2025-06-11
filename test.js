import { prettyPrint, Tree } from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(tree.find(6));
prettyPrint(tree.root);

console.log(tree.height(6));
console.log(tree.depth(6));

console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());
