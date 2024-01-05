/*
  Warnings:

  - You are about to drop the column `down_votes` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `up_votes` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "down_votes",
DROP COLUMN "up_votes";
