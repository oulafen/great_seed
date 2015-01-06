/**
 * Created by Administrator on 2015/1/4 0004.
 */
$(function(){

    //轮播
    $("#artists_slides").slides({
        container: 'artists_slides_container',
        generateNextPrev: false,
        pagination: true,
        generatePagination: false
    });

    $("#recent_art_slides").slides({
        container: 'recent_art_slides_container',
        generateNextPrev: false,
        pagination: true,
        generatePagination: false
    });

    $("#latest_news_slides").slides({
        container: 'latest_news_slides_container',
        generateNextPrev: false,
        pagination: true,
        generatePagination: false
    });

    $("#blog_slides").slides({
        container: 'blog_slides_container',
        generateNextPrev: false,
        pagination: true,
        generatePagination: false
    });

    $("#become_creator_slides").slides({
        container: 'become_creator_slides_container',
        generateNextPrev: false,
        pagination: true,
        generatePagination: false
    });

    //latest news hover style
    $('#ln_item_3_1').hover(
        function () {
            $('#ln_item_3_1_title').removeClass('hidden');
        },
        function () {
            $('#ln_item_3_1_title').addClass('hidden');
        });

    $('#ln_item_3_2').hover(
        function () {
            $('#ln_item_3_2_title').removeClass('hidden');
        },
        function () {
            $('#ln_item_3_2_title').addClass('hidden');
        });

    $('#ln_item_4_1').hover(
        function () {
            $('#ln_item_4_1_title').removeClass('hidden');
        },
        function () {
            $('#ln_item_4_1_title').addClass('hidden');
        });

    $('#ln_item_4_2').hover(
        function () {
            $('#ln_item_4_2_title').removeClass('hidden');
        },
        function () {
            $('#ln_item_4_2_title').addClass('hidden');
        });

});

$(document).ready(function(){

    $('#video_discover').click(function(){
        $('#video_des').addClass('hidden');
        $('#video').removeClass('hidden');
    });

    //调整Recent Art Collection 及 Latest News图片框等的位置
    var ra_container_w = $('.recent_art_slides_container').width();
    $('.ra_item,.ln_item,.blog_item').css({width: ra_container_w+30});


});