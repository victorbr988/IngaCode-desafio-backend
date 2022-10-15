-- AlterTable
ALTER TABLE `Colaborators` MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Tasks` MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `TimeTrackers` MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `deletedAt` DATETIME(3) NULL;
