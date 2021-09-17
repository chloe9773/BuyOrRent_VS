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