/* Hash Tables */ 

var hash = (string, max) => {
    var hash = 0;
    for(var i = 0; i < string.length; i++) {
        hast+= string.charCode(i); //adding the character codes for each character in the string. 
    }
    return has % max; //divide by the number of buckets and return the remainder.
};

let HashTable = function(){
    let storage = [];
    const storageLimit = 4;
    
    this.print = function() {
        console.log(storage);
    }
    
    this.add = function(key, value) {
        var index = hash(key, storageLimit) 
        if(storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
        }
    }
}