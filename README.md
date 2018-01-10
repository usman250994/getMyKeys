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
   
   https://jsfiddle.net/t08sq56c/13/
   
   
   node Module Comming Soon.
   
   EXAMPLE:

  input params 1; Array Of Objects 
 [
 
  {  k1: 'KEY1', k2: 'KEY1', k3: 'KEY2' } 
  
  
  {  k4: 'KEY4', k5: 'KEY5', k6: 'KEY6' }
  
  
  {  k7: 'KEY7', k8: 'KEY8', k9: 'KEY9' }
  
  
  {  k10: 'KEY10', k11: 'KEY11', k12: { k13: 'Key13', k14: 'Key14', k1: 'Key15'}   }
  
  
    ]
    
    
 input params 2; Array of Required Keys


    [ 'key1', 'Key5', 'Key9' ]


output object: (Returned)


 { 
 
   key1 : [ KEY1, Key15],
   
   key5 :  KEY5,
   
   key9 :  KEY9
   
 }

