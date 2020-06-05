function InputValu() {
    var valu = $("#htmlinput").val();

    $("#htmloutput").html(valu);
}

function RemoveValue() {

    $("#htmloutput").html("");

}


$(".execute-code").click(function() {
    InputValu();
});
$(".Remove-code").click(function() {
    $("#htmlinput").val("");
    RemoveValue();
});