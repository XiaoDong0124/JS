$(function(){
    //# 對id
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>");
    var topicCount=topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時，計算一天的秒數量
    let millisecsPerDay=24*60*60*1000
    //YYYY/MM/DD
    //MM/DD/YYYY
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append(
            //getTime 轉換時間型態做運算
            //toLocaleDateString轉換字串變好看
            `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5) }</td><td>${topic[x]}</td></tr>`
        );
    }
});