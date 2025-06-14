# Installation Guide

This guide will help you set up the CalendarioReino documentation site locally or deploy it to GitHub Pages.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+**: [Download Python](https://python.org/downloads/)
- **Git**: [Download Git](https://git-scm.com/downloads/)
- **Text Editor**: VS Code, Sublime Text, or similar

## Local Installation

### Step 1: Clone the Repository

```bash
# Clone the documentation repository
git clone https://github.com/joaolucaswork/fa-calendar-docs.git

# Navigate to the project directory
cd fa-calendar-docs
```

### Multi-language Setup

This documentation supports both Portuguese and English:

```bash
# Setup both language versions
python build-multilang.py setup

# Build both versions
python build-multilang.py build

# Serve both versions for development
python build-multilang.py serve
```

### Step 2: Set Up Python Environment

**Option A: Using Virtual Environment (Recommended)**

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

**Option B: Using Conda**

```bash
# Create conda environment
conda create -n mkdocs-env python=3.11

# Activate environment
conda activate mkdocs-env
```

### Step 3: Install Dependencies

```bash
# Install required packages
pip install -r requirements.txt

# Verify installation
mkdocs --version
```

### Step 4: Serve Documentation Locally

```bash
# Start development server
mkdocs serve

# Open in browser
# Navigate to: http://localhost:8000
```

## GitHub Pages Deployment

### Step 1: Fork the Repository

1. Go to the repository on GitHub
2. Click the "Fork" button
3. Clone your forked repository

### Step 2: Configure GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy on push to main

### Step 3: Update Configuration

Edit `mkdocs.yml` to update your specific settings:

```yaml
# Update these values
site_name: Reino Capital Calendar Documentation
site_url: https://github.com/joaolucaswork/fa-calendar-docs
repo_name: joaolucaswork/fa-calendar-docs
repo_url: https://github.com/joaolucaswork/fa-calendar-docs
```

### Step 4: Push Changes

```bash
# Add changes
git add .

# Commit changes
git commit -m "Initial documentation setup"

# Push to GitHub
git push origin main
```

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the documentation
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Customization

### Updating Content

1. **Edit Markdown Files**: Modify files in the `docs/` directory
2. **Add New Pages**: Create new `.md` files and update `mkdocs.yml` navigation
3. **Update Styles**: Modify CSS files in `docs/stylesheets/`
4. **Add JavaScript**: Update files in `docs/javascripts/`

### Configuration Options

Key configuration options in `mkdocs.yml`:

```yaml
# Site Information
site_name: Your Site Name
site_description: Your site description
site_author: Your Name

# Theme Configuration
theme:
  name: material
  palette:
    - scheme: default
      primary: indigo
      accent: indigo

# Navigation Structure
nav:
  - Home: index.md
  - Your Section: your-section/index.md
```

## Troubleshooting

### Common Issues

**Issue: `mkdocs: command not found`**
```bash
# Solution: Ensure Python and pip are installed
pip install mkdocs mkdocs-material
```

**Issue: Module import errors**
```bash
# Solution: Install all dependencies
pip install -r requirements.txt
```

**Issue: GitHub Pages not updating**
```bash
# Solution: Check GitHub Actions workflow
# Go to Actions tab in your repository
# Verify the workflow completed successfully
```

**Issue: Local server not starting**
```bash
# Solution: Check if port 8000 is available
mkdocs serve --dev-addr=127.0.0.1:8001
```

### Getting Help

- Check the [MkDocs documentation](https://mkdocs.org/)
- Review [Material for MkDocs documentation](https://squidfunk.github.io/mkdocs-material/)
- Open an issue in the repository

## Development Workflow

### Making Changes

1. **Create Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Edit documentation files
3. **Test Locally**: `mkdocs serve`
4. **Commit Changes**: `git commit -am "Your changes"`
5. **Push Branch**: `git push origin feature/your-feature`
6. **Create Pull Request**: Submit for review

### Building for Production

```bash
# Clean build
mkdocs build --clean

# Strict build (fails on warnings)
mkdocs build --strict

# Verbose output
mkdocs build --verbose
```

## Advanced Configuration

### Custom Domain

To use a custom domain with GitHub Pages:

1. Add `CNAME` file to `docs/` directory:
   ```
   your-domain.com
   ```

2. Configure DNS settings with your domain provider

3. Update `site_url` in `mkdocs.yml`:
   ```yaml
   site_url: https://your-domain.com
   ```

### Analytics Integration

Add Google Analytics to `mkdocs.yml`:

```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

### Social Cards

Enable social media cards:

```yaml
plugins:
  - social:
      cards_layout_options:
        background_color: "#1976d2"
```

## Performance Optimization

### Build Optimization

```yaml
# Enable minification
plugins:
  - minify:
      minify_html: true
      minify_js: true
      minify_css: true
```

### Image Optimization

- Use WebP format for images when possible
- Compress images before adding to documentation
- Use appropriate image sizes for different contexts

## Security Considerations

### Content Security Policy

The documentation includes CSP headers for security:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### Dependency Updates

Regularly update dependencies:

```bash
# Check for outdated packages
pip list --outdated

# Update requirements.txt
pip freeze > requirements.txt
```

---

**Installation Status**: ✅ Ready  
**Estimated Setup Time**: 15 minutes  
**Difficulty Level**: Beginner  
**Support**: Available via GitHub Issues
