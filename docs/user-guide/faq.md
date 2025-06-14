# Frequently Asked Questions (FAQ)

## General Questions

### What is CalendarioReino?

**Answer**: CalendarioReino is an advanced calendar component developed specifically for Salesforce Lightning Experience. It provides a modern and intuitive interface for managing events, meetings, and room reservations, natively integrated with the Salesforce ecosystem.

### What are the minimum system requirements?

**Answer**: 
- Salesforce Lightning Experience (Spring '23 or later)
- Browsers: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- Salesforce or Platform licenses
- Proper permissions configured by administrator

### How do I access CalendarioReino?

**Answer**: You can access it through the App Launcher (9 dots) by searching for "Calendar" or navigate directly to the "Calendar" tab if it's available in your navigation bar.

## Installation and Configuration

### I can't see the calendar component. What should I do?

**Possible Causes**:
- Insufficient permissions
- Component not installed correctly
- Profile without access

**Solutions**:
1. Contact your Salesforce administrator
2. Verify you have access to Lightning Experience
3. Confirm component is installed in your org
4. Clear browser cache

### How do I request access to CalendarioReino?

**Answer**: Contact your Salesforce administrator or IT department. They will need to:
1. Verify you have the necessary permissions
2. Add you to appropriate profiles/permission sets
3. Configure access to required objects (Event, Activity, User)

### Can I use it on mobile devices?

**Answer**: Yes! CalendarioReino is fully responsive and works on:
- **Tablets**: iPad, Android tablets (768px+ resolution)
- **Smartphones**: iPhone, Android (optimized for smaller screens)
- **Desktop**: All resolutions above 1024px

## Basic Usage

### How do I create an event quickly?

**Answer**: 
1. Click on any empty date/time in the calendar
2. Type the event title
3. Press Enter
4. Event will be created with default settings

For more complex events, use the "New Event" button or Ctrl+N.

### How do I invite people to a meeting?

**Answer**:
1. Create or edit an event
2. In the "Participants" field, type the person's name
3. Select from suggestion list
4. Define if required or optional
5. Save the event
6. Invitations are sent automatically

### How do I book a room?

**Answer**:
1. During event creation/editing
2. Click "Book Room"
3. System shows available rooms for the time slot
4. Select appropriate room
5. Confirm booking
6. Room is reserved automatically

### How do I cancel an event?

**Answer**:
1. Click on the event to select it
2. Right-click and select "Delete" or press Delete
3. Confirm cancellation
4. Participants are notified automatically
5. Reserved rooms are released

## Technical Issues

### The calendar doesn't load. What should I do?

**Diagnosis**:
1. **Check your internet** connection
2. **Refresh the page** (F5 or Ctrl+R)
3. **Clear browser cache**
4. **Try another browser**
5. **Disable extensions** temporarily

**If it persists**:
- Contact technical support
- Provide error details
- Include browser information

### Events don't appear in the calendar

**Possible Causes**:
- Active filters hiding events
- Unchecked calendars in sidebar
- Pending synchronization
- Permission issues

**Solutions**:
1. Check filters in left sidebar
2. Confirm calendars are checked
3. Refresh the page
4. Check permissions with administrator

## Advanced Features

### How do I set up recurring events?

**Answer**:
1. Create a new event or edit existing
2. Check "Recurring Event"
3. Choose pattern (daily, weekly, monthly, yearly)
4. Set end date or number of occurrences
5. Save to create the series

### Can I integrate with external calendars?

**Answer**: Yes, CalendarioReino supports:
- Google Calendar sync
- Outlook integration
- iCal exports
- External feed imports

Contact your administrator for setup instructions.

### How do I customize the calendar view?

**Answer**:
1. Use view buttons (Day, Week, Month, Year)
2. Adjust time zones in user preferences
3. Filter by event types or calendars
4. Customize colors in settings

## Support

### Where can I get help?

**Answer**: Multiple support channels are available:
- Internal help documentation
- Community forums
- Technical support tickets
- Administrator assistance

### How do I report a bug?

**Answer**:
1. Document the issue clearly
2. Include steps to reproduce
3. Provide browser/system information
4. Submit through support portal
5. Include screenshots if helpful

---

**Status**: :material-check-circle:{ .green } Documented  
**Last Updated**: {{ git_revision_date_localized }}
