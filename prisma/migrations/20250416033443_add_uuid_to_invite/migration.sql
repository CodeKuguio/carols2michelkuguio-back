/*
  Warnings:

  - The `uuid` column on the `Invite` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

ALTER TABLE "Invite" DROP COLUMN "uuid",
ADD COLUMN     "uuid" UUID NOT NULL DEFAULT uuid_generate_v4();
