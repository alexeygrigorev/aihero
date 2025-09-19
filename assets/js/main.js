// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    // Log performance metrics (remove in production)
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
  });
}

// Header scroll shadow effect (for ML Zoomcamp and other pages)
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}, { passive: true });

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation clicks with performance optimization
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        })
      }
    })
  })

  // Handle newsletter form
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value

      // Here you would typically send the email to your backend
      console.log("Newsletter signup:", email)

      // Show success message (you can customize this)
      alert("Thank you for subscribing! You'll receive updates within 24 hours.")

      // Clear the form
      emailInput.value = ""
    })
  }

  // Add active state to navigation based on scroll position with throttling
  const sections = document.querySelectorAll("section[id]")
  const navItems = document.querySelectorAll(".nav-link")
  let ticking = false

  function updateActiveNav() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === "#" + current) {
        item.classList.add("active")
      }
    })
    
    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateActiveNav)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true })
})
