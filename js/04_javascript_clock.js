function start_clock() {
    //alert("버튼이 클릭!")
    // 현재시간을 구하기
    // 현재 날짜의 시분초를 구하기
    // 이 시간을 HTML 특정영역에 출력
    // 현재시간을 구하고, 매초마다 다시 찍기
    // HTML의 특정 위치를 지정!
    // my_div.innerText = today.toLocaleString()
    setInterval(function () {
        var today = new Date() //날짜 객체 생성
        // console.log(today.toLocaleString())
        var my_div = document.getElementById("myDiv")
        my_div.innerText = today.toLocaleString()
    }, 1000)
}