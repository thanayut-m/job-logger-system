-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'person',
    "status" BOOLEAN NOT NULL,
    "users_update_at" TIMESTAMP(3) NOT NULL,
    "users_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "TodoOrder" (
    "todo_order_id" SERIAL NOT NULL,
    "todo_hospital" TEXT NOT NULL,
    "todo_order_status" TEXT NOT NULL,
    "todo_lavel" TEXT NOT NULL,
    "todo_period" TEXT NOT NULL,
    "todo_note_request" TEXT,
    "todo_note_Troubleshoot" TEXT,
    "todo_receive_date" TIMESTAMP(3),
    "todo_receive_time" TIMESTAMP(3),
    "todo_report_date" TIMESTAMP(3),
    "todo_report_time" TIMESTAMP(3),
    "todo_approve_price" INTEGER,
    "todo_user_approve_id" INTEGER,
    "user_id" INTEGER NOT NULL,
    "hospital_id" INTEGER NOT NULL,
    "todo_la_Support_id" INTEGER,
    "todo_Channels_id" INTEGER,

    CONSTRAINT "TodoOrder_pkey" PRIMARY KEY ("todo_order_id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "hospital_id" SERIAL NOT NULL,
    "hospital_name" TEXT NOT NULL,
    "hospital_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("hospital_id")
);

-- CreateTable
CREATE TABLE "TodoLaSupport" (
    "todo_la_Support_id" SERIAL NOT NULL,
    "todo_la_Support_name" TEXT NOT NULL,
    "todo_la_Support_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TodoLaSupport_pkey" PRIMARY KEY ("todo_la_Support_id")
);

-- CreateTable
CREATE TABLE "TodoImage" (
    "todo_image_id" SERIAL NOT NULL,
    "todo_image_name" TEXT NOT NULL,
    "todo_order_id" INTEGER NOT NULL,
    "todo_order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TodoImage_pkey" PRIMARY KEY ("todo_image_id")
);

-- CreateTable
CREATE TABLE "TodoChannels" (
    "todo_Channels_id" SERIAL NOT NULL,
    "todo_Channels_name" TEXT NOT NULL,
    "todo_Channels_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TodoChannels_pkey" PRIMARY KEY ("todo_Channels_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "TodoOrder" ADD CONSTRAINT "TodoOrder_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodoOrder" ADD CONSTRAINT "TodoOrder_todo_user_approve_id_fkey" FOREIGN KEY ("todo_user_approve_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodoOrder" ADD CONSTRAINT "TodoOrder_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("hospital_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodoOrder" ADD CONSTRAINT "TodoOrder_todo_la_Support_id_fkey" FOREIGN KEY ("todo_la_Support_id") REFERENCES "TodoLaSupport"("todo_la_Support_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodoOrder" ADD CONSTRAINT "TodoOrder_todo_Channels_id_fkey" FOREIGN KEY ("todo_Channels_id") REFERENCES "TodoChannels"("todo_Channels_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodoImage" ADD CONSTRAINT "TodoImage_todo_order_id_fkey" FOREIGN KEY ("todo_order_id") REFERENCES "TodoOrder"("todo_order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
