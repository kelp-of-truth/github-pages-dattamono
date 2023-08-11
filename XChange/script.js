const copyBtn=document.getElementById("copyBtn");
const convertBtn=document.getElementById("convertBtn");
const output=document.getElementById("output");
const input=document.getElementById("input");
const clearBtn=document.getElementById("clearOutput");

convertBtn.addEventListener("click",(e)=>{
    if(input.value!==""){
        var outputText=input.value;
        outputText=outputText.replace(/X/g,"𝕏");
        if(document.getElementById("lowerCase").checked){
            outputText=outputText.replace(/x/g,"𝕏");
        }
        if(document.getElementById("autoCopy").checked){
            navigator.clipboard.writeText(outputText);
        }
        output.value=String(outputText);
    }else{
        alert("テキスト欄に入力してください")
    }
})
copyBtn.addEventListener("click",(e)=>{
    navigator.clipboard.writeText(String(output.value));
})
clearBtn.addEventListener("click",(e)=>{
    output.value="";
    input.value="";
})