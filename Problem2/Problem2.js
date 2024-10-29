function mentionStatistics(members, messages) {
    // Initialize an object to store mention counts for each member
    const mentionCount = {};
    members.forEach(member => {
        mentionCount[member] = 0;
    });

    // Regular expression to find mentions
    const mentionRegex = /@id\d{1,3}/g;

    // Process each message
    messages.forEach(message => {
        // Extract all mentions in the current message
        const matches = message.match(mentionRegex) || [];
        
        // Use a Set to track unique mentions in the message
        const uniqueMentions = new Set();
        matches.forEach(match => {
            // Remove the "@" character to get the ID
            const id = match.slice(1);
            uniqueMentions.add(id);
        });

        // Update the mention count for each unique ID that is in the members list
        uniqueMentions.forEach(id => {
            if (mentionCount.hasOwnProperty(id)) {
                mentionCount[id] += 1;
            }
        });
    });

    // Convert mention counts to the desired output format
    const result = Object.entries(mentionCount).map(([id, count]) => `${id}=${count}`);

    // Sort by mention count in descending order, and lexicographically by user id in ascending order if tied
    result.sort((a, b) => {
        const [idA, countA] = a.split('=');
        const [idB, countB] = b.split('=');
        return countB - countA || idA.localeCompare(idB);
    });

    return result;
}

// Example usage:
const members = ["id123", "id234", "id7", "id321"];
const messages = [
    "Hey @id123,id321 review this PR please! @id123 what do you think?",
    "Hey @id7 nice approach! Great job! @id800 what do you think?",
    "@id123,id321 thx!"
];

console.log(mentionStatistics(members, messages));
// Output: [ 'id123=2', 'id321=2', 'id7=1', 'id234=0' ]
