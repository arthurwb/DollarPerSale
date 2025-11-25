-- CreateTable
CREATE TABLE `ZineArchive` (
    `id` VARCHAR(191) NOT NULL,
    `yearMonth` INTEGER NOT NULL,
    `link` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
