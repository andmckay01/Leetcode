class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
};

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    //insert will loop over a word and add, check if node with character exists
    insert(word: string): void {
        let cur = this.root;

        for(let c of word) {
            if(!cur.children.has(c)) { //add if no child exists
                cur.children.set(c, new TrieNode())
            } 
            cur = cur.children.get(c) //update cur and move to child
        }
        //when cur is at the last character, we set this
        cur.endOfWord = true;
        
    }

    search(word: string): boolean {
        let cur = this.root;

        for(let c of word) {
            if(cur.children.has(c)) {
                cur = cur.children.get(c)
            } else {
                return false
            }
        }
        return cur.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let cur = this.root;

        //iterate through our tree
        for(let c of prefix) {
            if(cur.children.has(c)) {
                cur = cur.children.get(c)
            } else {
                return false
            }
        }

        //once done, we simply return true because we know at least one word starts with this
        return true
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */