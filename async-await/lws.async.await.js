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


async function my_meting() {
    const meet_details = await meeting;
    const calendar = await addToCalendar(meet_details);
    console.log(calendar);
}
my_meting();
console.log("He He How i am faster then that promise fucking thing")