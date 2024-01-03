/*
  Warnings:

  - Added the required column `down_votes` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `up_votes` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "down_votes" INTEGER NOT NULL,
ADD COLUMN     "up_votes" INTEGER NOT NULL;
