//! product page js

const productContainers = document.querySelectorAll('.product-container');

productContainers.forEach(container => {
    const imgElement = container.querySelector('img');
    if (!imgElement) return;

    // Create overlay text
    const overText = document.createElement('div');
    overText.classList.add('over-text');
    overText.textContent = 'View Details >>';
    overText.style.position = 'absolute';
    overText.style.top = '50%';
    overText.style.left = '50%';
    overText.style.transform = 'translate(-50%, -50%)';
    overText.style.color = '#000';
    overText.style.fontSize = '22px';
    overText.style.fontWeight = 'bold';
    overText.style.opacity = '0';
    overText.style.transition = 'opacity 0.3s ease';
    overText.style.pointerEvents = 'none';
    overText.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';

    container.appendChild(overText);

    // Hover events
    container.addEventListener('mouseover', () => {
        overText.style.opacity = '1';
    });

    container.addEventListener('mouseout', () => {
        overText.style.opacity = '0';
    });
});


//! navbar js
const menuIcon = document.querySelector('#navbar .menu');
const navLinks = document.querySelector('#navbar ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

