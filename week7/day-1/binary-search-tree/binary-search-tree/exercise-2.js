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

    findCommonParent(nodeValue1, nodeValue2){
        if (this.value > nodeValue1 && 
            this.value > nodeValue2 &&
             this.leftChild.value !== nodeValue1 &&
             this.leftChild.value !== nodeValue2)
        return this.leftChild.findCommonParent(nodeValue1, nodeValue2);

        if (this.value < nodeValue1 &&
            this.value < nodeValue2 && 
            this.rightChild.value !== nodeValue1 &&
            this.rightChild.value !== nodeValue2)
            return this.rightChild.findCommonParent(nodeValue1, nodeValue2);

        return this.value;
     
        
    }

}

const bSTree = new BSNode()
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

for(let letter of letters){
   bSTree.insertNode(letter)
}

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G") );//should return "E"
console.log(bSTree.findCommonParent("B", "L")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"

