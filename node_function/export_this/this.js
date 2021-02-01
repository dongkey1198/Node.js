console.log(this); // global ?

function a(){
    console.log(this === global);
}
a();

//node에서 전역 scope this는 global이 아니다. {} 빈객체이다!!!!