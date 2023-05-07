const date=new Date();

$("#tweetBtn").on("click",()=>{
    var apiData={};

    var link=String($("#content").val());

    if(link.search(/https:\/\/www.youtube.com\/watch/g)!==-1||link.search(/https:\/\/youtube.com\/watch/g)!==-1){
        var youtubeURL=new URL(link);
        var params=new URLSearchParams(youtubeURL.search);
        var url;
        var data=[];
        const youtubeID=getParam("v");
    
    
        function getParam(name){
            if(params.get(name)!=null){
                return params.get(name);
            }else{
                return "";
            }
        }
    
    
            fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${youtubeID}&key=AIzaSyCYXe_ZDaVTG31H9ZVjHa_5auz_NWqeKYI`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                // console.log(data)
                // console.log(data.items[0].statistics.likeCount)
                url=`https:\/\/twitter.com\/intent\/tweet?url=${link}&text=視聴回数：${fixNum(Number(data.items[0].statistics.viewCount))}回%0D%0A👍高評価：${fixNum(Number(data.items[0].statistics.likeCount))}%0D%0A💬コメント：${data.items[0].statistics.commentCount}件%0D%0A投稿日：${String(data.items[0].snippet.publishedAt).replace(/-/g,"/").replace(/T/g,"　").replace(/Z/g,"")} %0D%0A%0D%0Aデータ取得時刻：${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}　${date.getHours()}:${date.getMinutes()}`;
                window.location.href=String(url);
                // console.log(url)
                // console.log(apiData)
                // console.log(apiData.items[0].snippet.title)
            })
            .catch((err)=>{
                console.log(err);
                alert("URLが正しくありません");
            });
    



    }else{
        alert("URLが正しくありません");
    }
})



function fixNum(val){
    if(val>=10000&&val<100000000){
        return `${(val-(val%10000))/10000}万`
    }else
    if(val>=100000000&&val<1000000000000){
        return `${(val-(val%100000000))/100000000}億`
    }else{
        return val;
    }
}