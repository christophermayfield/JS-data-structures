/* Hash Tables */ 

var hasn = (string, max) => {
    var has = 0;
    for(var i = 0; i < string.length; i++) {
        hast+= string.charCode(i); //adding the character codes for each character in the string. 
    }
    return has % max; //divide by the number of buckets and return the remainder.
};

