    
    
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple testimonial slider
        const testimonials = [
            {
                quote: "WanderLuxe planned our honeymoon to perfection. Every detail was taken care of, from private sunset dinners to helicopter transfers. Worth every penny!",
                author: "- Sarah & Michael J."
            },
            {
                quote: "The safari experience they arranged in Tanzania was beyond anything we could have imagined. Their local connections made all the difference.",
                author: "- Robert Chen"
            },
            {
                quote: "As a frequent traveler, I'm particular about my arrangements. WanderLuxe consistently exceeds my expectations with their attention to detail.",
                author: "- Elizabeth Montgomery"
            }
        ];

        let currentTestimonial = 0;
        const testimonialElement = document.querySelector('.testimonial');
        
        function rotateTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonialElement.innerHTML = `
                <p>"${testimonials[currentTestimonial].quote}"</p>
                <div class="testimonial-author">${testimonials[currentTestimonial].author}</div>
            `;
        }

        // Rotate testimonials every 5 seconds
        setInterval(rotateTestimonial, 5000);
    