const Nav=document.getElementById('nav');

const Header=document.getElementById('_header');


Nav.onmouseover=(e)=>{
    document.querySelectorAll('nav')[0].hidden=false;
};
Nav.onmouseout=(e)=>{
    Nav.querySelectorAll('nav')[0].hidden=true;
};


const mainFrame=document.getElementById('mainFrame');
mainFrame.style.height=window.innerHeight-80+"px";

document.getElementById('mainPage').onclick=()=>{
    mainFrame.src="./main.html";
    localStorage.setItem("page", 0);
};

document.getElementById('videos').onclick=()=>{
    mainFrame.src="./videos.html";
    localStorage.setItem('page', 1);
};

document.getElementById('sites').onclick=()=>{
    mainFrame.src="./sites.html";
    localStorage.setItem("page", 3);
};





window.onload=()=>{

    // localStorage.removeItem("visited")

    var visited=localStorage.getItem('visited');

    if(visited==null){
        localStorage.setItem('visited', 1);
        localStorage.setItem("page", 0);
        mainFrame.src="./main.html";
    }else{
        var page=localStorage.getItem("page");
        if(page==0){
            mainFrame.src="./main.html";
        }else
        if(page==1){
            mainFrame.src="./videos.html";
        }else
        if(page==3){
            mainFrame.src="./sites.html";
        }
    }

};
