$(function () {
  // console.log('enter index.js')


$('.themusic').click(function () {
    console.log('點擊')
    // <source src="/static/upload/index/daogu.mp3" type="audio/mpeg" class="ms_src">

    $('.ms_title').html(this.firstElementChild.attributes[0].value)


    $('.the_audio').empty()
    $('<audio controls><source src="/static/upload/index/' + this.firstElementChild.attributes[1].value + ' " type="audio/mpeg" class="ms_src"> 您的浏览器不支持 audio 元素。</audio>').appendTo('.the_audio')

    // $('.ms_src').attr({'src':'/static/upload/index/'+this.firstElementChild.attributes[1].value})


// /static/upload/index/
//       console.log( $('.ms_src').attr({'src':this.firstElementChild.attributes[1].value}) )
})










})