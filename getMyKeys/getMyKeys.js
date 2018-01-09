

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