$(function(){
	$("#publishBtn").click(publish);
});

function publish() {
    $("#publishModal").modal("hide");
    //获取标题和内容
    var title = $("#recipient-name").val();
    var content = $("#message-text").val();
    $.post(
        CONTEXT_PATH + "/discuss/add",
        {"title": title, "content": content},
        function (data) {
            data = $.parseJSON(data);
            //在提示框中显示返回的消息
            $("#hintBody").text(data.msg);
            //显示提示框
            $("#hintModal").modal("show");
            //2秒后消失
            setTimeout(function () {
                $("#hintModal").modal("hide");
                if (data.code == 0) {
                    window.location.reload();
                }
            }, 2000);
        }
    )
}