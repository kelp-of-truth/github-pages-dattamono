$(".update").on("click",()=>{
    var input=$(".input").val();

    input=input.replace(/\//g, "").replace(/, /g, ",").replace(/~ ~ ~/g, "~~~").replace(/\^\^\^/g, "~~~").replace(/\^ \^ \^/g, "~~~");
    
    input=input.split(" ");

    if(input[0]!=="execute"){
        alert("入力値がexecuteコマンドではありません。");
        return;
    };
    var run_cmd="";

    if(input[0]==="execute"){
        run_cmd+="execute"
    }
    cmd_id(0);
    function cmd_id(i){
        run_cmd+=` as ${input[i+1]} at @s `;
        if(input[i+2]!=="~~~"){
            run_cmd+=`positioned ${input[i+2]} `;
        };



        if(input[i+3]==="detect"){
            run_cmd+=`if block ${input[i+4]} ${input[i+5]} ${input[i+6]} `;
            if(input[i+7]==="execute"){
                cmd_id(i+7);
            }else{
                run_cmd+="run";
                for(let j=0;j<input.length-i-7;j++){
                    run_cmd+=` ${input[i+j+7]}`;
                }
            };
        }else if(input[i+3]==="execute"){
            cmd_id(i+3);
        }else{
            run_cmd+="run"
            for(let j=0;j<input.length-i-3;j++){
                run_cmd+=` ${input[i+j+3]}`;
            };
        };
    };
    if(document.getElementById("slash_op").checked===true){
        run_cmd="/"+run_cmd;
    }
    $(".output").val(run_cmd);
})



$(".copy_btn").on("click", (e)=>{
    $(".copyed").css("top", `${e.pageY-32}px`);
    $(".copyed").css("left", `${e.pageX}px`);
    $(".copyed").css("opacity", 1);
    $(".copy_btn").css("pointer-events", "none");
    setTimeout(() => {
        $(".copyed").css("opacity", 0);
        $(".copy_btn").css("pointer-events", "all");
    }, 1000);

    navigator.clipboard.writeText($(".output").val());
})
$(".clear_all").on("click", ()=>{
    $(".input").val("");
    $(".output").val("");
})
