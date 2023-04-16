const display = document.getElementById("display")
const clr = document.getElementById("clear")
const cal = document.getElementById("cal")
const num = document.getElementsByClassName("num")

var val = ""


function clr_displayplay(){
    val = ""
    display.value = "";
}
clr.addEventListener("click", clr_displayplay)


function calculation(event){
    display.value = eval(val)
    val = display.value
}
cal.addEventListener("click", calculation)


function concat_num(event){
    if(val.length == 0)
    {
        if(event.target.innerText != "*" || event.target.innerText != "/" || event.target.innerText != "+" || event.target.innerText != "-")
            val += event.target.innerText;
    }
    else{
        if(val[val.length - 1] == '*' || val[val.length - 1] == '/'  || val[val.length - 1] == '+'  || val[val.length - 1] == '-')
        {
            if(event.target.innerText != "*" && event.target.innerText != "/" && event.target.innerText != "+" && event.target.innerText != "-")
            {
                val += event.target.innerText;
            }
        }
        else{
            val += event.target.innerText;
        }
    }

    display.value = val
}
for(let i = 0; i < num.length; i++)
{
    num[i].addEventListener("click", concat_num)
}


