let array=["jazz", "Samy", "Jay", "Peter", "Jhony","Sam","Ria"];
       console.log(array);
   
           for (var i=0;i<array.length;i++) {
              
               if (array[i].charAt(0)==="j"||array[i].charAt(0)==="J") {
                   console.log("Goodbyee "+ array[i])
                    }
                    else{
                        console.log("Hello " + array[i])
                    }
               
           }