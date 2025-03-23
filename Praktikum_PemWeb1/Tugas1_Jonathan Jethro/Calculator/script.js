document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    
    let expression = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            
            if (value === "clear") {
                expression = "";
                display.value = "";
            } else if (value === "equals") {
                try {
                    expression = expression.replace(/\^/g, "**");
                    expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
                    expression = expression.replace(/(\d+)%/g, "($1/100)");
                    display.value = eval(expression);
                    expression = display.value;
                } catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});