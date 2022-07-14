USE sql_intro; 

CREATE TABLE Dolphin(
    name VARCHAR(20) NOT NULL PRIMARY KEY,
    color VARCHAR(20),
    height INT,
    healthy BIT DEFAULT true
);

INSERT INTO Dolphin VALUES("Risso", "blue", 1, true);
INSERT INTO Dolphin VALUES("Bottlenose", "white", 1, true);
INSERT INTO Dolphin VALUES("Commerson", "blue", 2, true);
INSERT INTO Dolphin VALUES("Daron", "green", 2, true);
INSERT INTO Dolphin VALUES("rough-toothed", "green", 3, true);

SELECT * FROM Dolphin WHERE height > 2;