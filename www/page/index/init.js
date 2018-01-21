function init() {
    $.trumbowyg.svgPath = 'commonjs/library/editor/icons.svg';

    //alert(1);
    //app.view.current.router.navigate("/comments/?id="+1)
    var page = 2;
    ajaxGetTopicList({
        "page": 1,
        "type": $(".type").val(),
        "id": ""
    }, function(response) {
        var html = ""
        //  debugger;
        $(response.result).each(function(index, result) {
            html += renderTopicList(result)
        })
        page = 2;
        $(".topicList").append(html);
        if (response.hasNextPage == 0) {
            app.infiniteScroll.destroy('.infinite-scroll-content');
            $$('.infinite-scroll-preloader').remove();
        }
    })

    ajaxGetExamType(function(response) {
      setTimeout(function(){
        var html = "<option value=\"" + "" + "\">" + "全部" + "<\/option>";
        $(response.result).each(function(index, result) {
            html += "<option value=\"" + result.type_id + "\">" + result.type + "<\/option>";
        })

        $(".picker-type").find("select").html(html)

        $(".picker-type").find(".item-after").html("全部")
      },3000)
    })
}
