const currentUrl = window.location.href;

window.addEventListener("load", () => {
    // Set opacity for images
    const images = [
        { id: "image1", opacity: 1 },
        { id: "image4", opacity: 1 },
    ];
    images.forEach(({ id, opacity }) => {
        const image = document.getElementById(id);
        if (image) {
            image.style.opacity = opacity;
        }
    });

    // Add classes to headings
    const headings = [
        { id: "heading1", className: "moved1" },
        { id: "heading2", className: "moved2" },
        { id: "heading3", className: "moved3" },
        { id: "heading4", className: "moved4" },
        { id: "heading7", className: "moved5" },
        { id: "heading8", className: "moved5" },
    ];
    headings.forEach(({ id, className }) => {
        const heading = document.getElementById(id);
        if (heading) {
            heading.classList.add(className);
        }
    });

    // Add classes to specific images
    const additionalImages = [
        { id: "image2", className: "moved4" },
        { id: "image3", className: "moved4" },
    ];
    additionalImages.forEach(({ id, className }) => {
        const image = document.getElementById(id);
        if (image) {
            image.classList.add(className);
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener("scroll", () => {
    const checkInViewport = (elements, className) => {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add(className);
            }
        });
    };

    const animatedElements1 = document.querySelectorAll('.animated-element');
    checkInViewport(animatedElements1, 'animate');

    const animatedElements2 = document.querySelectorAll('.animated-element2');
    checkInViewport(animatedElements2, 'animate2');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const zoomElements = document.querySelectorAll('.zoom-element'); // Select all zoom elements

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in'); // Add zoom-in class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 }); // Trigger when 50% of the element is visible

    zoomElements.forEach(element => {
        observer.observe(element); // Observe each element
    });
});


