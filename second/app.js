let left_btn=document.getElementsByName("bi-chevron-left")[0];
let right_btn=document.getElementsByName("bi-chevron-right")[0];

let cards=document.getElementsByClassName("cards")[0];

left_btn.addEventListener("click", leftF)
function leftF(){
        cards.scrollLeft-=140;
}

right_btn.addEventListener("click", rightF)
function rightF(){
        cards.scrolright+=140;
}
