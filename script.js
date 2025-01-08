 // Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for header height
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Dynamic project cards
  const projects = [
    {
      title: 'ActiveAura',
      description: ' ActiveAura is a responsive e-commerce website for selling sportswear, gym accessories, and supplements..',
      link: ' https://github.com/Olaelbrmawey/ActiveAura',
    },
    {
      title: 'FoucsEra',
      description: ' Focus Era is a modern platform dedicated to empowering individuals with tools, insights, and resources to boost productivity and achieve their personal goals..',
      link: 'https://github.com/Olaelbrmawey/FoucsEra',
    },
    {
      title: 'My portofolio',
      description: ' My portfolio is a dynamic showcase of my skills, projects, and experiences.',
      link: '#',
    },
  ];
  
  const projectContainer = document.getElementById('projectContainer');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectContainer.appendChild(projectCard);
  });
  
  // Dark Mode Toggle
  const toggleDarkMode = document.createElement('button');
  toggleDarkMode.textContent = 'Toggle Dark Mode';
  toggleDarkMode.style.position = 'fixed';
  toggleDarkMode.style.bottom = '20px';
  toggleDarkMode.style.right = '20px';
  toggleDarkMode.style.padding = '10px';
  toggleDarkMode.style.backgroundColor = '#007bff';
  toggleDarkMode.style.color = 'white';
  toggleDarkMode.style.border = 'none';
  toggleDarkMode.style.borderRadius = '5px';
  toggleDarkMode.style.cursor = 'pointer';
  
  document.body.appendChild(toggleDarkMode);
  
  toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Add Dark Mode CSS dynamically
  const darkModeStyles = document.createElement('style');
  darkModeStyles.innerHTML = `
    body.dark-mode {
      background-color: #121212;
      color: #f4f4f9;
    }
    body.dark-mode .header {
      background: linear-gradient(90deg, #333, #555);
    }
    body.dark-mode .project {
      background: #333;
      color: #f4f4f9;
    }
    body.dark-mode .project a {
      background: #555;
    }
    body.dark-mode .footer {
      background: #222;
    }
  `;
  document.head.appendChild(darkModeStyles);
  
  // Back-to-Top Button
  const backToTop = document.createElement('button');
  backToTop.textContent = '↑';
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '80px';
  backToTop.style.right = '20px';
  backToTop.style.padding = '10px';
  backToTop.style.backgroundColor = '#007bff';
  backToTop.style.color = 'white';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '5px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.display = 'none';
  
  document.body.appendChild(backToTop);
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  // Hero Section Text Animation
  const heroTitle = document.querySelector('.hero-title');
  const heroText = 'Welcome to My Portfolio';
  let index = 0;
  
  function typeText() {
    if (index < heroText.length) {
      heroTitle.textContent += heroText.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }
  
  heroTitle.textContent = ''; // Clear the title before typing
  typeText();
  
  // Scroll Reveal for Sections
  const revealSections = document.querySelectorAll('section');
  
  const revealOnScroll = () => {
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };
  
  revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  window.addEventListener('scroll', revealOnScroll);
   
  