function identity(arg) {
    return arg;
}

function identity_function(arg) {
    return (
        function() {
            return arg;
        }
    )}
function add(x,y) {
    return x+y;
}

function mul(x,y) {
    return x*y;
}

function addf(x){
    return (
        function(y) {
            return x+y;
        }  ) }

function applyf(binar) {
    return (
        function(x) {
            return (
                function(y) {
                    return binar(x,y);
             }
          )
          
      }
   ) 
    
}