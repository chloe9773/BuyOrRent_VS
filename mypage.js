$(document).ready(function(){
    $(document).on("click", ".modify-btn", function() {
        var subTitleDict = {};
        subTitleDict["profile"] = "대표 프로필과 별명을 수정 하실 수 있습니다.";
        subTitleDict["contact"] = ["님의 연락처 정보입니다.", "회원님의 명백한 동의 없이 공개 또는 제 3자에게 제공되지 않습니다."];
        subTitleDict["manage-sale"] = "님의 거래 내역입니다.";
        subTitleDict["manage-article"] = "님의 게시글 내역입니다.";

        var targid = $(this).attr("id");
        var newSectionWrap = "";

        newSectionWrap += "<div id='section-wrap' class='section-wrap w-50 m-center p-30'>";
            newSectionWrap += "<div class='section-top-wrap mb-30'>";
                newSectionWrap += "<div class='section-titles font-20 weight-700 mb-10'>";
                    newSectionWrap += "<span class='section-type mr-5'>" + $("#"+targid+"-title").text() + "</span>";
                    newSectionWrap += "<span class='section-sub-title'>수정</span>";
                newSectionWrap += "</div>";
                newSectionWrap += "<div class='section-sub-title font-12 icon-color'>";
                    if(targid != "contact") {
                        newSectionWrap += "<span class='section-type mr-5'>" + subTitleDict[targid] + "</span>";
                    } else {
                        for(i = 0; i < subTitleDict[targid].length; i++) {
                            if(i == 0) {
                                newSectionWrap += "<span class='section-type mr-5 d-block'>";
                                newSectionWrap += "<span class='userid weight-700 highlight'></span>";
                                newSectionWrap += subTitleDict[targid][i] + "</span>";
                            } else {
                                newSectionWrap += "<span class='section-type mr-5 d-block'>";
                                newSectionWrap += subTitleDict[targid][i];
                                newSectionWrap += "</span>";
                            }
                        } 
                    }
                newSectionWrap += "</div>";
            newSectionWrap += "</div>";
            newSectionWrap += "<div class='section-bottom-wrap'>";
                    switch(targid) {
                        case "profile" :
                            newSectionWrap += "<div class='content-table'>";
                                newSectionWrap += "<table>";
                                    newSectionWrap += "<tr>";
                                        newSectionWrap += "<td class='content-table-head'>프로필 사진</td>";
                                        newSectionWrap += "<td>";
                                            newSectionWrap += "<div class='profile-modi-wrap'>";
                                                newSectionWrap += "<div class='img-wrap'>";
                                                    newSectionWrap += "<img id='profile-img' src=''/>";
                                                newSectionWrap += '</div>';
                                                newSectionWrap += "<div class='profile-btn-grp d-flex'>";
                                                    newSectionWrap += "<button>사진변경</button>"
                                                    newSectionWrap += "<button>삭제</button>"
                                                newSectionWrap += "</div>";
                                            newSectionWrap += "</div>";
                                        newSectionWrap += "</td>";
                                    newSectionWrap += "</tr>";
                                    newSectionWrap += "<tr>";
                                        newSectionWrap += "<td class='content-table-head'>별명</td>";
                                        newSectionWrap += "<td class='table-input-wrap'>";
                                            newSectionWrap += "<input id='nickname-input' class='table-input' value=''/>";
                                        newSectionWrap += "</td>";
                                    newSectionWrap += "</tr>";
                                newSectionWrap += "</table>";
                            newSectionWrap += "</div>";
                            break;
                        case "contact" :
                            break;
                        default:
                            break;
                    }
            newSectionWrap += "</div>";
        newSectionWrap += "</div>";

        $("#main-content").removeClass("bg-g");
        $("#main-content").addClass("bg-white");
        $("#main-content").html(newSectionWrap);
    });
});