# getMyKeys
returns an Object with the keys needed, from a nested object or from an array of nested objects

Params: 

 1st argument should be any object or set of objects packed in an array.
 
 2nd argument: should be the name of a key to be found in an array or multiple key names packed in an array.
 
 
 Algorithmic Behavior: 
 
   The function creates an empty object to return;
   
   Another function called 'GetMyKeysInner' iterates over every object TYPE found in the 1st param, and searches for any key present matching from the second param.
   
   If any is found, it is added to the returing object.
   
   If any duplicate key is found..  the value is returned in the form of an array..  
   
   run the test.js for further clearification
   
   https://jsfiddle.net/t08sq56c/
   
   
   node Module Comming Soon.
