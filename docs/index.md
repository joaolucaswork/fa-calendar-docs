# CalendarioReino Project Documentation

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } **Quick Start**

    ---

    Get up and running with CalendarioReino in minutes

    [:octicons-arrow-right-24: Getting Started](pt/getting-started/quick-start.md)

-   :material-chart-line:{ .lg .middle } **Business Case**

    ---

    Understand the business value and ROI of the project

    [:octicons-arrow-right-24: Business Justification](pt/business-case/index.md)

-   :material-cog:{ .lg .middle } **Technical Architecture**

    ---

    Deep dive into the system design and components

    [:octicons-arrow-right-24: Architecture Overview](pt/architecture/index.md)

-   :material-account-group:{ .lg .middle } **User Guide**

    ---

    Complete user manual and troubleshooting guide

    [:octicons-arrow-right-24: User Documentation](pt/user-guide/index.md)

</div>

## Welcome to CalendarioReino Documentation

**CalendarioReino** is a sophisticated Salesforce Lightning Web Component (LWC) that provides a comprehensive calendar solution for managing meetings, appointments, and room bookings within the Salesforce ecosystem.

### Project Overview

This documentation follows **PRINCE2 methodology standards** and provides comprehensive information for:

- **Business Stakeholders**: Executive summaries, business case, and ROI analysis
- **Project Managers**: Implementation plans, risk management, and quality assurance
- **Developers**: Technical architecture, API documentation, and code examples
- **End Users**: Installation guides, user manuals, and troubleshooting

### Key Features

!!! info "Core Capabilities"
    
    - **Advanced Calendar Interface**: Built on FullCalendar v3 with rich interactivity
    - **Meeting Room Management**: Real-time availability and booking system
    - **Multi-User Support**: Calendar sharing and participant management
    - **Flexible Scheduling**: Support for online, in-person, and phone meetings
    - **Integration Ready**: Seamless Salesforce integration with Apex controllers
    - **Responsive Design**: Optimized for desktop and mobile devices

### Architecture Highlights

```mermaid
graph TB
    A[User Interface] --> B[CalendarioReino LWC]
    B --> C[FullCalendar v3]
    B --> D[Floating UI]
    B --> E[Apex Controllers]
    E --> F[Salesforce Database]
    E --> G[External APIs]
    
    subgraph "Frontend Components"
        C
        D
        H[jQuery 3.6.0]
        I[Moment.js]
    end
    
    subgraph "Backend Services"
        E
        J[CalendarioController]
        K[AppointmentController]
        L[EventUtils]
    end
```

### Documentation Structure

This documentation is organized following PRINCE2 Project Initiation Documentation (PID) standards:

=== "Business Focus"

    - [Project Overview](pt/project-overview/index.md) - Executive summary and objectives
    - [Business Case](pt/business-case/index.md) - Justification and benefits analysis
    - [Implementation Plan](pt/implementation/index.md) - Phases and milestones
    - [Risk Management](pt/risk-management/index.md) - Risk assessment and mitigation

=== "Technical Focus"

    - [Technical Architecture](pt/architecture/index.md) - System design and components
    - [API Documentation](pt/api/index.md) - Apex controllers and LWC components
    - [User Documentation](pt/user-guide/index.md) - Installation and user guides
    - [Technical Details](pt/technical/index.md) - Code analysis and features

=== "Project Management"

    - [Quality Management](pt/quality/index.md) - Standards and review processes
    - [Project Overview](pt/project-overview/index.md) - Complete project information
    - [Implementation Plan](pt/implementation/index.md) - Project phases and milestones
    - [Risk Management](pt/risk-management/index.md) - Risk assessment strategies

### Language Support

This documentation is available in multiple languages:

- **English** - Primary documentation language
- **Português** - Documentação em português brasileiro

Use the language selector in the header to switch between languages.

### Getting Started

!!! tip "New to the Project?"

    1. Start with the [Project Charter](pt/project-overview/charter.md) for a high-level overview
    2. Review the [Business Case](pt/business-case/index.md) to understand the value proposition
    3. Follow the [Quick Start Guide](pt/getting-started/quick-start.md) for immediate setup
    4. Explore the [Technical Architecture](pt/architecture/index.md) for implementation details

### Support and Contribution

!!! question "Need Help?"

    - Check the [User Guide](pt/user-guide/index.md) for detailed information
    - Review the [Technical Documentation](pt/technical/index.md) for technical details
    - Consult the [API Documentation](pt/api/index.md) for integration details

---

**Last Updated**: {{ git_revision_date_localized }}  
**Version**: 1.0.0  
**Status**: :material-check-circle:{ .green } Active Development
