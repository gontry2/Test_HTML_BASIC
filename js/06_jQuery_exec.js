function print_text(){
    console.log($("#apple").text())
    console.log($("#pineapple").text())
    console.log($("ul > li[class=myList]").text())

    console.log($("input[type=text]").val())

    console.log($("ol > li.myList:first").text())

    console.log($("ol > li.myList:nth-child(1)").text())

    console.log($("ol > li.myList:first + li").text())

    console.log($("ol > li.myList:last").text())

    $("input[type=text]").attr("size", 10)

}

function my_func() {
    //alert("과일이 바뀌었어요.")
    // select box에서 과일이 바뀌면 실행되요!
    // 1. 선택한 과일이 어떤 과일인지 알아내야 해요.
    var selected_fruit = $("select > option:selected").text()
    var list_fruit = $("ul > li")
    list_fruit.each(function(idx, item){
        if ($(item).text() == selected_fruit){
            $(item).css("color", "red")
        } else {
            $(item).css("color", "black")
        }
    })
}