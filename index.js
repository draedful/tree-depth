class Node {
  constructor(node) {
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
  var root = new Node(),
    node = root,
    i;

  // генерация 3 веток дерева

  for(i = 10; i >= 0; i--) {
    node = new Node(node);
  }

  node = root;

  for(i = 20; i >= 0; i--) {
    node = new Node(node);
  }

  node = root;
  
  for(i = 30; i >= 0; i--) {
    node = new Node(node);
  }

  // отдаем последнюю ветку 3-ей ветки
  return node;
};

var entryNode = testCase();

/**
 * @param {Node} node
 *
 * @return {Node} - родительское дерево
 * */
const getRootNode = (node) => node.parent ? getRootNode(node.parent) : node;


/**
 * @param {Node} node - узел или дерево
 *
 * @return {number} - глубина узла, учиитывая сам узел. Т.е глубина + 1
 * */
function getMaxDepth(node) {
  var level = 0;
  if(node.children.length) {
    node.children.forEach( (child) => level = Math.max((getMaxDepth(child) + 1), level) );
  }
  return level;
}

var max = getMaxDepth(getRootNode(entryNode));

console.log('max depth: ' + max);
