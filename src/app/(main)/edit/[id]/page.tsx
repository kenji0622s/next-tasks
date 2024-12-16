import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`);
  
  // レスポンスの状態を確認
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  // データが正しいか確認
  if (!data || !data.task) {
    throw new Error("Invalid data received");
  }

  return data.task as TaskDocument;
};

const EditTaskPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // ここでawaitは不要
  const task = await getTask(id);
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};
export default EditTaskPage;