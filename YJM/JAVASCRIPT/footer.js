function footerDiv() {
    var footer = document.getElementById("yjmFooter");
    footer.style.backgroundColor = "peachpuff";
    footer.style.color = "black";
    footer.style.position = "fixed";
    footer.style.left = "0";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.textAlign = "center";


}
footerDiv();




//FIND .footerColor CLASS IN footer.css FILE
function footerHeading () {
    var footer1 = document.getElementById("yjmFooterHeading");
    footer1.classList.add("footerColor");
}
footerHeading();



//FIND .footerFrame CLASS in footer.css FILE
function footerPlacement () {
    var footer2 = document.getElementById("yjmFooterPlacement");
    footer2.classList.add("footerFrame");
}
footerPlacement();

//FIND .footerHeadingAlignText Class in footer.css File
function footerText () {
    var footer3 = document.getElementById("yjmFooterText");
    footer3.classList.add('footerText');

}
footerText();
