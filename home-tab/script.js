var open_edit=false;
var onEnter=false;

$("#edit-home").on("click", ()=>{
    $("#edit-body").attr("hidden", false);
    $("#edit-json").val(JSON.stringify(home_data, null, 2))
})
$("#cancel-edit").on("click", ()=>{
    $("#edit-body").attr("hidden", true);
})
$("#done-edit").on("click", ()=>{
    home_data=JSON.parse($("#edit-json").val());
    localStorage.setItem("home_data", JSON.stringify(home_data));
    $("#edit-body").attr("hidden", true);
    reload_home();
})

$("#search-content").on("keydown", (e)=>{
    if(e.key==="Enter"){
        // alert(`${String(JSON.parse(home_data).search.search-engine.url).replace(/%s/g, $("#search-content").val()) }`)
        window.location.href=`${String(home_data.search.search_engine.url).replace(/%s/g, $("#search-content").val()) }`;
    };
})


var shortcuts=[];
// addShortcut("Youtube", "https://youtube.com");
function addShortcut(name, url, type){
    shortcuts[shortcuts.length]=document.createElement('a');
    const theShortcut=shortcuts[shortcuts.length-1];
    theShortcut.href=url;
    theShortcut.title=name;
    theShortcut.target="_self";
    if(home_data.shortcut.newtab===true){
        theShortcut.target="_blank";
    }
    theShortcut.innerHTML=`<img class="shortcut-icon" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=${url}">`;
    document.getElementById('shortcuts').appendChild(theShortcut);
    
    if(type==="input"){
        theShortcut.onclick=()=>{
            var word=prompt(`${name}で検索`);
            if(word!==null){
                var click_a=document.createElement('a');
                click_a.href=`${String(theShortcut.href).replace(/%s/g, word)}`;
                click_a.click();
                click_a.remove();
            };
            return false;
        }
    }
}




/**
 * home edit
 */
var home_data={
    "background":{
        "type":"color",
        "color":"white",
        "url":""
    },
    "font_color":"black",
    "search":{
        "display":true,
        "search_engine":{
            "name":"Google",
            "url":"https://google.com/search?q=%s"
        }
    },
    "shortcut":{
        "display":true,
        "newtab":false,
        "shortcuts":[
            {
                "type":"input",
                "name":"Youtube",
                "url":"https://youtube.com"
            },
            {
                "type":"https://www.netflix.com/jp/",
                "name":"Netflix",
                "url":"https://www.netflix.com/jp/"
            }
        ]
    }
}

function reload_home(){
    $("#search-content").attr("placeholder", `${home_data.search.search_engine.name}で検索`);
    if(home_data.background.type==="color"){
        document.body.style.backgroundColor=`${home_data.background.color}`;
        document.body.style.color=home_data.font_color;
        $("input").css("color", home_data.font_color)
    }else
    if(home_data.background.type==="image"){
        document.body.style.backgroundImage=`${home_data.background.url}`;
    };
    shortcuts=[];
    var n=document.getElementById('shortcuts').children.length;
    for(let i=0;i<n;i++){
        document.getElementById('shortcuts').children[i].hidden=true;
    };
    for(let i=0;i<home_data.shortcut.shortcuts.length;i++){
        addShortcut(home_data.shortcut.shortcuts[i].name, home_data.shortcut.shortcuts[i].url, home_data.shortcut.shortcuts[i].type);
    };
}


window.onload=()=>{

    if(localStorage.getItem("home_data")!==null){
        home_data=JSON.parse(localStorage.getItem("home_data"));
    };
    reload_home();
}
const load_homejson=document.getElementById('choose-jsonfile')
load_homejson.onchange=(evt)=>{
    var file = evt.target.files;

    //FileReaderの作成
    var reader = new FileReader();
    //テキスト形式で読み込む
    reader.readAsText(file[0]);
    
    //読込終了後の処理
    reader.onload = function(ev){
      //テキストエリアに表示する
      $($("#edit-json").val(reader.result));
    }
}

setInterval(() => {
    $("#shortcuts").css("top", `${(document.querySelectorAll("header")[0].clientHeight+64)*2}px`)
}, 1);