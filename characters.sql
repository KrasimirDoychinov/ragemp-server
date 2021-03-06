DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
	`ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `fullName` VARCHAR(50) NOT NULL,
    `registerDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `lastActive` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `position` VARCHAR(100),
    `playerId` INT NOT NULL,
    INDEX `idxCharacter` (ID),
    CONSTRAINT `fk_character_player`
    FOREIGN KEY (playerId)
    REFERENCES accounts(ID) ON DELETE RESTRICT
);