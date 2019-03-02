$(function () {
  // console.log('enter index.js')


$('.themusic').click(function () {
    console.log('點擊')
    // <source src="/static/upload/index/daogu.mp3" type="audio/mpeg" class="ms_src">


    $('.ms_title').html($(this).find('p').first().attr('data-title'))

    $('.the_audio').empty()
    $('<audio controls><source src="/static/upload/index/' + $(this).find('p').first().attr('data-src') + ' " type="audio/mpeg" class="ms_src"> 您的浏览器不支持 audio 元素。</audio>').appendTo('.the_audio')


})







})