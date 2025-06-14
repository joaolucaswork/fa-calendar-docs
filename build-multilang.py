#!/usr/bin/env python3
"""
Multi-language documentation builder for CalendarioReino project.
Builds both Portuguese (default) and English versions of the documentation.
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

def run_command(command, cwd=None):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}")
        print(f"Error output: {e.stderr}")
        sys.exit(1)

def build_portuguese():
    """Build Portuguese version (default)."""
    print("🇧🇷 Building Portuguese documentation...")
    
    # Build with main mkdocs.yml (Portuguese)
    run_command("mkdocs build --clean")
    
    print("✅ Portuguese documentation built successfully!")

def build_english():
    """Build English version."""
    print("🇺🇸 Building English documentation...")
    
    # Check if English config exists
    if not os.path.exists("mkdocs-en.yml"):
        print("❌ mkdocs-en.yml not found. Creating basic English config...")
        create_english_config()
    
    # Build English version
    run_command("mkdocs build --config-file mkdocs-en.yml --site-dir site/en")
    
    print("✅ English documentation built successfully!")

def create_english_config():
    """Create English configuration file if it doesn't exist."""
    english_config = """
# English version configuration
site_name: CalendarioReino Project Documentation (English)
site_description: Comprehensive project documentation for the CalendarioReino Salesforce Lightning Web Component
site_url: https://github.com/joaolucaswork/fa-calendar-docs/en

# Inherit from main config but override language settings
INHERIT: mkdocs.yml

theme:
  language: en

docs_dir: docs/en

nav:
  - Home: index.md
  - Quick Start: getting-started/quick-start.md
  - Project Overview: project-overview/index.md
  - Business Case: business-case/index.md
  - Technical Architecture: architecture/index.md
  - Risk Management: risk-management/index.md
  - Quality Management: quality/index.md
  - User Guide: user-guide/index.md
  - API Documentation: api/index.md
  - Technical Details: technical/index.md

extra:
  alternate:
    - name: English
      link: ./
      lang: en
    - name: Português
      link: ../
      lang: pt
"""
    
    with open("mkdocs-en.yml", "w", encoding="utf-8") as f:
        f.write(english_config.strip())

def setup_english_docs():
    """Set up English documentation structure."""
    print("📁 Setting up English documentation structure...")
    
    # Create English docs directory if it doesn't exist
    en_docs_dir = Path("docs/en")
    en_docs_dir.mkdir(exist_ok=True)
    
    # Copy main English files if they don't exist
    main_docs = Path("docs")
    
    # List of files to copy to English version (keeping English content)
    english_files = [
        "getting-started/quick-start.md",
        "project-overview/charter.md",
        "business-case/index.md",
        "architecture/index.md",
        "risk-management/index.md",
        "quality/index.md",
        "technical/features.md"
    ]
    
    for file_path in english_files:
        src_file = main_docs / file_path
        dst_file = en_docs_dir / file_path
        
        # Create directory if it doesn't exist
        dst_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Copy file if source exists and destination doesn't
        if src_file.exists() and not dst_file.exists():
            shutil.copy2(src_file, dst_file)
            print(f"  📄 Copied {file_path}")
    
    # Create English index.md if it doesn't exist
    en_index = en_docs_dir / "index.md"
    if not en_index.exists():
        create_english_index()

def create_english_index():
    """Create English index page."""
    english_index_content = """# CalendarioReino Project Documentation

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } **Quick Start**

    ---

    Get up and running with CalendarioReino in minutes

    [:octicons-arrow-right-24: Getting Started](getting-started/quick-start.md)

-   :material-chart-line:{ .lg .middle } **Business Case**

    ---

    Understand the business value and ROI of the project

    [:octicons-arrow-right-24: Business Justification](business-case/index.md)

-   :material-cog:{ .lg .middle } **Technical Architecture**

    ---

    Deep dive into the system design and components

    [:octicons-arrow-right-24: Architecture Overview](architecture/index.md)

-   :material-account-group:{ .lg .middle } **User Guide**

    ---

    Complete user manual and troubleshooting guide

    [:octicons-arrow-right-24: User Documentation](user-guide/index.md)

</div>

## Welcome to CalendarioReino Documentation

**CalendarioReino** is a sophisticated Salesforce Lightning Web Component (LWC) that provides a comprehensive calendar solution for managing meetings, appointments, and room bookings within the Salesforce ecosystem.

### Language Support

This documentation is available in multiple languages:

- **English** - Primary documentation language
- **Português** - Documentação em português brasileiro

Use the language selector in the header to switch between languages.

---

**Last Updated**: {{ git_revision_date_localized }}  
**Version**: 1.0.0  
**Status**: :material-check-circle:{ .green } Active Development
"""
    
    with open("docs/en/index.md", "w", encoding="utf-8") as f:
        f.write(english_index_content)
    
    print("  📄 Created English index.md")

def serve_documentation():
    """Serve documentation for development."""
    print("🚀 Starting development server...")
    print("📖 Portuguese version: http://localhost:8000")
    print("📖 English version: http://localhost:8000/en")
    print("Press Ctrl+C to stop the server")
    
    try:
        run_command("mkdocs serve")
    except KeyboardInterrupt:
        print("\n👋 Development server stopped")

def deploy_to_github():
    """Deploy to GitHub Pages."""
    print("🚀 Deploying to GitHub Pages...")
    
    # Build both versions
    build_portuguese()
    build_english()
    
    # Deploy using mkdocs
    run_command("mkdocs gh-deploy --force")
    
    print("✅ Deployed to GitHub Pages successfully!")

def main():
    """Main function."""
    if len(sys.argv) < 2:
        print("📚 CalendarioReino Documentation Builder")
        print("\nUsage:")
        print("  python build-multilang.py build     - Build both language versions")
        print("  python build-multilang.py serve     - Serve for development")
        print("  python build-multilang.py deploy    - Deploy to GitHub Pages")
        print("  python build-multilang.py setup     - Setup English documentation structure")
        sys.exit(1)
    
    command = sys.argv[1].lower()
    
    if command == "build":
        setup_english_docs()
        build_portuguese()
        build_english()
        print("🎉 All documentation built successfully!")
        
    elif command == "serve":
        setup_english_docs()
        serve_documentation()
        
    elif command == "deploy":
        setup_english_docs()
        deploy_to_github()
        
    elif command == "setup":
        setup_english_docs()
        print("🎉 English documentation structure set up!")
        
    else:
        print(f"❌ Unknown command: {command}")
        sys.exit(1)

if __name__ == "__main__":
    main()
