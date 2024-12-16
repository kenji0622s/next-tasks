import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    await connectDb();
    const { id } = context.params;
    const task = await TaskModel.findById(id);

    if (!task) {
      return Response.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    return Response.json({
      message: "Task fetched successfully",
      task
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed to fetch task" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
