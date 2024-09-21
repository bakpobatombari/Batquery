B(".openNav").on("click", function(){
    B(".sidenav").openNav();
    
})
B(".closeBtn").on("click", function(){
    B(".sidenav").closeNav();  
})

B(".slide").slideshow(4000);



B("#try").text('(".slide").slideshow(4000);')

B("#openSearch").on('click', function(){
    B(".search-box").fadeIn();
})
B(".closeSearch").on('click', function(){
    B(".search-box").fadeOut();
});
const search = ()=>{
    let input =  document.getElementById('search-input').value;
    if(input === ""){
        alert("Please Enter A Valid Search");
    }   
    else{ 
       confirm("Are You Sure You Want To Search For " + input)
    }
}