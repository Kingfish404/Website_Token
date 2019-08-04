$('#List-1').hover(function () {
    var text="公众号：肥马下山";
    var imgIn="images/feima.webp";
    var moreText="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate dignissimos eius et obcaecati. Ab adipisci mollitia rem vero voluptatem. Deleniti doloribus exercitationem expedita perspiciatis placeat, temporibus! Ad, reprehenderit, sit.";
    changeBox(imgIn,text,moreText);
});

$('#List-2').hover(function () {
    var text="杂志：荒原";
    var imgIn="images/hy.webp";
    var moreText="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate dignissimos eius et obcaecati. Ab adipisci mollitia rem vero voluptatem. Deleniti doloribus exercitationem expedita perspiciatis placeat, temporibus! Ad, reprehenderit, sit.";
    changeBox(imgIn,text,moreText);
});

$('#List-3').hover(function () {
    var text="掌上理工大";
    var imgIn="images/zslgd.webp";
    var moreText="专为武汉理工大学的学子们打造的校园服务软件，便捷吾理生活！提供课表、成绩、图书馆、宿舍电费的查询等功能，是武汉理工大学学习生活的必备神器。";
    changeBox(imgIn,text,moreText);
});

$('#List-4').hover(function () {
    var text="小程序";
    var imgIn="images/xcx.webp";
    var moreText="4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate dignissimos eius et obcaecati. Ab adipisci mollitia rem vero voluptatem. Deleniti doloribus exercitationem expedita perspiciatis placeat, temporibus! Ad, reprehenderit, sit.";
    changeBox(imgIn,text,moreText);
});

$('#List-5').hover(function () {
    var text="Token微店";
    var imgIn="images/zb.webp";
    var moreText="5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate dignissimos eius et obcaecati. Ab adipisci mollitia rem vero voluptatem. Deleniti doloribus exercitationem expedita perspiciatis placeat, temporibus! Ad, reprehenderit, sit.";
    changeBox(imgIn,text,moreText);
});

function changeBox(InImg,Intext,exampleText) {
    $("#aboutImg").attr("src",InImg);
    $("#aboutText").text(Intext);
    $("#aboutProductTap").attr("src",InImg);
    $("#aboutProductText").text(exampleText);
}