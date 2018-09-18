/* Sets */
//A set is a collection of non-repeating elements

function mySet(){
    //the collection will hold the set
    var collection = [];
    
    //this method will check for the presence of values and return true or false.
    this.has = function(element){
        return (collection.indexOf(element)!== -1);
    }
    
    //this method will return the valuesDD
    this.values = function(){
        return collection;
    }
}