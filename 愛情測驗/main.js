$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;
    //當按下按鈕後，要做的事情
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            //設定目前作答從第0題開始
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項區清空
            $("#options").empty();
            //將選項逐個加入
            $("#startButton").empty();
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            $("startButton").attr("value","Next");
            
        }else{
            //已經開始了
            //哪一個選項被選取了
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //已經要通往最終結果了(A~D)
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        // $("#startButton").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br></br>`);
                        currentQuiz = null;
                        $("#startButton").attr('value','重新開始');
                    }else{
                        //正常跳下一題(原始資料為紙本資料，需轉成程式可判讀的方式-1對照JS陣列)
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        // $("#startButton").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                        $("#startButton").attr("value","Next");
                    }
                    return false;
                }
            });
        }

    })
})