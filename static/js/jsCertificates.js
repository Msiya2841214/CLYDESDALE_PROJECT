let currentPage_ = "home"
window.onload=function(){
    hideMySection();
    showHome_();
    search_submit();
    clear_submit();
};
function hideMySection(){
   document.getElementById("Students_id").style.display="none";
   document.getElementById("Administrator_id").style.display="none";
   document.getElementById("About_id").style.display="none";
   document.getElementById("Home_id").style.display = "none";
}
function showHome_(){
   hideMySection()
   currentPage_="home";
   document.getElementById("Students_id").style.display="none";
   document.getElementById("Administrator_id").style.display="none";
   document.getElementById("About_id").style.display="none";
   document.getElementById("Home_id").style.display="block";

    document.body.style.backgroundImage = `url('${bgImageUrl}')`;
     
}


function showStudents_(){
    //hideAll()
    hideMySection()
    currentPage_="Students";
    document.getElementById("Home_id").style.display="none";
    document.getElementById("About_id").style.display="none";
    document.getElementById("Administrator_id").style.display="none";

    document.getElementById("Students_id").style.display="block";
    
    document.body.style.backgroundImage=("none");
}

function showAbout_(){
    hideMySection()
    currentPage_="About";
    document.getElementById("Students_id").style.display="none";
    document.getElementById("Home_id").style.display="none";
    document.getElementById("Administrator_id").style.display="none";

    document.getElementById("About_id").style.display="block";
   
    document.body.style.backgroundImage=("none");
}

function showAdmin_(){
    hideMySection()
    currentPage_="Administrators";
    document.getElementById("Home_id").style.display="none";
    document.getElementById("About_id").style.display="none";
    document.getElementById("Students_id").style.display="none";

    document.getElementById("Administrator_id").style.display="block";
     
   document.body.style.backgroundImage=("none");  
}


function clear_submit(){
    const form = document.getElementById("student_form");
       form.addEventListener('submit',function(){
        setTimeout(()=>form.reset(),100);
        showStudents_();
       });
}

function search_submit(){
    const form = document.getElementById("search_students");
       form.addEventListener('submit',function(){
        setTimeout(()=>form.reset(),100);
        showAdmin_();
       });   
}
