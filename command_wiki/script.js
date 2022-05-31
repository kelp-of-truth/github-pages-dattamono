// エレメント取得
const block_ = document.getElementById('block_');
const blocks_ = document.getElementById('blocks_');
const _block = document.getElementById('_block');
const _blocks = document.getElementById('_blocks');
const all_ = document.getElementById('all_');
const masked_ = document.getElementById('masked_');
const _all = document.getElementById('_all');
const _masked = document.getElementById('_masked');
const _data = document.getElementById('_data');
const data_ = document.getElementById('data_');
    const data_entity_ = document.getElementById('data_entity_');
    const _data_entity = document.getElementById('_data_entity');
    const data_block_ = document.getElementById('data_block_');
    const _data_block = document.getElementById('_data_block');
    const data_storage_ = document.getElementById('data_storage_');
    const _data_storage = document.getElementById('_data_storage');
const entity_ = document.getElementById('entity_');
const _entity = document.getElementById('_entity');
const dataCommandBox = document.getElementById('if_unless_command_box');
const predicate_ = document.getElementById('predicate_');
const _predicate = document.getElementById('_predicate');
const score_ = document.getElementById('score_');
const _score = document.getElementById('_score');

const a_0_ = document.getElementById('a_0_');
const a_1_ = document.getElementById('a_1_');
const a_2_ = document.getElementById('a_2_');
const a_3_ = document.getElementById('a_3_');
const a_4_ = document.getElementById('a_4_');
const _a_0 = document.getElementById('_a_0');
const _a_1 = document.getElementById('_a_1');
const _a_2 = document.getElementById('_a_2');
const _a_3 = document.getElementById('_a_3');
const _a_4 = document.getElementById('_a_4');

const zips = document.getElementsByClassName('zip');
const dataIframeReload = document.getElementById('data_iframe_reload');
const dataIframe = document.getElementById('data_iframe');

const colorMode = document.getElementById('color_mode');
const Style = document.getElementById('style');
const _Style = document.getElementById('_style');

// イベント
// select
block_.onmouseover=()=>{
    window.parent._block.style.backgroundColor = 'yellow';
};
block_.onmouseout=()=>{
    window.parent._block.style.backgroundColor = 'unset';
};

blocks_.onmouseover=()=>{
    window.parent._blocks.style.backgroundColor = 'yellow';
};
blocks_.onmouseout=()=>{
    window.parent._blocks.style.backgroundColor = 'unset';
};

all_.onmouseover=()=>{
    _all.style.backgroundColor = 'yellow';
};
masked_.onmouseover=()=>{
    _masked.style.backgroundColor = 'yellow';
};
all_.onmouseout=()=>{
    _all.style.backgroundColor = 'unset';
};
masked_.onmouseout=()=>{
    _masked.style.backgroundColor = 'unset';
};
data_.onmouseover=()=>{
    window.parent._data.style.backgroundColor = 'yellow';
};
data_.onmouseout=()=>{
    window.parent._data.style.backgroundColor = 'unset';
};
    data_entity_.onmouseover=()=>{
        _data_entity.style.backgroundColor = 'yellow';
    };
    data_entity_.onmouseout=()=>{
        _data_entity.style.backgroundColor = 'unset';
    };
    data_block_.onmouseover=()=>{
        _data_block.style.backgroundColor = 'yellow';
    };
    data_block_.onmouseout=()=>{
        _data_block.style.backgroundColor = 'unset';
    };
    data_storage_.onmouseover=()=>{
        _data_storage.style.backgroundColor = 'yellow';
    };
    data_storage_.onmouseout=()=>{
        _data_storage.style.backgroundColor = 'unset';
    };

entity_.onmouseover=(event)=>{
    window.parent._entity.style.backgroundColor = 'yellow';

};
entity_.onmouseout=()=>{
    window.parent._entity.style.backgroundColor = 'unset';
};
predicate_.onmouseover=()=>{
    window.parent._predicate.style.backgroundColor = 'yellow';
};
predicate_.onmouseout=()=>{
    window.parent._predicate.style.backgroundColor = 'unset';
};
score_.onmouseover=()=>{
    window.parent._score.style.backgroundColor = 'yellow';
};
score_.onmouseout=()=>{
    window.parent._score.style.backgroundColor = 'unset';
};


a_0_.onmouseover=()=>{
    _a_0.style.backgroundColor = 'yellow';
};
a_0_.onmouseout=()=>{
    _a_0.style.backgroundColor = 'unset';
};
a_1_.onmouseover=()=>{
    _a_1.style.backgroundColor = 'yellow';
};
a_1_.onmouseout=()=>{
    _a_1.style.backgroundColor = 'unset';
};
a_2_.onmouseover=()=>{
    _a_2.style.backgroundColor = 'yellow';
};
a_2_.onmouseout=()=>{
    _a_2.style.backgroundColor = 'unset';
};
a_3_.onmouseover=()=>{
    _a_3.style.backgroundColor = 'yellow';
};
a_3_.onmouseout=()=>{
    _a_3.style.backgroundColor = 'unset';
};
a_4_.onmouseover=()=>{
    _a_4.style.backgroundColor = 'yellow';
};
a_4_.onmouseout=()=>{
    _a_4.style.backgroundColor = 'unset';
};



dataIframeReload.onclick=()=>{

};


    // htmlからの関数
    function def(defNum){
        if(defNum==0){
            if(zip0.children[0].innerHTML=="展開"){
                zip0.children[1].hidden=false;
                zip0.children[0].innerHTML='閉じる';
            }else{
                zip0.children[1].hidden=true;
                zip0.children[0].innerHTML="展開";
            };
        };

        if(defNum==1){
            dataIframe.src='';
            dataIframe.src="./data.html";
        };

        if(defNum==2){
            if(colorMode.innerHTML=='light_mode'){
                colorMode.innerHTML="dark_mode";
                Style.href='./dark_style.css';
                dataIframe.innerHTML=String(dataIframe.innerHTML).replace(/style.css/g, 'dark_style.css');
            }else{
                colorMode.innerHTML="light_mode";
                Style.href='./style.css';
                dataIframe.innerHTML=String(dataIframe.innerHTML).replace(/dark_style.css/g, 'style.css');
            }
        };
    };
