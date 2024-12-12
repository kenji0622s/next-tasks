import { NextRequest, NextResponse } from "next/server";
import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";

export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task fetched successfully", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch task" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
