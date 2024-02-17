-- CreateTable
CREATE TABLE `profile` (
    `id` VARCHAR(191) NOT NULL,
    `id_profile` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_id_profile_fkey` FOREIGN KEY (`id_profile`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
