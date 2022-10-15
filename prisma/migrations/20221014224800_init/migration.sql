/*
  Warnings:

  - You are about to drop the column `colaboratorId` on the `Tasks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_colaboratorId_fkey`;

-- AlterTable
ALTER TABLE `Tasks` DROP COLUMN `colaboratorId`;
