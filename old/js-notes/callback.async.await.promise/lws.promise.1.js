const hasMeeting = true;

const meeting = new Promise((res, rej) => {

    if (!hasMeeting) {
        const meetingDetails = {
            name: "Tech Meeting",
            location: "Google Meet",
            time: "10:00 pm",
        };
        res(meetingDetails)
    } else {
        rej(new Error("Meeting already scheduled"));
    }
});

meeting.then((res) => {
    // resolved data
    console.log(JSON.stringify(res))

}).catch((err) => {
    // rejected data
    console.log("Rejected: " + err.message)
})

console.log("Look, i got excuted first before promise")