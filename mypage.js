$(document).ready(function(){
    $(document).on("click", ".modify-btn", function() {
        var targid = $(this).attr("id");
        var newSectionWrap = "";
        // alert($("#"+targid+"-title").text());

        $("#main-content").removeClass("bg-g");
        $("#main-content").addClass("bg-white");

        newSectionWrap += "<div id='section-wrap' class='section-wrap w-50 m-center p-30'>";
            newSectionWrap += "<div class='section-top-wrap>";
                newSectionWrap += "<div class='section-title'>";
                    newSectionWrap += "<span class='section-type'>" + $("#"+targid+"-title").text() + "</span>";
                    newSectionWrap += "<span class='section-sub-title'>수정</span>";
                newSectionWrap += "</div>";
            
                // switch(targid) {
                //     case "profile" : // 프로필 수정
                //         newSectionWrap +=
                // }
            newSectionWrap += "</div>";
        newSectionWrap += "</div>";
        $("#main-content").html(newSectionWrap);
    });
});