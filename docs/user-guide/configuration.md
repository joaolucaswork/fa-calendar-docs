# Configuration Guide

This guide covers how to configure CalendarioReino for your organization's specific needs.

## Basic Configuration

### Initial Setup

Configure the component settings to match your Salesforce org requirements:

```javascript
// Basic configuration example
const calendarConfig = {
    timeZone: 'America/Sao_Paulo',
    firstDay: 1, // Monday
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    slotDuration: '00:30:00'
};
```

### Display Settings

Customize how the calendar appears to users:

- **Default View**: Set month, week, or day as the default view
- **Time Format**: Choose 12-hour or 24-hour format
- **Week Start**: Configure which day starts the week
- **Language**: Set the display language

## Advanced Configuration

### Room Management

Configure meeting rooms and their availability:

```javascript
// Room configuration
const roomConfig = {
    defaultCapacity: 10,
    bookingHorizon: 90, // days in advance
    maxBookingDuration: 480, // minutes
    conflictHandling: 'warn'
};
```

### User Permissions

Set up user access levels:

- **Admin**: Full configuration access
- **Manager**: Room booking and user management
- **User**: Basic calendar access and event creation

### Integration Settings

Configure external system integrations:

- **Email Notifications**: Set up automatic email alerts
- **Calendar Sync**: Configure sync with external calendars
- **API Access**: Set up API keys and endpoints

## Troubleshooting

### Common Issues

1. **Calendar not loading**: Check permissions and data access
2. **Room conflicts**: Verify room booking rules
3. **Sync issues**: Check integration settings

### Support

For technical support, contact your system administrator or refer to the [Support Guide](../pt/user-guide/support.md).
