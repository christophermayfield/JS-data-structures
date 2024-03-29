/* Hash Tables */ 

//simple hash function
var hash = (string, max) => {
    var hash = 0;
    for(var i = 0; i < string.length; i++) {
        hast+= string.charCode(i); //adding the character codes for each character in the string. 
    }
    return has % max; //divide by the number of buckets and return the remainder.
};

//creating the hashtable

let HashTable = function(){
    let storage = [];
    const storageLimit = 4;
    
    this.print = function() {
        console.log(storage);
    };
    
    //adds the value to it 
    term
    this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };
    
    //removes the variable
    
    this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };
    
  
    //allows you to look up what's in the hash
    this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};


console.log(hash('chris', 10))

let ht = new HashTable();
ht.add('karina', 'person');
ht.add('dyson', 'cat');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();
    
}