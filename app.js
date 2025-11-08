// Portfolio Data
// Resume Data
const resumeData = {
  name: 'GAUTHAM',
  title: 'Software Engineer | AI/ML Developer',
  contact: {
    email: 'gauthamgdhavamani@gmail.com',
    phone: '+91 9629958351',
    location: 'Tambaram, Chennai, India',
    linkedin: 'https://www.linkedin.com/in/gautham-gd/',
    github: 'https://github.com/GAUTHAMGD'
  },
  summary: 'M.E Software Engineering student with strong expertise in AI/ML, computer vision, and full-stack web development. Passionate about developing innovative solutions using machine learning and deep learning technologies. Experienced in building scalable applications and analyzing complex problems.',
  education: [
    {
      degree: 'M.E Software Engineering',
      institution: 'College of Engineering Guindy',
      year: '2025 - Present',
      description: 'Pursuing Master\'s degree in Software Engineering with focus on AI/ML applications'
    },
    {
      degree: 'B.E Computer Science',
      institution: 'Jerusalem College of Engineering',
      year: '2023',
      description: 'Bachelor\'s degree in Computer Science with specialization in core computer science fundamentals'
    }
  ],
  experience: [
    {
      title: 'Python Developer (Data Analyst)',
      company: 'AR XTLABS PRIVATE LIMITED',
      year: '2025',
      project: 'AI Mortgage Document Analysis Service',
      description: 'Working on AI-powered document extraction and analysis system using machine learning and natural language processing for mortgage document processing.'
    },
    {
      title: 'Front End Web Application Developer',
      company: 'PLACIBO TECHNICAL PRIVATE LIMITED',
      year: '2022',
      project: 'Culinary Recipe Website',
      description: 'Developed front-end for culinary recipe web application with responsive design and interactive features.'
    }
  ],
  topProjects: [
    'AI-Powered Mortgage Document Extraction',
    'Severity Prediction for Pulmonary Fibrosis',
    'CAD System for Pulmonary Fibrosis Detection',
    'Quiz Platform',
    'Culinary Recipe Platform'
  ],
  certificates: [
    'Data Science for Engineers (Elite, 2024)',
    'Introduction to Machine Learning (Elite, 2021)',
    'Professional Diploma in Software Testing & QA (2025)',
    'Programming in Java (Silver Medal, 2022)',
    'The Joy of Computing using Python (Silver Medal, 2019)'
  ]
};

const portfolioData = {
  profile: {
    name: 'GAUTHAM',
    titles: ['Software Engineer', 'AI/ML Developer', 'Problem Solver'],
    email: 'gauthamgdhavamani@gmail.com',
    phone: '+91 9629958351',
    location: 'Chennai, India',
    linkedin: 'https://www.linkedin.com/in/gautham-gd/',
    github: 'https://github.com/GAUTHAMGD'
  },
  skills: {
    languages: ['Python3', 'Java', 'C'],
    databases: ['PostgreSQL', 'MySQL'],
    frameworks: ['Django', 'Flask'],
    aws: ['EC2', 'RDS', 'VPC'],
    tools: ['Docker', 'Git/GitHub', 'Nginx', 'Postman', 'VS Code', 'PyCharm', 'Jupyter', 'Colab'],
    communication: ['English', 'Tamil', 'Hindi']
  },
  projects: [
    {
      id: 1,
      title: 'Animal Detection and Counting Using CNN',
      year: 2022,
      category: 'AI/ML',
      description: 'Developed a CNN-based system for automated animal detection and counting in images using deep learning techniques and computer vision.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Computer Vision'],
      icon: 'fa-paw'
    },
    {
      id: 2,
      title: 'Culinary Recipe Platform',
      year: 2025,
      category: 'Web Development',
      description: 'Interactive web application for discovering, sharing, and managing culinary recipes with user profiles and ratings.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      icon: 'fa-utensils',
      link: 'https://github.com/GAUTHAMGD'
    },
    {
      id: 3,
      title: 'Digital Signature Verification Using ANN',
      year: 2023,
      category: 'AI/ML',
      description: 'Artificial Neural Network system for verifying digital signatures with high accuracy using deep learning.',
      technologies: ['Python', 'ANN', 'TensorFlow', 'Image Processing'],
      icon: 'fa-signature'
    },
    {
      id: 4,
      title: 'Simple Portfolio',
      year: 2023,
      category: 'Web Development',
      description: 'Personal portfolio website showcasing projects, skills, and experiences with responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      icon: 'fa-laptop-code',
      link: 'https://github.com/GAUTHAMGD'
    },
    {
      id: 5,
      title: 'Exam Dates Verification with Hall Ticket',
      year: 2023,
      category: 'Web Development',
      description: 'Django-based backend system for verifying exam dates and validating hall tickets with database management.',
      technologies: ['Django', 'Python', 'MySQL', 'Postman', 'Backend'],
      icon: 'fa-calendar-check',
      link: 'https://github.com/GAUTHAMGD'
    },
    {
      id: 6,
      title: 'Quiz Platform',
      year: 2024,
      category: 'Web Development',
      description: 'Full-stack Django application providing interactive quiz experience with scoring, leaderboards, and user analytics.',
      technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'Full Stack'],
      icon: 'fa-question-circle',
      link: 'https://github.com/GAUTHAMGD'
    },
    {
      id: 7,
      title: 'CAD System for Pulmonary Fibrosis Detection',
      year: 2024,
      category: 'Medical Imaging',
      description: 'Computer-Aided Diagnosis system using hybrid deep learning models for detecting and analyzing pulmonary fibrosis in medical images.',
      technologies: ['Python', 'Deep Learning', 'CNN', 'Medical Imaging', 'Hybrid Models', 'TensorFlow'],
      icon: 'fa-lungs'
    },
    {
      id: 8,
      title: 'Severity Prediction for Pulmonary Fibrosis',
      year: 2025,
      category: 'Medical Imaging',
      description: 'Advanced system combining deep learning models with LLMs to predict and analyze severity levels of pulmonary fibrosis cases.',
      technologies: ['Python', 'Deep Learning', 'LLMs', 'Medical AI', 'TensorFlow', 'Natural Language Processing'],
      icon: 'fa-heartbeat'
    },
    {
      id: 9,
      title: 'AI-Powered Mortgage Document Extraction',
      year: 2025,
      category: 'AI/ML',
      description: 'Multi-agent LLM system for intelligent extraction, analysis, and entity recognition from complex mortgage documents.',
      technologies: ['LLMs', 'Multi-Agent Systems', 'Python', 'Document Processing', 'Advanced AI'],
      icon: 'fa-file-invoice-dollar'
    }
  ],

};

// Theme Management
let currentTheme = 'light';

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

// Mobile Navigation
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Smooth Scroll and Active Navigation
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNav);
  highlightNav();
}

// Typing Effect
function initTypingEffect() {
  const typingText = document.getElementById('typingText');
  const titles = portfolioData.profile.titles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// Statistics Counter
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-inline-number');
  let animated = false;
  
  function animateStats() {
    if (animated) return;
    
    const aboutSection = document.querySelector('.about-section');
    const rect = aboutSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animated = true;
      
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target;
          }
        };
        
        updateCounter();
      });
    }
  }
  
  window.addEventListener('scroll', animateStats);
  animateStats();
}

// Skills Section
function initSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  const filterBtns = document.querySelectorAll('.skills-filters .filter-btn');
  
  // Render all skills
  function renderSkills() {
    skillsGrid.innerHTML = '';
    
    Object.keys(portfolioData.skills).forEach(category => {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'skill-category-card fade-in';
      categoryCard.setAttribute('data-category', category);
      
      const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
      const skillsList = portfolioData.skills[category]
        .map(skill => `<span class="skill-badge">${skill}</span>`)
        .join('');
      
      categoryCard.innerHTML = `
        <h3 class="skill-category-title">${categoryTitle}</h3>
        <div class="skill-badges">
          ${skillsList}
        </div>
      `;
      
      skillsGrid.appendChild(categoryCard);
    });
    
    // Observe for scroll animations
    observeElements('.skill-category-card');
  }
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const skillCards = document.querySelectorAll('.skill-category-card');
      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  renderSkills();
}

// Projects Section
function initProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  
  // Render projects
  function renderProjects() {
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card fade-in';
      projectCard.setAttribute('data-category', project.category);
      
      projectCard.innerHTML = `
        <div class="project-image">
          <i class="fas ${project.icon}"></i>
        </div>
        <div class="project-content">
          <div class="project-header">
            <div>
              <h3 class="project-title">${project.title}</h3>
              <span class="project-year">${project.year}</span>
            </div>
          </div>
          <span class="project-category">${project.category}</span>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      `;
      
      projectCard.addEventListener('click', () => openProjectModal(project));
      projectsGrid.appendChild(projectCard);
    });
    
    observeElements('.project-card');
  }
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  // Open project modal
  function openProjectModal(project) {
    modalBody.innerHTML = `
      <div class="project-image" style="height: 300px; margin-bottom: 24px;">
        <i class="fas ${project.icon}"></i>
      </div>
      <h2>${project.title}</h2>
      <div style="display: flex; gap: 16px; margin: 16px 0; flex-wrap: wrap;">
        <span class="project-category">${project.category}</span>
        <span class="project-year" style="padding: 4px 12px; background: var(--color-secondary); border-radius: 4px;">${project.year}</span>
      </div>
      <p style="color: var(--color-text-secondary); line-height: 1.8; margin: 24px 0;">${project.description}</p>
      <h3 style="margin: 24px 0 16px 0;">Technologies Used</h3>
      <div class="project-tech" style="margin-bottom: 24px;">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn--primary" style="margin-top: 16px;">View on GitHub</a>` : ''}
    `;
    
    modal.classList.add('active');
  }
  
  // Close modal
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  renderProjects();
}



// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      isValid = false;
    }
    
    // Validate subject
    if (subject.length < 3) {
      document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
      isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    if (isValid) {
      // Show success message
      formSuccess.classList.add('show');
      form.reset();
      
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }
  });
}

// Intersection Observer for scroll animations
function observeElements(selector) {
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        

      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => observer.observe(el));
}

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


function openResumeInNewTab() {
  const resumeHTML = generateResume();
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function initResumeButton() {
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeBtnHero = document.getElementById('resumeBtnHero');
  
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      downloadResume();
    });
  }
  
  if (resumeBtnHero) {
    resumeBtnHero.addEventListener('click', () => {
      downloadResume();
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initNavigation();
  initTypingEffect();
  initStatsCounter();
  initSkills();
  initProjects();
  initContactForm();
  initResumeButton();
  
  // Observe all fade-in elements
  setTimeout(() => {
    observeElements('.fade-in');
  }, 100);
});

// Resume Download Handler
document.addEventListener("DOMContentLoaded", () => {
  const resumeButtons = [document.getElementById("resumeBtn"), document.getElementById("resumeBtnHero")];
  resumeButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        window.open("documents/RESUME.pdf", "_blank");
      });
    }
  });
});