import './style.css'

// Configuration
const CONFIG = {
  dataUrl: '/data.json',
  doctorsPerView: 4,
}

// State
let state = {
  doctors: [],
  exams: [],
  covenants: [],
  currentDoctorIndex: 0
}

// Elements
const elements = {
  header: document.getElementById('header'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  doctorsContainer: document.getElementById('doctors-container'),
  examsContainer: document.getElementById('exams-container'),
  covenantsContainer: document.getElementById('covenants-container'),
  faqItems: document.querySelectorAll('.faq-item'),
  prevDocBtn: document.getElementById('prev-doc'),
  nextDocBtn: document.getElementById('next-doc'),
}

// Logic
async function init() {
  await fetchData()
  renderDoctors()
  renderExams()
  renderCovenants()
  setupEventListeners()
  setupScrollEffects()
}

async function fetchData() {
  try {
    const response = await fetch(CONFIG.dataUrl)
    const data = await response.json()
    state.doctors = data.doctors
    state.exams = data.exams
    state.covenants = data.covenants
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function renderDoctors() {
  if (!elements.doctorsContainer) return

  // Show ALL doctors at once
  const displayDoctors = state.doctors

  elements.doctorsContainer.style.opacity = '0'

  setTimeout(() => {
    elements.doctorsContainer.innerHTML = displayDoctors.map(doctor => `
      <div class="animate-fade-up">
        <div class="group relative bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="aspect-[3/4] overflow-hidden">
                <img src="/assets/images/doctors/${doctor.foto}" 
                     alt="${doctor.name}" 
                     class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                     onerror="this.src='/assets/images/doctor.png'">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <p class="text-secondary font-bold text-[10px] uppercase tracking-widest mb-2 leading-tight">${doctor.registro}</p>
                <a href="https://wa.me/5585996996266?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+${encodeURIComponent(doctor.name)}" 
                   class="bg-white text-primary font-bold py-3 px-6 rounded-2xl text-center hover:bg-secondary hover:text-white transition-all text-sm">
                    Agendar Horário
                </a>
            </div>
            <div class="p-6 bg-white group-hover:bg-gray-50 transition-colors">
                <h4 class="text-lg font-black text-primary mb-1 leading-tight line-clamp-1">${doctor.name}</h4>
                <p class="text-gray-500 font-medium text-xs mb-2">${doctor.especialidade}</p>
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">${doctor.registro}</p>
            </div>
        </div>
      </div>
    `).join('')
    elements.doctorsContainer.style.opacity = '1'
  }, 300)
}

function renderExams() {
  if (!elements.examsContainer) return
  elements.examsContainer.innerHTML = state.exams.map((exam, index) => `
    <div class="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group animate-fade-up" style="animation-delay: ${index * 0.1}s">
        <div class="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
            <i class="fas fa-file-waveform text-xl"></i>
        </div>
        <h4 class="text-2xl font-bold mb-4">${exam.name}</h4>
        <p class="text-white/60 leading-relaxed mb-6">${exam.description}</p>
        <a href="https://wa.me/5585996996266?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+exame+${encodeURIComponent(exam.name)}" 
           class="inline-flex items-center text-secondary font-bold hover:gap-3 transition-all">
            Saiba mais <i class="fas fa-arrow-right ml-2"></i>
        </a>
    </div>
  `).join('')
}

function renderCovenants() {
  if (!elements.covenantsContainer) return
  elements.covenantsContainer.innerHTML = state.covenants.map(cov => `
    <img src="/assets/images/${cov.src.split('/').pop()}" alt="${cov.name}" class="h-10 md:h-14 w-auto grayscale contrast-125 brightness-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
  `).join('')
}

function getDoctorsPerPage() {
  if (window.innerWidth < 768) return 2
  if (window.innerWidth < 1024) return 3
  return 4
}

function setupEventListeners() {
  // Mobile Menu
  elements.mobileMenuBtn?.addEventListener('click', () => {
    elements.mobileMenu.classList.toggle('hidden')
  })

  // Sticky Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      elements.header.classList.add('bg-white/10', 'backdrop-blur-md', 'py-2')
    } else {
      elements.header.classList.remove('bg-white/10', 'backdrop-blur-md', 'py-2')
    }
  })

  // FAQ Toggle
  document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement
      const isOpen = item.classList.contains('active')

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active')
        i.querySelector('.faq-content').style.maxHeight = '0'
      })

      if (!isOpen) {
        item.classList.add('active')
        const content = item.querySelector('.faq-content')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  // Doctor Pagination
  elements.nextDocBtn?.addEventListener('click', () => {
    const perPage = getDoctorsPerPage()
    if (state.currentDoctorIndex + perPage < state.doctors.length) {
      state.currentDoctorIndex += 1
      renderDoctors()
    }
  })

  elements.prevDocBtn?.addEventListener('click', () => {
    if (state.currentDoctorIndex > 0) {
      state.currentDoctorIndex -= 1
      renderDoctors()
    }
  })

  // Responsive re-render
  window.addEventListener('resize', () => {
    renderDoctors()
  })

  // Smooth Scroll offset adjustment
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const headerOffset = 100
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Close mobile menu
        elements.mobileMenu.classList.add('hidden')
      }
    })
  })
}

function setupScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
}

// Start
init()
