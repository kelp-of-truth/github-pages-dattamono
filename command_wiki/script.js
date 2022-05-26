// エレメント取得
const block_ = document.getElementById('block_');
const blocks_ = document.getElementById('blocks_');
const _block = document.getElementById('_block');
const _blocks = document.getElementById('_blocks');
const all_ = document.getElementById('all_');
const masked_ = document.getElementById('masked_');
const _all = document.getElementById('_all');
const _masked = document.getElementById('_masked');

// イベント
// select
block_.onmouseover=()=>{
    _block.style.backgroundColor = 'yellow';
};
block_.onmouseout=()=>{
    _block.style.backgroundColor = 'unset';
};

blocks_.onmouseover=()=>{
    _blocks.style.backgroundColor = 'yellow';
};
blocks_.onmouseout=()=>{
    _blocks.style.backgroundColor = 'unset';
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
