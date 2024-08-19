/*
--Structure of The Folder Project
1-Configurations ==> db.js (default Mongoose.connect) 
2- Models ==> User.js (User Schema & Model) Data Access Layer
3- Services & Conroller (req.body and save data in db )
4- Routes ==> userRoutes.js (post request to create new user from sevices)
-------------------------------------------------------------------------------------
-Separation of Concerns (SoC) is a fundamental principle in software engineering and design aimed at
 breaking down complex systems into smaller,more manageable parts. 
 why ? Modularity, Maintainability, Scalability, Reusability,
        Parallel Development, Understanding and Debugging
In a web application, concerns can be separated into layers:
1-Presentation Layer: Handling user interface concerns, such as rendering HTML/CSS, handling user input, and managing client-side interactions.
2-Business Logic Layer: Implementing application-specific logic, such as processing user requests, performing validations, and orchestrating(organize) interactions between different parts of the system.
3-Data Access Layer: Managing interactions with the database, including querying, updating, and persisting data.























*/
