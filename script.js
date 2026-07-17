// =========================
// LOADING
// =========================

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        document.getElementById("loading").style.display="none";

    },2500);

});




// =========================
// PAGE SYSTEM
// =========================

const pages = document.querySelectorAll(".page");


function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });


    document.getElementById(id).classList.add("active");

}





// =========================
// MUSIC
// =========================

const music = document.getElementById("bgMusic");






// =========================
// BUTTONS
// =========================


document.getElementById("nextBtn").onclick = ()=>{


    music.play().catch(()=>{});


    showPage("passwordPage");


};



document.getElementById("skipBtn").onclick = ()=>{


    showPage("skipPage");


};




document.getElementById("backBtn").onclick = ()=>{


    showPage("intro");


};








// =========================
// PASSWORD
// =========================


let password="";


const correctPassword="1707";


const input=document.getElementById("passwordInput");



document.querySelectorAll(".num").forEach(button=>{


    button.onclick=()=>{


        if(password.length < 6){


            password += button.innerText;


            input.value="•".repeat(password.length);


        }


    };


});




document.getElementById("clear").onclick=()=>{


    password="";

    input.value="";


};





document.getElementById("enter").onclick=()=>{


    if(password===correctPassword){


        password="";

        input.value="";


        showPage("flowerPage");


    }


    else{


        alert("Wrong Password ❤️");


        password="";


        input.value="";


    }


};








// =========================
// FLOWER
// =========================


document.getElementById("flowerNext").onclick=()=>{


    showPage("letterPage");


    typeLetter();


};









// =========================
// LETTER TYPING
// =========================


const text = `

Happy Birthday, Mama! 🎉❤️

I don't know if this little website is enough to show how much you mean to me, but every line of code was written with love, sincerity, and thoughts of you.

Thank you for being such a beautiful part of my life. On your special day, I hope this little surprise brings a smile to your face, just as you always bring happiness to mine.

May this year be filled with endless joy, good health, unforgettable memories, and all the love you truly deserve. You deserve every beautiful thing in this world.

Happy Birthday once again, Mama. I hope all your dreams come true. 💖

`;



let typingTimer;



function typeLetter(){


    const typing=document.getElementById("typing");


    clearInterval(typingTimer);


    typing.innerHTML="";


    let i=0;



    typingTimer=setInterval(()=>{


        typing.innerHTML += text.charAt(i);


        i++;



        if(i>=text.length){


            clearInterval(typingTimer);


        }


    },35);



}








// =========================
// GALLERY
// =========================


document.getElementById("galleryBtn").onclick=()=>{


    showPage("galleryPage");


};




document.getElementById("finalBtn").onclick=()=>{


    showPage("finalPage");


};









// =========================
// FLOATING HEARTS
// =========================


setInterval(()=>{


    const heart=document.createElement("span");


    heart.innerHTML="❤️";


    heart.style.left=Math.random()*100+"%";


    heart.style.fontSize=(20+Math.random()*35)+"px";


    heart.style.animationDuration=(3+Math.random()*4)+"s";



    document.querySelector(".hearts").appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },7000);



},300);








// =========================
// MUSIC UNLOCK
// =========================


document.body.addEventListener("click",()=>{


    music.play().catch(()=>{});


},{once:true});