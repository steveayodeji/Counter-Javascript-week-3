const result = document.getElementById("result");
const add = document.getElementById("add");
const lower = document.getElementById("lower");
		
    var COUNTER = 0;
add.addEventListener("click", () => {
    if(COUNTER <= 49){
    COUNTER += 1;
    result.innerHTML = COUNTER;
    } 
});

lower.addEventListener("click", () => {
    if(COUNTER >= 1){
    COUNTER -= 1;
    result.innerHTML = COUNTER; 
    
}

})
