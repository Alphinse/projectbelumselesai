// Add JS here
document.getElementById("nav-toggle").addEventListener("click", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuIcon.classList.toggle("open");
    mobileMenu.classList.toggle("hidden");
  });
  document.getElementById("daftar-button").onclick = function () {
    document.getElementById("form-modal").classList.remove("hidden");
  };
  
  document.getElementById("back-button").onclick = function () {
    document.getElementById("form-modal").classList.add("hidden");
    document.getElementById("daftar-form").reset();
    document.getElementById("form-message").classList.add("hidden");
  };
  
  document.getElementById("daftar-form").onsubmit = function (event) {
    event.preventDefault();
    const closeButton = document.getElementById("close-button");
    const formModal = document.getElementById("form-modal");
  
    closeButton.addEventListener("click", () => {
      formModal.classList.add("hidden");
    });
  
    document.getElementById("form-message").textContent = "Pendaftaran berhasil!";
    document.getElementById("form-message").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("form-modal").classList.add("hidden");
      document.getElementById("daftar-form").reset();
      document.getElementById("form-message").classList.add("hidden");
    }, 2000);
  };
  const closeButton = document.getElementById('close-button');
  const modal = document.getElementById('form-modal');
  
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  // validasi 
  const form = document.getElementById('daftar-form');
  const nikInput = document.getElementById('nik');
  const kkInput = document.getElementById('kk');
  const emailInput = document.getElementById('email');
  const fotoInput = document.getElementById('foto');
  const ktpInput = document.getElementById('ktp');
  const formMessage = document.getElementById('form-message');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    let isValid = true;
  
    // NIK Validation (16 digits)
    if (nikInput.value.length !== 16 || isNaN(nikInput.value)) {
      alert('NIK harus berupa 16 digit angka.');
      isValid = false;
      nikInput.focus();
    }
  
    // KK Validation (16 digits)
    if (kkInput.value.length !== 16 || isNaN(kkInput.value)) {
      alert('Nomor Kartu Keluarga harus berupa 16 digit angka.');
      isValid = false;
      kkInput.focus();
    }
  
    // Email Validation (format@gmail.com)
    const emailRegex = /^[^\s@]+@[gmail\.com]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Email harus dalam format @gmail.com.');
      isValid = false;
      emailInput.focus();
    }
  
    // Foto Validation (Required)
    if (!fotoInput.files.length) {
      alert('Foto wajib diisi.');
      isValid = false;
      fotoInput.focus();
    }
  
    // KTP Validation (Required, PNG/PDF)
    if (!ktpInput.files.length) {
      alert('Upload KTP (PNG/PDF) wajib diisi.');
      isValid = false;
      ktpInput.focus();
    } else {
      const allowedExtensions = ['.png', '.pdf'];
      const fileExtension = ktpInput.files[0].name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        alert('Upload KTP hanya menerima file PNG atau PDF.');
        isValid = false;
        ktpInput.value = '';
      }
    }
  
    // Submit form if all validations pass
    if (isValid) {
      // Simulate successful or failed registration here
      // Replace this with your actual form submission logic
      const isSuccessful = Math.random() > 0.5; // Randomly determine success
  
      if (isSuccessful) {
        formMessage.textContent = 'Pendaftaran Berhasil!';
        formMessage.classList.remove('text-red-500'); // Remove red color
        formMessage.classList.add('text-green-500'); // Add green color
        formMessage.hidden = false; // Show the message
  
        setTimeout(() => {
          formMessage.hidden = true; // Hide the message after a delay
        }, 3000); // Timeout in milliseconds (3 seconds in this case)
      } else {
        formMessage.textContent = 'Pendaftaran Gagal. Silahkan coba lagi.';
        formMessage.classList.remove('text-green-500'); // Remove green color
        formMessage.classList.add('text-red-500'); // Add red color
        formMessage.hidden = false;
  
        setTimeout(() => {
          formMessage.hidden = true;
        }, 3000);
      }
    }
  }); 
  
  
  
  