const hasMeeting = false;

const meeting = new Promise((res, rej) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Tech Meeting",
      location: "Google Meet",
      time: "10:00 pm",
    };
    res(meetingDetails);
  } else {
    rej(new Error("Meeting already scheduled"));
  }
});

/*
const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been
         scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        resolve(calendar);
    })
}
*/
const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been
    scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    console.log( res);
  })
  .catch((err) => {
    // rejected data
    console.log("Rejected: " + err.message);
  });

console.log("Look, i got excuted first before promise");
