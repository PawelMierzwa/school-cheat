// $("#search-button").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $(search-term.value).offset().top
//     }, 2000);
// });

// $(document).ready(function (){
//     $("#search-button").click(function (){
//         $('html, body').animate({
//             scrollTop: $("DHCP").offset().top
//         }, 2000);
//     });
// });

function finds(){
    let searched = searchterm.value;
    let link = document.location.href + "#" + searched;
    console.log(link);
    window.location.pathname = link;
}