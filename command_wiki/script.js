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

const zips = document.getElementsByClassName('zip');
const dataIframeReload = document.getElementById('data_iframe_reload');
const dataIframe = document.getElementById('data_iframe');

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
    };
