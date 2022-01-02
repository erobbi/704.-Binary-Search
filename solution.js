/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let list = [];
    let string = ""
    helper(root, list, string)
    return list
};

const helper = (node, list, string) => {
    if (node) {
        string = string + node.val;
        if (!node.left && !node.right) {list.push(string)}
        else {
            string = string + "->"
            helper(node.left, list, string)
            helper(node.right, list, string)
        }
    }
    // if (node.right) {
    //     let nodeR = node.right
    //     let strR = string + "->" + nodeR.val;
    //     helper(nodeR, list, strR)
    // }
    // if (node.left) {
    //     let nodeL = node.left;
    //     let strL = string + "->" + nodeL.val;
    //     helper(nodeL, list, strL)
    // }
}
