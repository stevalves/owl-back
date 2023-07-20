/*
  Warnings:

  - You are about to drop the column `techlogies` on the `projects` table. All the data in the column will be lost.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "techlogies",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "technologies" TEXT[];
