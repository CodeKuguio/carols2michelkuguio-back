-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_honorId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_inviteId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "inviteId" DROP NOT NULL,
ALTER COLUMN "honorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "Invite"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_honorId_fkey" FOREIGN KEY ("honorId") REFERENCES "Honor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
