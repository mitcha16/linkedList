function Node(data,next) {
   this.data = data;
   this.next = next;
}

function List(node) {
   this.head = node;
}

var node3 = new Node("last node");
var node2 = new Node("second node",node3);
var node1 = new Node("first node",node2);
var list = new List(node1);

List.prototype.addNode = function(node) {
      var currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
}

List.prototype.getTail = function() {
      var currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      return currentNode
}

List.prototype.pop = function() {
   var currentNode = this.head;
    while(currentNode.next.next){
      currentNode = currentNode.next;
    }
     currentNode.next = null;
}

List.prototype.delete = function() {
  this.head = null;
};

List.prototype.count = function() {
    var currentNode = this.head;
    var count = 1;
  while(currentNode.next) {
    currentNode = currentNode.next;
    count ++;
  }
  return count;
};


list.addNode(new Node('another'))
list.pop()
console.log(list.head.next.data)
console.log(list.getTail().data)
