-- AlterTable
ALTER TABLE `Tasks` ADD COLUMN `colaboratorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `Colaborators`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
