
document.getElementById("clear").addEventListener("click",function(){


    // clear section
    const target = document.getElementById("added-section")
    
    target.innerText = ""

    navigator.clipboard.writeText("copied")

})



document.getElementById("call").addEventListener("click",function(e){


    // copied condition
    if(e.target.innerText =="Copy"){
        

        const copy = document.getElementById("copy")
        
        const convertCopy = parseInt(copy.innerText)

        copy.innerText = convertCopy+1;

        const storeNum = e.target.parentNode.parentNode.querySelectorAll("#valu1")[1].innerText;

        navigator.clipboard.writeText(storeNum)

        alert(`Number copied ${storeNum}`)

    }
    

    
    // heart  count
        const heart = document.getElementById("heart")
        const convertHeart = parseInt(heart.innerText)
 
    if(e.target.nodeName =="I"){
        
        heart.innerText = convertHeart+1;

       
    }


    // coin checking
       const coin = document.getElementById("coin")
    const convertCoin = parseInt(coin.innerText)
    
    const countCoin = convertCoin-20




    if(e.target.innerText =="Call"){ 


    //    condition
        if(countCoin>=0){


        coin.innerText = countCoin;

      

        const test = e.target.parentNode.parentNode;



        const addedSection = document.getElementById("added-section")
        
        const valu1 = test.querySelectorAll("#valu1")[0].innerText;
        const valu2 = test.querySelectorAll("#valu1")[1].innerText;



    


                //alert box 
                
            alert(`Calling ${valu1} ${valu2}`)

         




                // get time 


        const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();




        // creating histories div

        const div = document.createElement("div")

        div.innerHTML = `<div class="bg-[#fafafa] w-[95%] mx-auto p-3 rounded-xl mt-3 flex md:justify-between max-sm:flex-col items-center">
                        <div class="md:w-[60%]">
                            <h1 class="font-bold">${valu1}</h1>
                            <h1>${valu2}</h1>
                        </div>

                        <h1 class="max-sm:mt-5">${hours}:${minutes}:${seconds} AM</h1>

                    </div>`
       





// add to section part

 addedSection.appendChild(div)
        
// end
            
        }

        else{
            alert("You don't have sufficient coin.You nedd 20 coin to make a call")
        }
    }

    




        // coin part

        
        
    })