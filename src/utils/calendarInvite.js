import { createEvent } from 'ics';

export const sendCalendarInvite = ({ horse, date, time, name, email }) => {
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);

  const event = {
    start: [year, month, day, hour, minute],
    duration: { hours: 1 },
    title: `Horse Ride with ${horse}`,
    description: 'Your booked horse riding session',
    location: 'Horse Stable',
    attendees: [{ name, email }]
  };

  createEvent(event, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }
    const blob = new Blob([value], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invite.ics';
    a.click();
    window.URL.revokeObjectURL(url); // Clean up the URL object after the download
  });
};
