Codewriting
# Description
Imagine there is a group chat with many users writing messages. The content of messages includes text and mentions of other users in the chat. Mentions in the group chat are formatted as strings starting with the @ character and followed by at least one id separated by commas. An id is formatted as a string starting with id and followed by a positive integer from 1 to 999.

## For example:

"This is an ex@mple with no mentions@"
"This is an example with @id1 one mention of one user"
"This is an example with @id1,id123,id983 one mention of three users"
"This is an example with @id1,id123,id983 several mentions of several users @id239"
Now, imagine you are given two arrays of strings titled members and messages. Your task is to calculate the mention statistics for the group chat. In other words, count the number of messages that each chat member is mentioned in. Chat members mentioned multiple times in a message should be counted only once per message.

Return the mention statistics in an array of strings, where each string follows this format: "[user id]=[mentions count]". The array should be sorted by mention count in descending order, or in case of a tie, lexicographically by user id in ascending order.

It is guaranteed that proper ids will be used for each mention. Additionally, all mentions will be preceded by and followed by a space, unless they are located at either the beginning or end of the message. Note that the @ character is still allowed to be included in a message not as a part of any mention, but not as the first character in a word.

For example:

For members = ["id123", "id234", "id7", "id321"] and messages = [ "Hey @id123,id321 review this PR please! @id123 what do you think?", "Hey @id7 nice approach! Great job! @id800 what do you think?", "@id123,id321 thx!" ]
Explanation:

In the first message, 2 users are mentioned: id123 and id321. Note that id123 is mentioned twice in this message, but it should only be counted once.
In the second message, 2 users are mentioned: id7 and id800. Note that id800 is not a member of the group chat and that @approach and @@@ are not mentions at all.
In the third message, 2 users are mentioned: id123 and id321.
Since id123 is lexicographically less than id321, the output should be ["id123=2", "id321=2", "id7=1", "id234=0"].
Input/Output
### complexity
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.string members

An array of strings representing members of a group chat.
Guaranteed constraints:
2 ≤ members.length ≤ 50
members[i] is guaranteed to follow the format "idX" where 1 ≤ X ≤ 999.
[input] array.string messages

An array of strings representing messages in a group chat.
Guaranteed constraints:
1 ≤ messages.length ≤ 100