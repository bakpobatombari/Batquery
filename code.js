function B(selector){
    "use strict";
        let self = document.querySelector(selector);
        let doubleself = document.querySelectorAll(selector);

        self.text = function(text){
            if(text){
                self.innerText = text;
                return self;
            }
            return self.innerText;
        }
        
        self.html = function(){
            return self.innerHTML;
        }
    
        self.css = function(styles){
            for(let key in styles){
                self.style[key] = styles[key];
            }
            return self;
        }
    
        self.on = function(eventname, callback){
            self.addEventListener(eventname, callback);
            return self;
        }
    
        self.show = function(){
            self.style.display = "block";
        }
    
        self.hide = function(){
            self.style.display = "none";
        }
        self.fadeIn = function(){
            self.style.transition = '0.5s';
            self.style.display = "block";
            self.style.opacity = 0.6;
            setTimeout(function(){
                self.style.opacity = 1;
            },-100);
        }
        self.fadeOut = function(){
            self.style.transition = '0.5s';
            self.style.opacity = 0.6;
            setTimeout(function(){
                self.style.display = "none";
            },100);
        }
        self.openNav = function(){
            self.style.transition = "1s";
            self.style.width = "40%";
        }  
        self.closeNav = function(){
            self.style.transition = "1s";
            self.style.width = "0%";
        }
        self.slideshow = function(time){
                let slides = doubleself;
                let counter = 0;
                slides.forEach(
                    (slide, index) => {
                        slide.style.left = `${index * 100}%`
                    }
                )
                const slideImage = () =>{
                    slides.forEach(
                        (slide) => {
                            slide.style.transform = `translateX(-${counter*100}%)`
                        }
                    )
                }
                if(counter< slides.length){
                    setInterval(()=>{
                        while (counter >slides.length -2) {
                            counter = -1;
                        }
                        counter++;
                        slideImage()
                    },time)
                    // 10s 
                }
            }

        

        return self;
    }  
function $B(selector){
    let self = document.querySelectorAll(selector); 
    return self;
} 