import React from 'react'
import './css/Slider.scss'
import anime from 'animejs';


const Slider=()=> {

    function init() {
        const slider = document.querySelector(".slider");
        const nextBtn = slider.querySelector(".slider .nav .next");
        const prevBtn = slider.querySelector(".slider .nav .prev");
        const items = slider.querySelectorAll(".slider .item");
      
        let current = 0;
      
        items.forEach((item) => {
          const textWrapper = item.querySelector(".wrap");
          textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span className='letter'>$&</span>"
          );
        });
      
        function anim(current, next, callback) {
          const currentImgs = current.querySelectorAll(".img");
          const currentText = current.querySelectorAll(".content .letter");
          const nextImgs = next.querySelectorAll(".img");
          const nextText = next.querySelectorAll(".content .letter");
      
          const duration = 400;
          const offset = "-=" + 300;
          const imgOffset = duration*.8;
      
          const tl = anime.timeline({
            easing: "easeInOutQuint",
            duration: duration,
            complete: callback
          });
      
            // Add children
          tl.add({
            targets: currentText,
            translateY: [0, '-.75em'],
            /*clipPath: ['polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'],*/
            opacity: [1, 0],
            easing: "easeInQuint",
            duration: 600,
            delay: (el, i) => 10 * (i + 1)
          })
          .add({
            targets: currentImgs[0],
            translateY: -600,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, offset )
          .add({
            targets: currentImgs[1],
            translateY: -600,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset )
          .add({
            targets: currentImgs[2],
            translateY: -600,
            rotate: [0, '-15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset )
         
          .add({
            targets: currentImgs[3],
            translateY: -600,
            rotate: [0, '15deg'],
            opacity: [1, 0],
            easing: "easeInCubic"
          }, "-=" + imgOffset )
          .add({
            targets: current,
            opacity: 0,
            duration: 10,
            easing: "easeInCubic"
          })
          .add({
            targets: next,
            opacity: 1,
            duration: 10
          }, offset )
          .add({
            targets: nextImgs[0],
            translateY: [600, 0],
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, offset )
          .add({
            targets: nextImgs[1],
            translateY: [600, 0],
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset )
          .add({
            targets: nextImgs[2],
            translateY: [600, 0],
            rotate: ['15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset )
          .add({
            targets: nextImgs[3],
            translateY: [600, 0],
            rotate: ['-15deg', 0],
            opacity: [0, 1],
            easing: "easeOutCubic"
          }, "-=" + imgOffset )
          .add({
            targets: nextText,
            translateY: ['.75em', 0],
            /*clipPath: ['polygon(0 0, 100% 0, 100% 0, 0 0)','polygon(0 0, 100% 0, 100% 100%, 0% 100%)'],*/
            opacity: [0, 1],
            easing: "easeOutQuint",
            duration: 600,
            delay: (el, i) => 10 * (i + 1)
          }, offset );
        }
      
        let isPlaying = false;
      
        function updateSlider(newIndex) {
          const currentItem = items[current];
          const newItem = items[newIndex];
      
          function callback() {
            currentItem.classList.remove("is-active");
            newItem.classList.add("is-active");
            current = newIndex;
            isPlaying = false;
          }
      
          anim(currentItem, newItem, callback);
        }
      
        function next() {
          if (isPlaying) return;
          isPlaying = true;
          const newIndex = current === items.length - 1 ? 0 : current + 1;
          updateSlider(newIndex);
        }
      
        function prev() {
          if (isPlaying) return;
          isPlaying = true;
          const newIndex = current === 0 ? items.length - 1 : current - 1;
          updateSlider(newIndex);
        }
      
        nextBtn.onclick = next;
        prevBtn.onclick = prev;
      }
      
      document.addEventListener("DOMContentLoaded", init);



      // const data = {
      //     items:[
      //       {
      //         id:1,
      //         name:'Novitates',
      //         images:['https://picsum.photos/seed/a/700/700','https://picsum.photos/seed/b/700/700','https://picsum.photos/seed/c/700/700','https://picsum.photos/seed/d/700/700']
      //       },
      //       {
      //         id:2,
      //         name:'Adferunt',
      //         images:['https://picsum.photos/seed/e/700/700','https://picsum.photos/seed/f/700/700','https://picsum.photos/seed/g/700/700','https://picsum.photos/seed/h/700/700']
      //       },
      //       {
      //         id:2,
      //         name:'Adferunt',
      //         images:['https://picsum.photos/seed/i/700/700','https://picsum.photos/seed/j/700/700','https://picsum.photos/seed/k/700/700','https://picsum.photos/seed/l/700/700']
      //       }
      //     ]
      // }


     
    return (
        <div>
        <h1 style={{color:'black'}}>reload for the button to work</h1>
            <div className="slider">
            
                                  {/* credits */}
           {/*  <div className="credits">
                <p>Anime.js implementation of the Diagonal Thumbnail Slideshow Animation</p>
                <a href="https://tympanus.net/codrops/2020/09/01/diagonal-thumbnail-slideshow-animation/" target="_blank">Inspired from Codedrops</a>
            </div> */}
            <div className="nav">
                <div className="next"></div>
                <div className="prev"></div>
                <div className="explore-btn">Explore</div>
            </div>

            
            
            <div className="item is-active">
                <div className="content">
                <div className="wrap">Novitates</div>
                </div>
                <div className="imgs">
                <div className="grid">
                    <div className="img img-1">
                    <img src="https://picsum.photos/seed/a/700/700"/></div>
                    <div className="img img-2">
                    <img src="https://picsum.photos/seed/b/700/700"/></div>
                        <div className="img img-3">
                    <img src="https://picsum.photos/seed/c/700/700"/></div>
                        <div className="img img-4">
                    <img src="https://picsum.photos/seed/d/700/700"/></div>
                </div>
                </div>
            </div>
            
            <div className="item">
                <div className="content">
                <div className="wrap">Si spem</div>
                </div>
                <div className="imgs">
                <div className="grid">
                    <div className="img img-1">
                    <img src="https://picsum.photos/seed/e/700/700"/></div>
                    <div className="img img-2">
                    <img src="https://picsum.photos/seed/f/700/700"/></div>
                    <div className="img img-3">
                    <img src="https://picsum.photos/seed/g/700/700"/></div>
                    <div className="img img-4">
                    <img src="https://picsum.photos/seed/h/700/700"/></div>
                </div>
                </div>
            </div>
            
            <div className="item">
                <div className="content">
                <div className="wrap">Adferunt</div>
                </div>
                <div className="imgs">
                <div className="grid">
                    <div className="img img-1">
                    <img src="https://picsum.photos/seed/i/700/700"/></div>
                    <div className="img img-2">
                    <img src="https://picsum.photos/seed/j/700/700"/></div>
                    <div className="img img-3">
                    <img src="https://picsum.photos/seed/k/700/700"/></div>
                    <div className="img img-4">
                    <img src="https://picsum.photos/seed/l/700/700"/></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}



export default Slider








// 26238(total)


// 9728+1050=10778(paid)

// 26238(total)-10778(paid)=15460(pendingbal)



// 22345(cur balance)-15460(pendingbal)=6885(final)


// 6885(final)-5000(dad)=1885(pass)

