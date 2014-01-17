var qq = ['01', '02','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
            Lottery.init({
    numbers: qq,
    actions: ['subtract'],
    cubeSize: 300,
    cubeSpace: 100,
    cubesPerDigit: 20,
    waitingTime: 3000
});

            document.getElementById('draw').addEventListener('click', function() {
                Lottery.draw();
            });
$(function(){

              $('.playone').click(function() {
           var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'images/click.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
         $.get();
         audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);
         setTimeout(function(){
var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'images/music.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
         $.get();
         audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

         }, 1000 )
        });
            });
        