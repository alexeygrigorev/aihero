# AI Agent Course Landing Page

Jekyll-based landing page for the "7-Day AI Agents Email Crash-Course".

## Local Development

### Prerequisites

- Ruby 3.0+ 
- Bundler gem
- Jekyll 4.0+

### Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Start development server:**
   ```bash
   bundle exec jekyll serve
   ```
   
3. **Access locally:**
   ```
   http://localhost:4000
   ```

4. **Auto-regeneration:**
   Jekyll watches for file changes and rebuilds automatically. Browser refresh required for updates.

### Build for Production

```bash
# Clean previous builds
bundle exec jekyll clean

# Generate production build
bundle exec jekyll build
```

Output directory: `_site/`

## Project Structure

```
aihero/
├── _config.yml                 # Jekyll configuration
├── _layouts/
│   └── default.html            # Base HTML template
├── _sass/
│   ├── _styles.scss            # Main stylesheet (1,328 lines)
│   ├── _courses.scss           # Course-specific styles
│   ├── _layout.scss            # Layout utilities
│   └── _performance.scss       # Performance optimizations
├── _site/                      # Generated site (git ignored)
├── assets/
│   ├── css/
│   │   └── main.scss           # SCSS entry point
│   └── js/
│       └── main.js             # JavaScript functionality
├── images/
│   ├── Alexey-photo.jpeg       # Instructor photo (160x160px)
│   └── logos/                  # Course logos and branding
├── public/                     # Static assets
├── index.html                  # Main landing page (630 lines)
├── Gemfile                     # Ruby dependencies
├── Gemfile.lock                # Locked dependency versions
└── README.md                   # This file
```

## Technical Stack

- **Static Site Generator:** Jekyll 4.x
- **Styling:** SCSS with CSS custom properties
- **JavaScript:** Vanilla JS (minimal)
- **Email Integration:** Mailchimp embedded forms
- **Responsive Design:** Mobile-first CSS Grid and Flexbox

## Configuration

### Jekyll Configuration (`_config.yml`)
- Site metadata and build settings
- Plugin configurations
- SCSS compilation settings

### Styling Architecture (`_sass/_styles.scss`)
- CSS custom properties system (lines 1-90)
- Component-based architecture
- Responsive breakpoints: 768px, 480px
- Minimalistic design system

### Email Integration
- Mailchimp form action: `https://club.us19.list-manage.com/subscribe/post`
- Form opens thank you page in new window
- Client-side validation included

## Key Components

### Landing Page Sections (`index.html`)
- **Hero Section** (lines 7-80): Primary CTA and value proposition
- **Benefits Grid** (lines 83-121): Course value points
- **Curriculum Timeline** (lines 194-342): 7-day breakdown
- **Instructor Profile** (lines 388-448): Alexey's bio and credentials
- **Testimonials** (lines 451-487): Social proof
- **FAQ** (lines 490-566): Common questions
- **Final CTA** (lines 568-582): Secondary conversion point

### Styling System
- **Color Variables** (lines 4-16): Primary blue (#4a90e2), grays, success green
- **Typography Scale** (lines 60-69): Consistent font sizing
- **Spacing System** (lines 49-58): 8-point grid system
- **Component Styles** (lines 128-1328): All UI components

## Development Workflow

### Making Content Changes
1. Edit `index.html` for content updates
2. Modify `_sass/_styles.scss` for styling changes  
3. Test locally with `bundle exec jekyll serve`
4. Verify responsive behavior at different breakpoints

### Styling Updates
- CSS custom properties in `_sass/_styles.scss` (lines 1-90)
- Component styles follow BEM-like methodology
- Mobile-first responsive design
- Performance optimized (prefers-reduced-motion support)

### Performance Considerations
- Minified CSS output (~50KB)
- Optimized images (Alexey photo: 160x160px)
- Minimal JavaScript footprint
- Static site generation for fast loading

## Troubleshooting

### Common Build Issues
```bash
# Clear Jekyll cache
bundle exec jekyll clean

# Update dependencies
bundle update

# Check Ruby version
ruby --version

# Verify Jekyll installation
bundle exec jekyll --version
```

### SCSS Compilation Errors
- Check syntax in `_sass/_styles.scss`
- Verify CSS custom property usage
- Ensure proper nesting levels

### Development Server Issues
- Port 4000 already in use: Add `--port 4001`
- File watching not working: Add `--force_polling`
- Slow builds: Check for large files in `_site/`

## Deployment

The `_site/` directory contains the complete static website ready for deployment to any web server or CDN.

**Recommended deployment targets:**
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

## Dependencies

### Ruby Gems (see `Gemfile`)
- `jekyll` - Static site generator
- `jekyll-sass-converter` - SCSS processing
- Additional plugins as specified in `_config.yml`

### Browser Support
- Modern browsers (ES6+ support)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers