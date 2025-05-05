
export const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    
    // Remove from DOM after animation
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, 3000);
};
