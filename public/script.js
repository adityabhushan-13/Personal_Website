var i=0;
var txt='hello';
var speed=1;
var m=0;
var reqid="first_para";
var x=0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById(reqid).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else if(i==txt.length){
        if(reqid=="first_para"){
            document.getElementById(reqid).innerHTML += `<a href="./Achievements.html" class="link" onMouseOver="this.style.color='brown'" onMouseOut="this.style.color='blue'" style="text-decoration:none;">Click here.</a>`;
        }
        f=m+1;
        initiate();
    }
}


var f=0;
function initiate(){
    const myInterval=setInterval(function () {
        if(f==0){
            document.body.innerHTML+=`<h1 id="head1">Welcome to my Website</h1>`;
            f=1;
            const head=document.getElementById("head1");
            head.style.transitionDuration="0.2s";
        }else if(f==1){
            const head=document.getElementById("head1");
            head.style.transitionDuration="0.2s";
            head.style.fontSize="4vw";
            head.style.marginTop="1vw";    
            f=2;
        }else if(f==2){
            document.body.innerHTML+=`<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="decorate">
            <a class="navbar-brand" href="#" style="cursor:none;">Aditya's Profile</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link navbar-brand" href="./Achievements.html" id="achievements">Achievements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand" href="./Projects.html" id="project">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand" href="./Gallery.html" id="gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand" href="./Contacts.html" id="contact">Contact me</a>
                    </li>
                </ul>
            </div>
        </nav>`;
            f=3;
        }else if(f==3){
            i = 0;
            txt = 'Hello Visitor, My name is Aditya Bhushan. I am an undergraduate student at IIT Guwahati, majoring in Electronics and Communication Engineering and have a minor of Computer Science and Engineering. I have completed my senior secondary education from CBSE board after that i cleared JEE Advanced to get into IIT Guwahati.To know more about my achievements and academics progress ';
            speed = 10;
            document.body.innerHTML+=`<p id="first_para" class="para"></p>`
            reqid="first_para";
            typeWriter();
            m=f;
            f=35000;
        }else if(f==4){
            i = 0;
            txt = 'My hobbies includes: ';
            document.body.innerHTML+=`<p id="second_para" class="para"></p>`
            reqid="second_para";
            typeWriter();
            document.body.innerHTML+=`<ul class="hobbies" id="hobbies1"></ul>`;
            m=f;
            f=35000;
        }else if(f==5){
            if(x==0){
                i = 0;
                x=1;
                txt = 'Playing Table Tennis';
                document.getElementById("hobbies1").innerHTML+=`<li id="il1"></li>`;
                reqid="il1";
                typeWriter();
            }else if(x==1){
                i = 0;
                x=2;
                txt = 'Playing Badminton';
                document.getElementById("hobbies1").innerHTML+=`<li id="il2"></li>`;
                reqid="il2";
                typeWriter();
            }else if(x==2){
                i = 0;
                x=3;
                txt = 'Competitive Programming';
                document.getElementById("hobbies1").innerHTML+=`<li id="il3"></li>`;
                reqid="il3";
                typeWriter();
            }else if(x==3){
                i = 0;
                x=4;
                txt = 'Traveling';
                document.getElementById("hobbies1").innerHTML+=`<li id="il4"></li>`;
                reqid="il4";
                m=f;
                typeWriter();
            }
            f=35000;
        }else if(f==6){
            document.body.innerHTML+=`<h3 class="hobbies" style="display: inline; font-size:2vw;margin-top:1vw;margin-right:2vw;margin-left:2vw;">To see my Resume/CV<a style="text-decoration:none;" href="./Aditya_Bhushan.pdf" onMouseOver="this.style.color='Brown'" onMouseOut="this.style.color='rgb(85, 26, 139)'" download> Click here</a></h3>`;
            f=f+1;
            initiate();  
        }else if(f==7){
            i = 0;
            txt = 'My Technical knowledge includes: C/C++, python, HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js. ';
            speed = 10;
            document.body.innerHTML+=`<p id="third_para" class="para"></p>`
            reqid="third_para";
            typeWriter();
            m=f;
            f=35000;
        }else if(f==8){
            i = 0;
            txt = 'Key courses taken: Data Structure and Algorithms, Automata Theory, Digital Design,Probability and Random processes,Introduction to C.';
            speed = 10;
            document.body.innerHTML+=`<p id="fourth_para" class="para"></p>`
            reqid="fourth_para";
            typeWriter();
            m=f;
            f=35000;

        }else if(f==9){
            document.body.innerHTML+=`<p id="fifth_para" >To know about my Projects and upcoming works in details<a style="text-decoration:none;" href="./Projects.html" onMouseOver="this.style.color='Brown'" onMouseOut="this.style.color='rgb(85, 26, 139)'"> Click here</a></p>`;
            document.body.innerHTML+=`<p id="sixth_para">For my social media handles and github profile<a style="text-decoration:none;" href="./Contacts.html" onMouseOver="this.style.color='Brown'" onMouseOut="this.style.color='rgb(85, 26, 139)'"> Click here</a></p>`;
            document.body.innerHTML+=`<p id="seventh_para">To know about my Achievements and academic progress<a style="text-decoration:none;" href="./Achievements.html" onMouseOver="this.style.color='Brown'" onMouseOut="this.style.color='rgb(85, 26, 139)'"> Click here</a></p>`;
            f=f+1;
            initiate();
        }
        else{
            console.log("hello");
            clearInterval(myInterval);
        }
    }, 300);
}
initiate();