function mMeetings(start, end) {
    const n = start.length;
    const meetings = [];

 

 
    for (let i = 0; i < n; i++) {
        meetings.push({ start: start[i], end: end[i], index: i });
    }


    meetings.sort((a, b) => a.end - b.end);

 

    let mMeetings = 0;
    let endTime = 0;

 


    for (let i = 0; i < n; i++) {
        const meeting = meetings[i];
        if (meeting.start >= endTime) {
            mMeetings++;
            endTime = meeting.end;
        }
    }

 

    return mMeetings;
}

 

// Example usage:
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
console.log(mMeetings(start, end));  // Output: 4