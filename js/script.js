// 1. 時間リアルタイム更新
function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function showClock(class_name) {
    var targets = document.getElementsByClassName(class_name);
    var now = new Date();
    var Hour = set2fig(now.getHours());
    var Min = set2fig(now.getMinutes());
    for (i=0; i < targets.length; i++){
        var target = targets[i];
        target.innerHTML = Hour + ":" + Min;
    }
}
showClock("DateTimeDisp");
setInterval('showClock()',1000);

// 2. スクロールの初期位置を一番下に設定
let target = document.getElementById('scroll');
target.scrollTo(0, target.scrollHeight);

