function calculate(){
    expression = document.getElementById("expression").value;
    if (expression) {
        try {
            solution = math.evaluate(expression)
            document.getElementById("expression").value = solution
            
        } catch (error) {
            alert("bad expression")
        }
    }
    
    
}
function initialze_app(){
    calculate_button = document.getElementById("calculate")
    calculate_button.addEventListener("click",calculate)
}