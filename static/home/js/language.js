function replaceLanguage() {

    replaceFrench()

}

function getImageDirectoryByFullURL() {
    return window.location.href.split('#').pop()
}


function replaceFrench() {
    if (getImageDirectoryByFullURL() === "fr") {
        if (window.location.href.split('/').pop() === "#fr") {
            // 1st

            // Title
            document.getElementById('language_title').style.display = "none";
            document.getElementById('language_title_fr').style.display = "block";


            //Navbar 1
            document.getElementById('language_navbar_home').style.display = "none";
            document.getElementById('language_navbar_home_fr').style.display = "block";

            document.getElementById('language_navbar_resume').style.display = "none";
            document.getElementById('language_navbar_resume_fr').style.display = "block";

            document.getElementById('language_navbar_about').style.display = "none";
            document.getElementById('language_navbar_about_fr').style.display = "block";

            document.getElementById('language_navbar_projet').style.display = "none";
            document.getElementById('language_navbar_projet_fr').style.display = "block";

            document.getElementById('language_description').style.display = "none";
            document.getElementById('language_description_fr').style.display = "block";

            document.getElementById('language_letter').style.display = "none";
            document.getElementById('language_letter_fr').style.display = "block";

            //2nd

            document.getElementById('language_about').style.display = "none";
            document.getElementById('language_about_fr').style.display = "block";

            document.getElementById('language_about_second').style.display = "none";
            document.getElementById('language_about_second_fr').style.display = "block";

            document.getElementById('language_about_third').style.display = "none";
            document.getElementById('language_about_third_fr').style.display = "block";

            document.getElementById('language_about_four').style.display = "none";
            document.getElementById('language_about_four_fr').style.display = "block";

            document.getElementById('language_work').style.display = "none";
            document.getElementById('language_work_fr').style.display = "block";


            document.getElementById('language_work_second').style.display = "none";
            document.getElementById('language_work_second_fr').style.display = "block";

            document.getElementById('language_undercube').style.display = "none";
            document.getElementById('language_undercube_fr').style.display = "block";

            document.getElementById('language_latestproject').style.display = "none";
            document.getElementById('language_latestproject_fr').style.display = "block";

            document.getElementById('language_photoproject').style.display = "none";
            document.getElementById('language_photoproject_fr').style.display = "block";

            document.getElementById('language_codingproject').style.display = "none";
            document.getElementById('language_codingproject_fr').style.display = "block";

            document.getElementById('language_musicproject').style.display = "none";
            document.getElementById('language_musicproject_fr').style.display = "block";
        }

        if (window.location.href.split('/').pop() === "izanami.html#fr") {
            console.log("good boy")

        } else {
            console.log("good")
        }
    }
}

replaceFrench()