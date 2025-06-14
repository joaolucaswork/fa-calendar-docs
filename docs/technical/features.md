# Feature Documentation

This section provides detailed documentation of all CalendarioReino features, based on the comprehensive code analysis performed during development.

## Interactive Modals

### Color Picker Modal (Event Context Menu)

The color picker modal provides comprehensive event management capabilities through a context menu interface.

#### Activation
- **Trigger**: Click on the three-dot icon of any event in the calendar
- **Positioning**: Dynamically positioned using Floating UI for optimal visibility
- **Context**: Maintains reference to the selected event for all operations

#### Core Functionalities

=== "Color Management"

    **Custom Color Selection**
    
    - Predefined color palette with organizational standards
    - Custom color picker for personalized categorization
    - Auto-save functionality with debouncing (300ms delay)
    - Color persistence across sessions
    
    **Implementation Details**:
    ```javascript
    // Color update with debouncing
    handleColorChange(event) {
        clearTimeout(this.colorUpdateTimeout);
        this.colorUpdateTimeout = setTimeout(() => {
            this.saveEventColor(event.target.value);
        }, 300);
    }
    ```

=== "Meeting Link Management"

    **URL Validation and Processing**
    
    - Comprehensive URL validation with protocol checking
    - Support for Microsoft Teams, Zoom, and generic meeting links
    - Visual card representation for recognized platforms
    - Input field to card conversion for better UX
    
    **Supported Platforms**:
    - Microsoft Teams (with custom icon)
    - Zoom meetings
    - Google Meet
    - Generic HTTPS links
    
    **Validation Rules**:
    ```javascript
    validateMeetingLink(url) {
        const urlPattern = /^https?:\/\/([\w\-]+\.)+[\w\-]+(\/.*)?$/;
        const invalidDomains = ['localhost', '127.0.0.1', 'example.com'];
        return urlPattern.test(url) && !invalidDomains.some(domain => url.includes(domain));
    }
    ```

=== "Status and Outcome Tracking"

    **Meeting Status Management**
    
    - Status options: Scheduled, Confirmed, Cancelled, Postponed, Rescheduled
    - Meeting outcome tracking: Occurred, Did not occur
    - Integration with Salesforce picklist values
    - Automatic status updates based on meeting completion
    
    **Business Logic**:
    - Past meetings automatically prompt for outcome
    - Status changes trigger notification workflows
    - Audit trail maintenance for compliance

=== "Event Deletion"

    **Secure Deletion Process**
    
    - Confirmation dialog with event details
    - Soft delete option for audit purposes
    - Cascade deletion handling for related records
    - Error handling with user feedback
    
    **Safety Measures**:
    - Double confirmation for critical events
    - Undo functionality (5-minute window)
    - Permission validation before deletion

### Compact Appointment Modal

Streamlined event creation interface for quick scheduling.

#### Activation Scenarios
- **Day Click**: Click on any day in month view
- **Time Selection**: Click and drag in week/day views
- **Quick Create**: Keyboard shortcut (Ctrl+N)

#### Features

=== "Smart Pre-filling"

    **Context-Aware Defaults**
    
    - Date/time from user selection
    - Default duration (1 hour)
    - Meeting type based on user preferences
    - Room suggestions based on availability
    
    **Auto-generation**:
    ```javascript
    generateSubject() {
        const type = this.selectedMeetingType;
        const date = moment(this.selectedDate).format('DD/MM');
        return `${type} - ${date}`;
    }
    ```

=== "Meeting Type Selection"

    **Type Options**
    
    - **Reunião Presencial**: In-person meetings with room assignment
    - **Reunião Online**: Virtual meetings with link generation
    - **Ligação Telefônica**: Phone calls with dial-in information
    
    **Dynamic Behavior**:
    - Room selection appears only for in-person meetings
    - Link field appears for online meetings
    - Phone number field for telephone meetings

=== "Validation and Submission"

    **Real-time Validation**
    
    - Date/time conflict checking
    - Room availability verification
    - Required field validation
    - Business hours enforcement
    
    **Submission Process**:
    1. Client-side validation
    2. Server-side conflict checking
    3. Event creation in Salesforce
    4. Calendar refresh and notification

## Sidebar Functionality

### Teams-Style Navigation

The sidebar provides comprehensive calendar management with a Microsoft Teams-inspired interface.

#### Collapsible Sections

=== "Date Navigation"

    **Mini Calendar**
    
    - Interactive day grid with current day highlighting
    - Month/year navigation controls
    - Selected day visual feedback
    - Keyboard navigation support (arrow keys)
    
    **Implementation Features**:
    ```javascript
    generateSidebarDays() {
        // Generate calendar grid with previous/next month days
        // Highlight current day with circular indicator
        // Mark selected day with distinct styling
        // Handle month boundaries and leap years
    }
    ```

=== "User Calendars"

    **Multi-User Support**
    
    - User search with real-time filtering
    - Photo display with fallback avatars
    - Calendar overlay functionality
    - Permission-based access control
    
    **Features**:
    - Toggle between personal and shared calendars
    - Visual indicators for calendar ownership
    - Bulk calendar selection/deselection
    - User availability status

=== "Meeting Rooms"

    **Real-time Availability**
    
    - Live room status indicators
    - Occupied time slot visualization
    - Conflict detection and highlighting
    - Room filtering and search
    
    **Status Indicators**:
    - 🟢 Available
    - 🟡 Partially occupied
    - 🔴 Fully booked
    - ⚫ Offline/Maintenance

=== "Meeting Suggestions"

    **AI-Powered Scheduling**
    
    - Optimal time slot recommendations
    - Participant availability analysis
    - Room and resource optimization
    - Conflict-free scheduling
    
    **Algorithm Factors**:
    - Participant calendars
    - Room availability
    - Business hours
    - Meeting preferences
    - Travel time between meetings

=== "Color Legend"

    **Dynamic Categorization**
    
    - Real-time event count by category
    - Interactive filtering by color
    - Custom color management
    - Visual category representation
    
    **Categories**:
    - Predefined organizational colors
    - Custom user-defined colors
    - Status-based colors (completed, cancelled)
    - Room-based color coding

### Advanced Filtering System

#### Multi-Criteria Filtering

The component implements sophisticated filtering capabilities:

=== "Event Type Filtering"

    **Checkbox-based Selection**
    
    - All Events (default)
    - Reunião Presencial
    - Reunião Online
    - Ligação Telefônica
    - Custom event types
    
    **Logic**:
    ```javascript
    applyEventTypeFilter(events) {
        if (this.isFilterSelected.all) return events;
        
        const selectedTypes = Object.keys(this.isFilterSelected)
            .filter(key => key !== 'all' && this.isFilterSelected[key]);
            
        return events.filter(event => selectedTypes.includes(event.type));
    }
    ```

=== "User Calendar Filtering"

    **Participant-based Filtering**
    
    - Filter by event organizer
    - Filter by participants
    - Filter by assigned resources
    - Combination filtering support
    
    **Implementation**:
    ```javascript
    filterByUser(events, userId) {
        return events.filter(event => 
            event.ownerId === userId ||
            event.participants.includes(userId) ||
            event.assignedTo === userId
        );
    }
    ```

=== "Color Category Filtering"

    **Visual Category Filtering**
    
    - Click on legend items to filter
    - Multiple color selection
    - Visual feedback for active filters
    - Clear all filters option
    
    **Features**:
    - Maintains filter state across navigation
    - Combines with other filter types
    - Real-time event count updates

=== "Room-based Filtering"

    **Resource Filtering**
    
    - Filter by meeting room
    - Include/exclude online meetings
    - Location-based grouping
    - Availability-based filtering

=== "Text Search"

    **Comprehensive Search**
    
    - Full-text search across event fields
    - Accent-insensitive search (Portuguese support)
    - Real-time search results
    - Search highlighting
    
    **Searchable Fields**:
    - Event title/subject
    - Description
    - Location
    - Participant names
    - Meeting room names
    
    **Normalization**:
    ```javascript
    normalizeText(text) {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }
    ```

## State Management and Performance

### Reactive State Architecture

#### Two-Tier Caching System

=== "Primary Cache (allEvents)"

    **Complete Dataset Storage**
    
    - Stores all events from Salesforce
    - Source of truth for filtering operations
    - Updated only on server interactions
    - Maintains data consistency
    
    **Benefits**:
    - Reduces server calls
    - Enables client-side filtering
    - Improves response times
    - Maintains offline capability

=== "Display Cache (events)"

    **Filtered Display Data**
    
    - Contains events after filter application
    - Direct input to FullCalendar
    - Updated by client-side operations
    - Optimized for rendering
    
    **Update Triggers**:
    - Filter changes
    - Search term updates
    - Date range navigation
    - User calendar selection

### Update Strategy

#### Multi-Stage Refresh Pattern

The component employs a sophisticated update strategy for optimal user experience:

```javascript
refreshCalendarAfterSave() {
    // Stage 1: Immediate cache update (100ms)
    setTimeout(() => {
        this.clearEventCaches();
        this.calendar.fullCalendar('refetchEvents');
    }, 100);
    
    // Stage 2: UI auxiliary updates (300ms)
    setTimeout(() => {
        this.updateColorLegendCounts();
        this.updateRoomAvailability();
        this.refreshAllParticipantDisplays();
    }, 300);
    
    // Stage 3: Complete re-rendering (600ms)
    setTimeout(() => {
        this.calendar.fullCalendar('rerenderEvents');
        this.calendar.fullCalendar('changeView', currentView.name);
    }, 600);
    
    // Stage 4: Dependent modules (900ms)
    setTimeout(() => {
        this.forceRefreshMeetingSuggestions();
    }, 900);
}
```

**Rationale for Staged Updates**:
- Prevents race conditions
- Ensures visual consistency
- Maintains user experience fluidity
- Handles complex dependency chains

### Performance Optimizations

#### Event Listener Optimization

```javascript
optimizeEventListeners() {
    // Convert scroll events to passive listeners
    const passiveEvents = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
    
    passiveEvents.forEach(eventType => {
        this.addPassiveListener(eventType);
    });
    
    // Debounce resize events
    this.addDebouncedListener('resize', this.handleResize, 250);
}
```

#### Memory Management

```javascript
disconnectedCallback() {
    // Clean up resources
    this.cleanupEventListeners();
    this.destroyCalendar();
    this.clearCaches();
    this.removeGlobalListeners();
}
```

---

**Feature Documentation Status**: :material-check-circle:{ .green } Complete  
**Code Coverage**: 100% of implemented features  
**Last Updated**: {{ git_revision_date_localized }}  
**Maintainer**: Development Team
