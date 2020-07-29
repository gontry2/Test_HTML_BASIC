function call_ajax() {
    // if(event.keyCode == 13){
        $.ajax({
            async : true, //비동기 방식 호출
            url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
            data : { "key" : "455939c85db1448ab4485ed5578847d0",
                    "targetDt" : $("input[type=date]").val().replace(/-/g,"") },
            type : "GET",
            timeout : 3000,
            dataType : "json", // 결과 JSON을 JavaScript 객체로 변환.
            success : function (result) {
                console.log(result)
                $("tbody").empty()
                result = result.boxOfficeResult.dailyBoxOfficeList
                $.each(result, function (idx, item) {
                    var tr = $("<tr></tr>") // <tr></tr>
                    var rankTd = $("<td></td>").text(result[idx].rank) // <tr></tr>
                    var imgTd = $("<td></td>") // <td></td>

                    // var imageUrl = ""
                    $.ajax({
                        async : true, //비동기 방식 호출
                        url : "https://dapi.kakao.com/v2/search/image",
                        headers : { "Authorization": "KakaoAK a9e587e3a5eb5d0569ccffcc656b0663"},
                        data : { "query" : item.movieNm + " 포스터"},
                        type : "GET",
                        timeout : 3000,
                        dataType : "json", // 결과 JSON을 JavaScript 객체로 변환.
                        success : function (result) {
                            // console.log(result)
                            var imageUrl = result.documents[0].thumbnail_url
                            var img = $("<img />").attr("src", imageUrl).css("width", "100px")
                            imgTd.append(img)
                        },
                        error: function (error){
                            alert("이미지 호출 실패")
                        }
                    })



                    var nameTd = $("<td></td>").text(result[idx].movieNm) // <td></td>
                    var salesAccTd = $("<td></td>").text(numberWithCommas(result[idx].salesAcc)) // <td></td>
                    var audiAccTd = $("<td></td>").text(numberWithCommas(result[idx].audiAcc)) // <td></td>
                    // var movieCdHidden = $("<input />").attr("type", "hidden").attr("value", result[idx].movieCd)


                    var detailTd = $("<td></td>")
                    var detailBtn = $("<input />").attr("type","button").attr("value","상세정보")
                    detailBtn.on("click", function(){
                        // console.log(item)
                        // var tr = $(this).parent().parent()
                        // var td = tr.children()
                        // var movieCd = td.eq(6).val()
                        var movieCd = item.movieCd

                        $.ajax({
                            async : true,
                            url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                            data : {
                                "key" : "455939c85db1448ab4485ed5578847d0",
                                "movieCd" : movieCd
                            },
                            type : "GET",
                            timeout: 3000,
                            dataType: "json",
                            success : function (result) {
                                result = result.movieInfoResult.movieInfo
                                // console.log(result)
                                var genres = ""
                                $.each(result.genres, function (idx, item) {
                                    if (genres) {
                                        genres = genres + ", " + result.genres[idx].genreNm
                                    } else {
                                        genres = result.genres[idx].genreNm
                                    }
                                })

                                var actors = ""
                                $.each(result.actors, function (idx, item) {
                                    if (actors) {
                                        actors = actors + ", " + result.actors[idx].peopleNm
                                    } else {
                                        actors = result.actors[idx].peopleNm
                                    }
                                })

                                // console.log(result)
                                if (actors && result.directors[0]) {
                                    alert("영화제목: " + result.movieNm + "\n" + "제작연도: " + result.prdtYear + "\n" + "영화장르: " + genres + "\n" + "감독명: " + result.directors[0].peopleNm + "\n" + "배우명: " + actors)
                                }else if (result.directors[0]){
                                    alert("영화제목: " + result.movieNm + "\n" + "제작연도: " + result.prdtYear + "\n" + "영화장르: " + genres + "\n" + "감독명: " + result.directors[0].peopleNm )
                                }else{
                                    alert("영화제목: " + result.movieNm + "\n" + "제작연도: " + result.prdtYear + "\n" + "영화장르: " + genres )
                                }
                            },
                            error : function (error){
                                alert("영화상세정보 서버 호출 실패")
                            }
                        })
                    })

                    detailTd.append(detailBtn)

                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(nameTd)
                    tr.append(salesAccTd)
                    tr.append(audiAccTd)
                    tr.append(detailTd)
                    // tr.append(movieCdHidden)

                    $("tbody").append(tr)
                })


            },
            error : function (error) {
                alert("서버호출 실패")
            },

        })
    // }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
