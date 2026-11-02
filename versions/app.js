let docTitle=document.title
window.addEventListener("blur", ()=>{
    document.title="Come back";
})
window.addEventListener("focus", ()=>{
    document.title=docTitle;
})
function fMenu(){
    document.getElementById("APER").style.transform="translate(0,-20px)"
    document.getElementById("decorativeSect").style.visibility="visible"
    document.getElementById("outerDecorSect").style.animation="rotationAnimation .5s ease"
    document.getElementById("ref").style.animation="txtRefDisapp 2s ease"
    document.getElementById("res").style.animation="txtResDisapp 2s ease"
    document.getElementById("menuTitle").style.visibility="visible"
    document.getElementById("mCon").style.visibility="visible"
    document.getElementById("menuTitle").style.animation="menuTitApp 2s ease"
    document.getElementById("menuTitle").style.animationFillMode="both"
    document.getElementById("mCon").style.animation="contentMaker 2s"
    document.getElementById("mCon").style.animationFillMode="both"

    document.getElementById("EPER").style.transform="translate(0,0)"
    document.getElementById("datSear").style.visibility="hidden"
    document.getElementById("datSear").style.animation="searchBarDisapp .1s ease"
    document.getElementById("searchInput").style.animation="searchLineDisapp"
}
function fMenuClose(){
    document.getElementById("APER").style.transform="translate(0,0)"
    document.getElementById("decorativeSect").style.visibility="hidden"
    document.getElementById("outerDecorSect").style.animation="rotationAnimation1 .5s ease"
    document.getElementById("ref").style.animation="txtRefAppearance 2s ease"
    document.getElementById("res").style.animation="txtResAppearance 2s ease"
    document.getElementById("ref").style.animationFillMode="both"
    document.getElementById("res").style.animationFillMode="both"
    document.getElementById("menuTitle").style.animation="menuTitDisapp 2s ease"
    document.getElementById("mCon").style.animation="contentDisMaker .3s"
}
function contentMenuShow(){
    document.getElementById("menuTitle").style.height="300px"
    document.getElementById("menuTitle").style.animation="contExp 2s ease"
    document.getElementById("menuTitle").style.animationFillMode="both"
}
function hiddenInfoClass(){
    document.getElementById("txtOutput").innerHTML=""
}
function hiddenInfoClass1(){
    document.getElementById("txtOutput").innerHTML="lorem"
}
function hiddenInfoClass2(){
    document.getElementById("txtOutput").innerHTML="ipsum"
}
function hiddenInfoClass3(){
    document.getElementById("txtOutput").innerHTML="dolor"
}
function fSearchBar(){
    document.getElementById("EPER").style.transform="translate(0,-20px)"
    document.getElementById("datSear").style.visibility="visible"
    document.getElementById("datSear").style.animation="searchBarApp 2.5s ease"
    document.getElementById("datSear").style.animationFillMode="both"
    document.getElementById("searchInput").style.animation="searchLine 2.5s"
    document.getElementById("searchInput").style.animationFillMode="both"
    
    document.getElementById("APER").style.transform="translate(0,0)"
    document.getElementById("decorativeSect").style.visibility="hidden"
    document.getElementById("outerDecorSect").style.animation="rotationAnimation1 .5s ease"
    document.getElementById("ref").style.animation="txtRefDisapp 2s ease"
    document.getElementById("res").style.animation="txtResDisapp 2s ease"
    document.getElementById("menuTitle").style.visibility="hidden"
    document.getElementById("mCon").style.visibility="hidden"
    document.getElementById("menuTitle").style.animation="menuTitDisapp 2s ease"
    document.getElementById("mCon").style.animation="contentDisMaker .3s"
}
function fSearchBarClose(){
    document.getElementById("EPER").style.transform="translate(0,0)"
    document.getElementById("datSear").style.animation="searchBarDisapp 1s ease"
    document.getElementById("searchInput").style.animation="searchLineDisapp"

    document.getElementById("ref").style.animation="txtRefAppearance 2s ease"
    document.getElementById("res").style.animation="txtResAppearance 2s ease"
    document.getElementById("ref").style.animationFillMode="both"
    document.getElementById("res").style.animationFillMode="both"
}