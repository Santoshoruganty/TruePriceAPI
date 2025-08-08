//= require ../lib/_jquery

/*
Theme Toggle Functionality
*/
;(function () {
  'use strict';

  var currentTheme = 'light';
  var themeToggle;

  function initTheme() {
    // Check for saved theme preference or default to light
    var savedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Apply theme
    applyTheme(currentTheme);
    
    // Create theme toggle button
    createThemeToggle();
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
        updateThemeToggle();
      }
    });
  }

  function createThemeToggle() {
    themeToggle = $('<button class="theme-toggle" title="Toggle theme">' +
      '<span class="theme-icon">' + getThemeIcon() + '</span>' +
      '</button>');
    
    themeToggle.on('click', toggleTheme);
    $('body').append(themeToggle);
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateThemeToggle();
    
    // Save preference
    localStorage.setItem('theme', currentTheme);
    
    // Add a subtle animation
    $('body').addClass('theme-transitioning');
    setTimeout(function() {
      $('body').removeClass('theme-transitioning');
    }, 300);
  }

  function applyTheme(theme) {
    $('body').removeClass('theme-light theme-dark dark-theme');
    
    if (theme === 'dark') {
      $('body').addClass('theme-dark dark-theme');
    } else {
      $('body').addClass('theme-light');
    }
  }

  function updateThemeToggle() {
    if (themeToggle) {
      themeToggle.find('.theme-icon').html(getThemeIcon());
    }
  }

  function getThemeIcon() {
    return currentTheme === 'light' ? '🌙' : '☀️';
  }

  // Initialize when DOM is ready
  $(document).ready(function() {
    initTheme();
    
    // Add smooth transitions for theme changes
    $('<style>')
      .prop('type', 'text/css')
      .html(`
        .theme-transitioning * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
        }
      `)
      .appendTo('head');
  });

  // Export for global access
  window.themeManager = {
    getCurrentTheme: function() { return currentTheme; },
    setTheme: applyTheme,
    toggleTheme: toggleTheme
  };
})();