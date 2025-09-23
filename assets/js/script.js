// Smooth scroll with Lenis
const lenis = new Lenis({
    duration: 0.85,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Apple feel
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Auto Scroll
  const btnShowreel = document.getElementById("btn-showreel")
  const showreelSection = document.getElementById("showreel")

  btnShowreel.addEventListener("click", (e) => {
    e.preventDefault()
    lenis.scrollTo(showreelSection)
  })
  
  // Optional: Parallax effect untuk element dengan class .parallax
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".parallax").forEach(el => {
      let y = window.scrollY * 0.3
      el.style.transform = `translateY(${y}px)`
    })
  })
  