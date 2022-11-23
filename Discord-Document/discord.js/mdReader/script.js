var readingFile;



$("#search-dir").on("change", (e)=>{
    // https://raw.githubusercontent.com/kelp-of-truth/Discord-Document/kelp-of-truth-discord.js-document/document/
    var search_val=`https://raw.githubusercontent.com/kelp-of-truth/Discord-Document/kelp-of-truth-discord.js-document/document/${e.target.value}/README.md`;
    localStorage.setItem("readingFile", search_val);
    readingFile=search_val;
    loadReadme(search_val);
})

window.onload=()=>{
    // $("main").eq(0).css("top", `calc(1em + ${$("header").height()}px)`);
    // $(".README-nav").css("height", `calc(100vw - ${$("header").height()}px)`);
    if(localStorage.getItem("readingFile")===null){
        readingFile="https://raw.githubusercontent.com/kelp-of-truth/Discord-Document/kelp-of-truth-discord.js-document/document/README.md";
        loadReadme("https://raw.githubusercontent.com/kelp-of-truth/Discord-Document/kelp-of-truth-discord.js-document/document/README.md");
    }else{
        loadReadme(localStorage.getItem("readingFile"));
        readingFile=localStorage.getItem("readingFile");
    }
}
window.onresize=()=>{
    // $("main").eq(0).css("top", `calc(1em + ${$("header").height()}px)`);
    // $(".README-nav").css("height", `calc(100vw - ${$("header").height()}px)`);
}

function loadReadme(val){
    fetch(val)
        .then((res)=>{
            return res.text();
        })
        .then((data)=>{
            document.getElementsByClassName("README-body")[0].innerHTML=marked.parse(data);
            writeReadmeNav();
        })
        .catch((err)=>{
            // loadReadme("https://raw.githubusercontent.com/kelp-of-truth/Discord-Document/kelp-of-truth-discord.js-document/document/404/README.md")
            console.log(err);
        });
}



function writeReadmeNav(){

    document.getElementsByClassName("README-nav")[0].innerHTML=`<h1><img src="./link.png" style="height: 1em;user-select: none;-webkit-user-drag: none;vertical-align: -5px;margin-left: 0.25em;margin-right: 0.25em;cursor: pointer;" onclick='navigator.share({title:Discord.js-Japanese-Document,url:"https://kelp-of-truth.github.io/Discord-Document/discord.js/mdReader?path=${readingFile}"});' title="${readingFile}">${document.getElementsByClassName("README-body")[0].querySelectorAll("h1")[0].id}</h1><ul></ul>`;
    for(let index of document.getElementsByClassName("README-body")[0].querySelectorAll("h2")){
        document.getElementsByClassName("README-nav")[0].querySelectorAll("ul")[0].innerHTML+=`<li><a href="#${index.id}" style="display: inline-block;">${index.id}</a></li>`;
    }
}

navigator.share()