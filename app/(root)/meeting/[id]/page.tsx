import MeetingClient from "./MeetingClient";

interface MeetingProps {
  params: Promise<{ id: string }>;
}

const Meeting = async ({ params }: MeetingProps) => {
  const { id } = await params;
  return (
    <main className="h-screen w-full">
      <MeetingClient id={id} />
    </main>
  );
};

export default Meeting;
