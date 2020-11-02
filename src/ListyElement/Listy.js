
/**
 * Listy
 * 
 * @class
 * @classdesc Listy holds items in an array and provides some conveniency methods, including a sort by nth character
 */
export default class Listy {

    /**
    * @Constructor
    * 
    */
    constructor() {
        this._theArray = [];    

    }

    /**
    * list     Returns the inner storage array for the Listy.
    * @type {Array}
    */
    get list() {
        return this._theArray;
    }
 
    /**
    * addItem()     Adds an item to the list
    * 
    */
    addItem(item) {

        console.log('Listy.addItem: ', item);

        if (typeof(item) == 'string') this._theArray.push(item);
    }

    /**
    * removeItem()     Removes an item from the list.
    * 
    * @param {number} position
    */
    removeItem(position) {
        if (this._theArray.length > position);
    }

    /**
    * parse()     Parses an incoming formated string into the list.
    * 
    * @param {string} jsString
    */
    parse(jsString) {
        // Implement take in a string and parse into the array.        
    }

    /**
    * toString()     Returns the stringfied list.
    * 
    * @returns {string}
    */
    toString() {
        return this.theArray.toString();
    }

    /**
    * sortOnCharacterPosition()     Sorts the list based on the character position passed.
    * 
    */
    sortOnCharacterPosition(position) {
        if (this._theArray)
            this._theArray.sort(this.__sortOnCharacterPosition(position));
    }

    /**
    * reset()     Resets the list.
    * 
    */    
    reset() {
        this._theArray = [];
    }

    /*
    __sortOnCharacterPosition     Sorts an array based on the passed character position.
                                  Usage: myArray.sortOnCharacterPosition(2).
    */
    __sortOnCharacterPosition (position) {
        return (a, b) => {

            if (isNaN(position)) position = 0; // instead of error.

            // Limit position to last character of string.
            if (a.length > position) {
                a = a.charAt(position);
            } else {
                a = a.charAt(a.length - 1);
            }

            // Limit position to last character of string.
            if (b.length > position) {
                b = b.charAt(position);
            } else {
                b = b.charAt(b.length - 1);
            }

            if (a < b) return -1;
            if (a > b) return 1;

            return 0;
        };
    }

}