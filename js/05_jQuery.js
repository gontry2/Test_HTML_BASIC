function my_func() {

    // alert('함수가 호출해요')
    // 0. jQuery를 공부할 때 가장먼저 배워야 하는 건 ..selector
    // 1. 전체 선택자(universal selector)
    // $("*").css("color", "red")
    // 2. 태그선택자 (tag selector)
    // $("li").remove()
    // 3. 아이디 선택자 (id selector)
    // $("#huh").css("color", "red")
    // var text = $("#huh").text() // 인자가 없으면 값을 알아 오라는 의미
    // alert(text)
    // $("#huh").text("제주") // 인자가 있으면 값을 바꾸라는 의미
    // 4. 클래스 선택자 (class selector)
    // $(".region").css("background-color", "yellow")
    // 5. 구조 선택자(자식 선택자 후손 선택자)
    // $("ul > li").css("font-size", "50px") //ul의 자식으로 있는 li
    // $("div li").css("background-color", "purple") // space는 후손인 li (자식 + 자식의 자식.. )
    // 6. 구조 선택자 (형제 선택자)
    // $("#huh + li").text("여기야!") //바로 옆에 있는 아이
    // $("#hong ~ li").text("맞아!") //hong를 찾고 hong뒤에 있는 모든 li
    // 7. 속성 선택자
    $("[id]").css("color", "red")
    $("[id=huh]").css("font-size", "50px")
    // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능

}