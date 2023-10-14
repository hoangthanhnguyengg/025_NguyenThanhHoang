# Below diagram will show the flow "get/set top 10 score module" using aws architecture

![diagram](https://i.ibb.co/nRBtBZ7/job2.jpg)

- The first, when the request from client send to BE Server, this below step will explain more detail for this above flow:
    + After authenticate successfully, cognito will return Token JWT to User
    + WebSocket Connection Management: The WebSocket server will maintain a list of currently open WebSocket connections. Whenever a user's score changes, the server will send a real-time update notification to all the connections.
    + Real-time Score Updates: When there is a change in a user's score, the WebSocket server will send a notification to all connected clients. Clients receive the notification and update their scores directly on their interface without the need to send an HTTP request
    + ALB or NLB (Load balancer ) will serve as an endpoint for WebSocket connections. If you have multiple WebSocket servers, the Load Balancer will distribute connections among them, hidden IP and balance/limit requests
    + Redis-Caching: create an in-memory cache layer for Redis to enhance performance and reduce the load for database
    + DynamoDB: Depending on specific requirements, you may store user scores in DynamoDB. When a score changes, Redis can update DynamoDB accordingly.



