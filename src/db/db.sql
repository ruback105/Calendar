CREATE TABLE Users (
    UserID int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    Email varchar(255),
    Phone varchar(255),
    PasswordHash varchar(500),
    PasswordSalt varchar(255)
);

CREATE TABLE Reminders (
    ReminderID int IDENTITY(1,1) PRIMARY KEY,
    ReminderTitle varchar(255),
    ReminderContent varchar(1024),
    ReminderTime datetime(50),
    ReminderTrigger int(1)
);

