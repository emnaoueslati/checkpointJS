var x=document.getElementById("click");
function px(){
    x.style.fontSize= document.getElementById("select").value;   
}
function bold()
{
    if(x.style.fontWeight=="normal")
    {
        x.style.fontWeight="bold";
    }else{
        x.style.fontWeight="normal";
    }
}
function italic()
{
     if(x.style.fontStyle=="normal")
    {
        x.style.fontStyle="italic";
    }else{
            x.style.fontStyle="normal";       
    }
}
function under()
{
    if(x.style.textDecoration=="none")
    {
        x.style.textDecoration="underline";
    }else{
        x.style.textDecoration="none";
    }
}
var y=document.getElementById("hp");
function px1(){
    x.style.fontFamily=y.value;
}

