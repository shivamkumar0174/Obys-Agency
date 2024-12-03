function loadingAnimation() {
    let tl = gsap.timeline()
    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5,
    })
    tl.from(".line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5value = document.querySelector(".line1-part1 h5")

            var count = 0;
            setInterval(function () {
                if (count < 100) {
                    h5value.innerHTML = count++
                }
                else {
                    h5value.innerHTML = count
                }
            }, 40)
        }
    })
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    })
    tl.to("#loader", {
        opacity: 0,
        delay: 4,
        duration: 0.2,
    })
    tl.from("#page1", {
        dealy: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.5,
        ease: power4,
    })
    tl.to("#loader", {
        display: none,
    })
}

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.clientX,
            top: dets.clientY,
        });
    });
    Shery.makeMagnet("#nav-part2", {});

}
cursorAnimation();
loadingAnimation();
