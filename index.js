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
	let root = new Node(null, 'root');
	let lv1ch1 = new Node(root, 'root 1 1');
	let lv1ch2 = new Node(root, 'root 1 2');
	let lv2ch1 = new Node(lv1ch1, 'root 2 1');
	let lv3ch1 = new Node(lv2ch1, 'root 2 1 1');
	let lv3ch2 = new Node(lv2ch1, 'root 2 1 2');
	let lv3ch3 = new Node(lv2ch1, 'root 2 1 3');
	let lv4ch1 = new Node(lv3ch1, 'root 2 1 1 1');
	let lv4ch2 = new Node(lv3ch1, 'root 2 1 1 2');
	let lv4ch3 = new Node(lv3ch2, 'root 2 1 2 1');

	return lv3ch1;
};

var entryNode = testCase();

function getRootNode(node) {

	if(node.parent){
		return getRootNode(node.parent);
	}

	return node;
}

function getMaxDepth(node, first) {
	var level = 1;
	if(node.children.length) {
		node.children.forEach((child) => {
			var depth = getMaxDepth(child) + 1;
			level = Math.max(depth, level);
		})
	}
	return first ? level - 1 : level;
}

var depth = getMaxDepth(getRootNode(entryNode)) - 1;
// TODO реализовать алгоритм подсчета глубины дерева имея произвольный узел этого дерева.
console.log('max depth: ' + depth);
