function itemDetail() {
    alert("alerrrr");
}

function toggleMenu() {
    $(".following-menu-drop").toggle();
}

function changeRegion(type, region) {
    // alert(type);
    // alert(region);
    if(type == 'r1' && (region != '' || region != null)) {
        $("#region2").removeAttr("disabled");
    } 

    if(type == 'r2') {
        if (region.length > 0) {
            $("#region3").removeClass('d-none');
        } else if(region.length == 0) {
            $("#region3").addClass('d-none');
        }
    } 

}

function fileUpload() {
    $(".fileUpload").click();
}

function countChar() {
    var text = $(".textarea").val();
    var count = text.length;

    $(".comment-total").html(count);
}

$(document).on('keyup', '.textarea', function(e){
    var textarea = $(this).val();
    var count = textarea.length;
    $(".comment-total").html(count);
});

function replyCommentOpen(classNum) {
    $(".comment-edit-" + classNum).removeClass("d-none");
    $(".comment-reply-close-" + classNum).removeClass("d-none");
    $(".comment-reply-open-" + classNum).addClass("d-none");
}

function replyCommentClose(classNum) {
    $(".comment-edit-" + classNum).addClass("d-none");
    $(".comment-reply-close-" + classNum).addClass("d-none");
    $(".comment-reply-open-" + classNum).removeClass("d-none");
}

function optToggle(classNum) {
    $(".opt-" + classNum).toggle();
}

function cmtBoxToggle() {
    $(".board-main-bottom").toggle();
}

function hideNoti() {
    if($("#notiChk").prop("checked")) {
        $(".noti").addClass("d-none");
    } else {
        $(".noti").removeClass("d-none");
    }
}

function inputReset(className) {
    $("."+className).val('');
    $("."+className+"-erase-btn").addClass("d-hidden");
}

function chkInputVal(className) {
    var input = $("."+className).val();
    alert(input);

    if(input.length > 0) {
        $("."+className+"-erase-btn").removeClass("d-hidden");
    } else {
        $("."+className+"-erase-btn").addClass("d-hidden");
    }
}

$(document).on('keyup','.login-input', function(e){
    if($(".userid").val().length > 0) {
        $(".userid-erase-btn").removeClass("d-hidden");
    } else {
        $(".userid-erase-btn").addClass("d-hidden");
    }

    if($(".userpw").val().length > 0) {
        $(".userpw-erase-btn").removeClass("d-hidden");
    } else {
        $(".userpw-erase-btn").addClass("d-hidden");
    }
});
