const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");
const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

// Toggle functionality
registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateName(name) {
  return name.length >= 2;
}

// Sign Up form validation and submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let isValid = true;

  // Name validation
  const name = document.getElementById("signupName").value;
  const nameError = document.getElementById("nameError");
  if (!validateName(name)) {
    nameError.textContent = "Name must be at least 2 characters long";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("signupEmail").value;
  const emailError = document.getElementById("signupEmailError");
  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("signupPassword").value;
  const passwordError = document.getElementById("signupPasswordError");
  if (!validatePassword(password)) {
    passwordError.textContent = "Password must be at least 6 characters long";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    const formData = new FormData();
    formData.append('name', document.getElementById("signupName").value.trim());
    formData.append('email', document.getElementById("signupEmail").value.trim());
    formData.append('password', document.getElementById("signupPassword").value);

    try {
      const response = await fetch('signup.php', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        //alert(data.message);
        signupForm.reset();
        window.location.href = 'index.php';
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration. Please check the console for details.');
    }
  }
});

// Sign In form validation and submission
signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let isValid = true;

  // Email validation
  const email = document.getElementById("signinEmail").value;
  const emailError = document.getElementById("signinEmailError");
  if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("signinPassword").value;
  const passwordError = document.getElementById("signinPasswordError");
  if (!validatePassword(password)) {
    passwordError.textContent = "Password must be at least 6 characters long";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    const formData = new FormData();
    formData.append('email', document.getElementById("signinEmail").value.trim());
    formData.append('password', document.getElementById("signinPassword").value);

    try {
      const response = await fetch('login.php', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        //alert(data.message);
        signinForm.reset();
        window.location.href = 'index.php';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login. Please check the console for details.');
    }
  }
});