class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const isNodePresent = (root,ele) => {
    if(root === null) return false;
    //if(root.val == ele) return true;
    let values = [];
    let queue = [ root ];
    while(queue.length > 0){
        const rem = queue.shift();
        if(rem.val == ele) return true;
        
        if(rem.left) queue.push(rem.left);
        if(rem.right) queue.push(rem.right);
    }
    return false;
}

console.log(isNodePresent(a,'h'));