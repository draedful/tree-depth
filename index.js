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
	let root = new Node();
	let lv1ch1 = new Node(root);
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
var depth = 0;
// TODO реализовать алгоритм подсчета глубины дерева имея произвольный узел этого дерева.
while (entryNode.parent) {
	entryNode = entryNode.parent;
}
var level = entryNode.children;
while (level.length > 0) {
	let nextLevel = [];
	for (var child of level) {
		nextLevel.push(...child.children);
	}
	level = nextLevel;
	depth++;
}
console.log('max depth: ' + depth);
