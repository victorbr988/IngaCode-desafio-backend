-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_colaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `TimeTrackers` DROP FOREIGN KEY `TimeTrackers_colaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `TimeTrackers` DROP FOREIGN KEY `TimeTrackers_taskId_fkey`;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `Colaborators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeTrackers` ADD CONSTRAINT `TimeTrackers_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeTrackers` ADD CONSTRAINT `TimeTrackers_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `Colaborators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
