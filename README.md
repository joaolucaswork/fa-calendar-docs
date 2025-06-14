# CalendarioReino Project Documentation

[![Deploy MkDocs](https://github.com/joaolucaswork/fa-calendar-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/joaolucaswork/fa-calendar-docs/actions/workflows/deploy.yml)
[![Documentation Status](https://img.shields.io/badge/docs-latest-brightgreen.svg)](https://github.com/joaolucaswork/fa-calendar-docs/)
[![PRINCE2](https://img.shields.io/badge/methodology-PRINCE2-blue.svg)](https://prince2.wiki/)
[![MkDocs Material](https://img.shields.io/badge/mkdocs-material-blue.svg)](https://squidfunk.github.io/mkdocs-material/)

Comprehensive project documentation for the **CalendarioReino** Salesforce Lightning Web Component, built with MkDocs Material and following PRINCE2 methodology standards.

## 🚀 Quick Start

### View Documentation Online

Visit the live documentation: **[https://joaolucaswork.github.io/fa-calendar-docs/](https://joaolucaswork.github.io/fa-calendar-docs/)**

- **🇺🇸 English** (Default): [https://joaolucaswork.github.io/fa-calendar-docs/](https://joaolucaswork.github.io/fa-calendar-docs/)
- **🇧🇷 Português**: [https://joaolucaswork.github.io/fa-calendar-docs/pt/](https://joaolucaswork.github.io/fa-calendar-docs/pt/)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/joaolucaswork/fa-calendar-docs.git
   cd fa-calendar-docs
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Serve locally**
   ```bash
   mkdocs serve
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📋 Project Overview

**CalendarioReino** is a sophisticated Salesforce Lightning Web Component that provides comprehensive calendar functionality for meeting management, room booking, and resource optimization.

### Key Features

- **Advanced Calendar Interface**: Built on FullCalendar v3 with rich interactivity
- **Meeting Room Management**: Real-time availability and booking system
- **Multi-User Support**: Calendar sharing and participant management
- **Salesforce Integration**: Native integration with Apex controllers
- **Responsive Design**: Optimized for desktop and mobile devices

### Documentation Structure

This documentation follows **PRINCE2 Project Initiation Documentation (PID)** standards:

```
📁 Documentation Structure
├── 🏢 Project Overview      - Executive summary and objectives
├── 💼 Business Case         - Justification and benefits analysis
├── 🏗️ Technical Architecture - System design and components
├── 📋 Implementation Plan   - Phases and milestones
├── ⚠️ Risk Management      - Risk assessment and mitigation
├── ✅ Quality Management   - Standards and review processes
├── 👥 User Documentation   - Installation and user guides
├── 🔧 API Documentation    - Technical integration details
└── 📊 Project Management   - PRINCE2 processes and governance
```

## 🛠️ Technology Stack

### Documentation Framework

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)**: Modern documentation framework
- **[Mermaid](https://mermaid-js.github.io/)**: Diagram and flowchart generation
- **[GitHub Pages](https://pages.github.com/)**: Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD pipeline

### Project Technology

- **Salesforce Lightning Web Components (LWC)**
- **FullCalendar v3.10.0**: Calendar engine
- **Floating UI**: Dynamic positioning
- **Apex Controllers**: Backend data management
- **JavaScript ES6+**: Modern frontend development

## 📖 Documentation Sections

### For Business Stakeholders

- **[Project Overview](docs/project-overview/index.md)**: Executive summary and strategic alignment
- **[Business Case](docs/business-case/index.md)**: ROI analysis and value proposition
- **[Implementation Plan](docs/implementation/index.md)**: Timeline and resource planning

### For Technical Teams

- **[Technical Architecture](docs/architecture/index.md)**: System design and integration
- **[API Documentation](docs/api/index.md)**: Apex controllers and LWC components
- **[Technical Details](docs/technical/index.md)**: Code analysis and implementation

### For Project Managers

- **[Risk Management](docs/risk-management/index.md)**: Risk register and mitigation strategies
- **[Quality Management](docs/quality/index.md)**: Quality standards and processes
- **[Project Management](docs/project-management/index.md)**: PRINCE2 methodology implementation

### For End Users

- **[Quick Start Guide](docs/getting-started/quick-start.md)**: Get started in 5 minutes
- **[User Manual](docs/user-guide/manual.md)**: Comprehensive feature guide
- **[Troubleshooting](docs/user-guide/troubleshooting.md)**: Common issues and solutions

## � Style and Design

This documentation site is styled to **match the official MkDocs Material site** for a consistent, professional experience:

### Header and Navigation Features

- **Sticky Navigation Tabs**: Navigation tabs remain visible when scrolling
- **Instant Loading**: Fast page transitions without full page reloads  
- **Progress Indicators**: Loading progress bar for slower connections
- **Navigation Expansion**: Collapsible sidebar sections for easy browsing
- **Anchor Tracking**: URL updates automatically as you scroll through sections
- **Back-to-Top Button**: Quick return to page top
- **Search Integration**: Advanced search with highlighting and suggestions

### Theme Configuration

- **Material Design**: Clean, modern interface following Google's Material Design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Light/Dark Themes**: Automatic theme switching with user preference
- **Professional Typography**: Roboto font family for optimal readability
- **Icon Integration**: Comprehensive Material Design icon set

### Performance Optimizations

- **Minified HTML/CSS**: Compressed output for faster loading
- **Instant Prefetching**: Pages preload on hover for immediate navigation
- **Optimized Images**: Proper sizing and format optimization
- **Service Worker Ready**: PWA-compatible for offline access

## �🌐 Language Support

This documentation is available in multiple languages with **English as the default**:

- **�🇸 English** (Default): Complete documentation at root level
- **�🇧🇷 Português** (Secondary): Full Portuguese translation available

### Language Switching

The documentation includes a language switcher in the top navigation that allows seamless switching between:
- **English**: All content in English at `/fa-calendar-docs/`
- **Portuguese**: All content in Portuguese at `/fa-calendar-docs/pt/`

### Building Multi-language Documentation

```bash
# Build English version (default)
mkdocs build --clean

# Build Portuguese version to /pt subdirectory  
mkdocs build --config-file mkdocs-pt.yml --site-dir site/pt --clean

# Build both versions (deployment process)
mkdocs build --clean && mkdocs build --config-file mkdocs-pt.yml --site-dir site/pt

# Serve English for development
mkdocs serve

# Serve Portuguese for development
mkdocs serve --config-file mkdocs-pt.yml
```

### Documentation Structure

The multilingual setup uses a hybrid approach optimized for GitHub Pages:

```
docs/
├── index.md                   # English (Default - Root)
├── getting-started/           # English content
├── user-guide/               # English content  
├── architecture/             # English content
├── business-case/            # English content
├── project-overview/         # English content
├── quality/                  # English content
├── risk-management/          # English content
├── technical/                # English content
├── api/                      # English content
└── pt/                       # Portuguese (Secondary Language)
    ├── index.md              # Portuguese homepage
    ├── getting-started/      # Portuguese content
    ├── user-guide/           # Portuguese content
    ├── architecture/         # Portuguese content
    ├── business-case/        # Portuguese content
    ├── project-overview/     # Portuguese content
    ├── quality/              # Portuguese content
    ├── risk-management/      # Portuguese content
    ├── technical/            # Portuguese content
    ├── api/                  # Portuguese content
    └── appendices/           # Portuguese content
```

### Configuration Files

- **`mkdocs.yml`**: English configuration (default site)
- **`mkdocs-pt.yml`**: Portuguese configuration (uses `docs_dir: docs/pt`)

## 🔧 Development

### Building Documentation

```bash
# Install dependencies
pip install -r requirements.txt

# Build English documentation
mkdocs build

# Build Portuguese documentation  
mkdocs build --config-file mkdocs-pt.yml --site-dir site/pt

# Serve English with live reload
mkdocs serve

# Serve Portuguese with live reload
mkdocs serve --config-file mkdocs-pt.yml
```

### Deployment

Deployment is **fully automated** via GitHub Actions:

1. **Push to main branch** - Triggers automatic deployment
2. **GitHub Actions** builds both English and Portuguese versions
3. **GitHub Pages** serves the multilingual site automatically

**Live Site**: [https://joaolucaswork.github.io/fa-calendar-docs/](https://joaolucaswork.github.io/fa-calendar-docs/)

### Project Structure

```
project-documentation/
├── docs/                    # Documentation source files
│   ├── index.md            # Homepage
│   ├── project-overview/   # Project overview section
│   ├── business-case/      # Business case documentation
│   ├── architecture/       # Technical architecture
│   ├── implementation/     # Implementation planning
│   ├── risk-management/    # Risk management
│   ├── quality/           # Quality management
│   ├── user-guide/        # User documentation
│   ├── api/               # API documentation
│   ├── technical/         # Technical details
│   ├── stylesheets/       # Custom CSS
│   └── javascripts/       # Custom JavaScript
├── overrides/             # Theme customizations
├── .github/               # GitHub Actions workflows
├── mkdocs.yml            # MkDocs configuration
├── requirements.txt      # Python dependencies
└── README.md            # This file
```

### Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-section`
3. **Make your changes**: Edit documentation files
4. **Test locally**: `mkdocs serve`
5. **Commit changes**: `git commit -am 'Add new section'`
6. **Push to branch**: `git push origin feature/new-section`
7. **Create Pull Request**

## 📊 Project Metrics

### Documentation Coverage

- **Business Documentation**: ✅ Complete
- **Technical Documentation**: ✅ Complete
- **User Documentation**: ✅ Complete
- **API Documentation**: ✅ Complete
- **Project Management**: ✅ Complete

### Quality Metrics

- **PRINCE2 Compliance**: ✅ Full compliance
- **Accessibility**: ✅ WCAG 2.1 AA
- **Mobile Responsive**: ✅ Fully responsive
- **Search Functionality**: ✅ Full-text search
- **Cross-references**: ✅ Complete linking

## 🤝 Support

### Getting Help

- **📖 Documentation**: Comprehensive guides available online
- **🐛 Issues**: Report bugs via GitHub Issues
- **💬 Discussions**: Join GitHub Discussions for questions
- **📧 Contact**: Reach out to the Reino Capital

### Training and Resources

- **Quick Start**: 5-minute setup guide
- **Video Tutorials**: Step-by-step walkthroughs
- **Best Practices**: Implementation guidelines
- **Community**: User community and forums

## 📄 License

This documentation is licensed under the [MIT License](LICENSE).

The CalendarioReino project follows Salesforce development best practices and licensing terms.

## 🏆 Acknowledgments

- **PRINCE2 Methodology**: Project management framework
- **MkDocs Material**: Documentation framework
- **Salesforce Platform**: Development platform
- **Open Source Community**: Various libraries and tools

---

**Documentation Version**: 2.0.0  
**Last Updated**: 2025-06-14  
**Status**: ✅ Production Ready - Multilingual Setup Complete  
**Maintainer**: Reino Capital

**🎉 Recent Updates**: 
- ✅ Complete multilingual documentation (English/Portuguese)
- ✅ English as default language at root  
- ✅ Automated GitHub Actions deployment
- ✅ Language switcher working correctly
- ✅ All navigation links resolved
