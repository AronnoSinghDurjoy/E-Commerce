function switchPanel() {
  const container = document.getElementById('container');
  container.classList.toggle('switch-active');
}

// Login form handling
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'user_dashboard.html';
});

document.getElementById('adminForm').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'admin_dashboard.html';
});

// Dashboard scripts
if(window.location.pathname.includes('user_dashboard')) {
  // User dashboard scripts
  document.querySelector('.cart-icon').addEventListener('click', () => {
      document.querySelector('.cart-preview').classList.toggle('show');
  });
}

if(window.location.pathname.includes('admin_dashboard')) {
  // Admin dashboard scripts
  // Initialize charts
  const salesChart = new Chart(document.getElementById('salesChart'), {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Monthly Sales',
              data: [65, 59, 80, 81, 56, 55],
              borderColor: '#4b6cb7',
              tension: 0.1
          }]
      }
  });
}