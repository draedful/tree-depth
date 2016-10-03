class Node {
  constructor(node, name) {
    this._name = name;
    if (node) {
      this.parent = node;
      node.children.push(this);
    }
  }

  set parent(node) {
    this.parentNode = node;
  }

  get parent() {
    return this.parentNode;
  }

  get children() {
    if (!this.childrenArray) {
      this.childrenArray = [];
    }
    return this.childrenArray;
  }
}
const testCase = () => {
  let root = new Node();
  let lv1ch1 = new Node();
  let lv1ch2 = new Node(root);
  let lv2ch1 = new Node(lv1ch1);
  let lv3ch1 = new Node(lv2ch1);
  let lv3ch2 = new Node(lv2ch1);
  let lv3ch3 = new Node(lv2ch1);
  let lv4ch1 = new Node(lv3ch1);
  let lv4ch2 = new Node(lv3ch1);
  let lv4ch3 = new Node(lv3ch2);

  return lv3ch1;
};

var entryNode = testCase();

var getRootNode = (node) => node.parent ? node : getRootNode(node.parent);

function getMaxDepth(node, first) {
  var level = 1;
  node.children.forEach((child) => {
    level = Math.max((getMaxDepth(child) + 1), level)
  });
  return first ? level - 1 : level;
}

var depth = getMaxDepth(getRootNode(entryNode)) - 1;
// TODO реализовать алгоритм подсчета глубины дерева имея произвольный узел этого дерева.
console.log('max depth: ' + depth);
