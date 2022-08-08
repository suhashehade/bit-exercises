class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value){

        if(this.value === value){
            return true
        }
        
        if(value < this.value && this.leftChild !== undefined){
            return this.leftChild.findNode(value)
        }
        
        if(value > this.value && this.rightChild !== undefined){
            return this.rightChild.findNode(value)
        }

        return false
        
    }

}

const bSTree = new BSNode()
const letters = ["H", "E", "S", "G", "L", "Y", "I"]

for(let letter of letters){
   bSTree.insertNode(letter)
}

console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F"));  // should print false
console.log(bSTree.findNode("y"));  // should print false - we didn't make the tree case sensitive!