/*
  Warnings:

  - You are about to drop the column `id_profile` on the `profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_id_profile_fkey`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `id_profile`;

-- CreateTable
CREATE TABLE `user_profile` (
    `id` VARCHAR(191) NOT NULL,
    `id_profile` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_id_profile_fkey` FOREIGN KEY (`id_profile`) REFERENCES `profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
