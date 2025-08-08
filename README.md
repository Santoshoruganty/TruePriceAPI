# 🚀 TruePriceAPI Documentation

A beautifully designed, futuristic API documentation site built with Slate, featuring dark/light theme toggle and modern UI components.

![API Documentation Preview](https://via.placeholder.com/800x400/1e293b/60a5fa?text=TruePriceAPI+Documentation)

## ✨ Features

### 🎨 Modern Design
- **Futuristic UI** with glassmorphism effects and smooth animations
- **Dark/Light theme toggle** with system preference detection
- **Responsive design** optimized for all devices
- **Custom scrollbars** and micro-interactions

### 🛠 Developer Experience
- **Syntax highlighting** for 100+ programming languages
- **Copy-to-clipboard** functionality for code samples
- **Search functionality** with real-time filtering
- **Multi-language code examples** (cURL, JavaScript, Python, Ruby)

### 🚀 Performance & Deployment
- **GitHub Pages ready** - Deploy with a single command
- **Fast loading** with optimized assets
- **SEO optimized** with proper meta tags
- **Progressive enhancement** for better accessibility

## 🏗 Built With

- **Slate** - API documentation framework
- **Sass/SCSS** - Advanced styling with CSS variables
- **Ruby/Middleman** - Static site generation
- **JavaScript** - Interactive features and theme switching

## 🚀 Quick Start

### Prerequisites
- Ruby 2.6+
- Bundler gem

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trueprice-api-docs.git
   cd trueprice-api-docs
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec middleman server
   ```

4. **View your docs**
   Open [http://localhost:4567](http://localhost:4567) in your browser

### 📝 Customization

#### Update Content
- Edit `source/includes/_intro.en.md` for introduction content
- Modify `source/includes/_auth.en.md` for authentication docs
- Add new sections in the `source/includes/` directory

#### Customize Styling
- Colors and themes: `source/stylesheets/_variables.scss`
- Layout and components: `source/stylesheets/screen.css.scss`
- Fonts and typography: Update Google Fonts imports

#### Configure Settings
- Site title and metadata: `source/localizable/index.html.md`
- Navigation and footer: `source/layouts/layout.erb`

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Enable GitHub Actions**
   - The repository includes a pre-configured workflow
   - Push to `main` branch triggers automatic deployment

2. **Manual Deployment**
   ```bash
   # Build the site
   bundle exec middleman build
   
   # Deploy to GitHub Pages
   ./deploy.sh
   ```

### Custom Domain Setup

1. Add a `CNAME` file to the `source` directory:
   ```
   docs.yourdomain.com
   ```

2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🎨 Theme Customization

### Color Schemes
The theme uses CSS custom properties for easy customization:

```scss
// Light theme
--bg-primary-light: #ffffff;
--text-primary-light: #1e293b;
--accent-primary-light: #3b82f6;

// Dark theme  
--bg-primary-dark: #0f172a;
--text-primary-dark: #f8fafc;
--accent-primary-dark: #60a5fa;
```

### Adding New Themes
1. Define new color variables in `_variables.scss`
2. Create theme class in the same file
3. Update theme toggle logic in `_theme.js`

## 📱 Responsive Design

The documentation is fully responsive with breakpoints:
- **Desktop**: > 930px
- **Tablet**: 930px - 650px  
- **Mobile**: < 650px

## 🔧 Advanced Configuration

### Custom Fonts
Update the Google Fonts import in `screen.css.scss`:
```scss
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### Analytics Integration
Add your analytics code to `source/layouts/layout.erb`:
```erb
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Custom JavaScript
Add custom scripts to `source/javascripts/app/` and include them in `all.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on top of [Slate](https://github.com/slatedocs/slate)
- Inspired by modern API documentation sites
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

- 📧 Email: support@trueprice.com
- 💬 Discord: [Join our community](https://discord.gg/trueprice)
- 📖 Wiki: [Additional documentation](https://github.com/yourusername/trueprice-api-docs/wiki)

---

Made with ❤️ for developers who appreciate beautiful documentation.