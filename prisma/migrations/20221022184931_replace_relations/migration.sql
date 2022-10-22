/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Colaborators` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_colaboratorId_fkey`;

-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_projectId_fkey`;

-- CreateIndex
CREATE UNIQUE INDEX `Colaborators_name_key` ON `Colaborators`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Projects_name_key` ON `Projects`(`name`);

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_colaboratorId_fkey` FOREIGN KEY (`colaboratorId`) REFERENCES `Colaborators`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
