/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     var x=document.getElementById("image");
     x.style.backgroundImage = "url('"+previewPic.src+"')";
     x.innerHTML=previewPic.alt
     
       }
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       var x=document.getElementById("image");
       x.style.backgroundImage = "url('')";
       x.innerHTML=("Hover over an image below to display here.")   
       }
function addevent()
{
    currentImages = document.querySelectorAll("img.preview")
    for (var i = 0; i < currentImages.length; i++)
    { 
        
        console.log(i)
       currentImages[i].setAttribute("tabindex","0")
       currentImages[i].addEventListener("focus",(e)=>{
        console.log(e)
       })
       currentImages[i].addEventListener("blur",(e)=>{
        console.log(e)
       })
    }
}