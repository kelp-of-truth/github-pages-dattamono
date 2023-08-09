fetch("https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCYXe_ZDaVTG31H9ZVjHa_5auz_NWqeKYI&id=UCMOyYYlFHJmgTye4gEA7AyA&part=statistics")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    document.getElementById("subscribeCount").innerHTML=`チャンネル登録者数 ${data.items[0].statistics.subscriberCount}人`;
})
.catch((err)=>{
    document.getElementById("subscribeCount").innerHTML=`チャンネル登録者数 測定不能`;
})
fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=JI5hV6o2NJs&key=AIzaSyCYXe_ZDaVTG31H9ZVjHa_5auz_NWqeKYI")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    document.getElementById("recommendVicdeoViewCount").innerHTML=`${data.items[0].statistics.viewCount}回視聴`;
})