let topic =[
    "尚未開學",
    "國定假日",
    "還就準備",
    "隨機性",
    "重複性"
];
let startDate = new Date(); // 變成日期格式的意思
function setMonthAndDay(starMonth,starDay){
    startDate.setMonth(starMonth-1,starDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
 //一次設定好月份跟日期   
}

setMonthAndDay(2,21);

