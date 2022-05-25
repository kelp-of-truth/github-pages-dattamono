for(let i=0;i<document.querySelectorAll('tr').length;i++){
    if(i % 2 == 1){
        document.querySelectorAll('tr')[i].style.backgroundColor='wheat';
    };
};
const Youtube=document.getElementById('youtube_dayo');
function copyParticleID(n){
    var content=document.querySelectorAll('td')[n*2+1].innerHTML;
    navigator.clipboard.writeText(content);

};




const Psearch=document.getElementById('particle_search');

const searchT=document.getElementById('search_type');

Psearch.oninput=()=>{
    if(searchT.value==0){
    if(Psearch.value==''){
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
  
            for(let i=0;i<document.querySelectorAll('tr').length;i++){
                if(document.querySelectorAll('tr')[i].hidden==false){
                    document.querySelectorAll('tr')[i].classList.add('nh');
                }else{

                    document.querySelectorAll('tr')[i].classList.remove('nh');
                };
            };
            for(let i=0;i<document.getElementsByClassName('nh').length;i++){
                if(i % 2 == 1){
                    document.querySelectorAll('tr')[i].style.backgroundColor='wheat';
                };
        
            };


    }else{
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            if(String(document.querySelectorAll('td')[i*2-2].innerHTML).indexOf(String(Psearch.value))==-1){
                document.querySelectorAll('tr')[i].hidden=true;
            };
        };
    };






}else if(searchT.value==1){
    

    if(Psearch.value==''){
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
  
            for(let i=0;i<document.querySelectorAll('tr').length;i++){
                if(document.querySelectorAll('tr')[i].hidden==false){
                    document.querySelectorAll('tr')[i].classList.add('nh');
                }else{

                    document.querySelectorAll('tr')[i].classList.remove('nh');
                };
            };
            for(let i=0;i<document.getElementsByClassName('nh').length;i++){
                if(i % 2 == 1){
                    document.querySelectorAll('tr')[i].style.backgroundColor='wheat';
                };
        
            };


    }else{
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            if(String(document.querySelectorAll('td')[i*2-1].innerHTML).indexOf(String(Psearch.value))==-1){
                document.querySelectorAll('tr')[i].hidden=true;
            };
        };
    };


};
};


searchT.onchange=()=>{
    if(searchT.value==0){
    if(Psearch.value==''){
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
  
            for(let i=0;i<document.querySelectorAll('tr').length;i++){
                if(document.querySelectorAll('tr')[i].hidden==false){
                    document.querySelectorAll('tr')[i].classList.add('nh');
                }else{

                    document.querySelectorAll('tr')[i].classList.remove('nh');
                };
            };
            for(let i=0;i<document.getElementsByClassName('nh').length;i++){
                if(i % 2 == 1){
                    document.querySelectorAll('tr')[i].style.backgroundColor='wheat';
                };
        
            };


    }else{
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            if(String(document.querySelectorAll('td')[i*2-2].innerHTML).indexOf(String(Psearch.value))==-1){
                document.querySelectorAll('tr')[i].hidden=true;
            };
        };
    };






}else if(searchT.value==1){
    

    if(Psearch.value==''){
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
  
            for(let i=0;i<document.querySelectorAll('tr').length;i++){
                if(document.querySelectorAll('tr')[i].hidden==false){
                    document.querySelectorAll('tr')[i].classList.add('nh');
                }else{

                    document.querySelectorAll('tr')[i].classList.remove('nh');
                };
            };
            for(let i=0;i<document.getElementsByClassName('nh').length;i++){
                if(i % 2 == 1){
                    document.querySelectorAll('tr')[i].style.backgroundColor='wheat';
                };
        
            };


    }else{
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].hidden=false;
            };
        for(let i=1;i<document.querySelectorAll('tr').length;i++){
            if(String(document.querySelectorAll('td')[i*2-1].innerHTML).indexOf(String(Psearch.value))==-1){
                document.querySelectorAll('tr')[i].hidden=true;
            };
        };
    };


};
};


