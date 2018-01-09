var ob1 = { k1:'KEY1', k2:'KEY1', k3:'KEY2'};
var ob2 = { k4:'KEY4', k5:'KEY5', k6:'KEY6'};
var ob3 = { k7:'KEY7', k8:'KEY8', k9:'KEY9'};
var ob4 = { k10:'KEY10', k11:'KEY11', k12:{ k13:'13inKey12', k14:'14inKey12', k1:'1inKey12'}};
var arr = [];
arr.push(ob1);
arr.push(ob2);
arr.push(ob3);
arr.push(ob4);
console.log(getMyKeys(arr,['k1','k5','k9']));

function getMyKeys(myObjects, myKeys) {
  if (!Array.isArray(myKeys) && typeof myKeys === 'string')  {
    myKeys = [myKeys];
    }
  var myReturningObject = {};  
   getMyKeysInner( myObjects );
  return myReturningObject;
  
  function getMyKeysInner( givenArray ) {
    if(Array.isArray(givenArray)) {

      for( var i=0; i< givenArray.length; i++ ) {
    if(Array.isArray( givenArray[i] )) {
     getMyKeysInner(givenArray[i]);
    }
    else if (typeof givenArray[i] === 'object' ) {

     iterateObject( givenArray[i] );
          }
      }  
    }
else if( typeof givenArray === 'object') {
   iterateObject( givenArray );
        } 
  }   
  
  function iterateObject( CurrentObject ) {
    for (var objectKey in CurrentObject) {
    
      for (var j=0;j<myKeys.length; j++) {
      
        if (objectKey === myKeys[j]) {
          
          if(myReturningObject[myKeys[j]]) {
           
            if( Array.isArray( myReturningObject[myKeys[j]] ) ){
               myReturningObject[myKeys[j]].push( CurrentObject[objectKey] );
               } 
               else {
                myReturningObject[myKeys[j]] = [ myReturningObject[myKeys[j]], CurrentObject[objectKey] ];
               } 
          }
         else {
                 myReturningObject[myKeys[j]] =CurrentObject[objectKey];
           
                 } 
          
        break;
        }
        
      }
      
         if ( typeof CurrentObject[objectKey] === 'object' ) {
          
           getMyKeysInner( CurrentObject[objectKey] );
        }
         
    }      
  }
} 
