# RobinNodeJS
Hack UMass IV - Robin NodeJS 
Run 'npm install' to generate node_modules

(DevPost Submission)
## Inspiration
When it comes to logistics, attendance is the weakest and most difficult link of the process. It drives up time expenses exponentially as the number of people increases. Solutions come in many of Saas: QR Codes, Email look ups, even just plain old paper and pen. However, what if the solution, is no sign in at all?

## What it does
imHere is a platform which runs on the Robin API, enabling the counting, tracking and attendance taking of individuals around semantic locations of the Estimote Beacon and other potential IoT bluetooth devices. With a click of a button, the host organizer has complete access to the attendees names, email addresses, and other user provided information. The organizer can then use this list to take attendance and send out information to the attendees.

## How we built it
We build this upon a node.js back-end running NPM Modules which would access the Robin API. What this API allowed us to do was to connect to Robin's services and gather semantic location information regarding Robin mobile users within the vicinity of Estimote Beacons. In addition, we developed a minimalist front-end interface using the Bootstrap CSS Framework, in addition to Keyframe css animation models. To tie the server calls and interface together, Express.js calls were developed to get user information from Robin's servers.

## Challenges we ran into
Although well documented, the development of the application using Robin's API on top of a Node.js framework was difficult, and required a full night without sleep to understand and implement. With amazing help from developers at Robin, we were able to make a complete connection to the services provided to us. In addition, our unfamiliarity with npm and javascript networking slowed the development process, and our overall scope of the project. 

## Accomplishments that we're proud of
Our group consists of fairly fresh hackathon hackers, so it is really great to see that we are able to fully develop a working project which incorporates a real, live API. We are very proud to know that with enough effort, we were able to overcome the hurdles explained above.

## What we learned
With enough help and collaboration, even beginner hackathon hackers can develop cool and innovative software!

## What's next for imHere
Sleep.
