import { LoaderIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      {/* <LoaderIcon className="animate-spin size-10 text-primary" />
       */}

      <video
        style={{ width: "350px" }}
              muted
              className="rounded-xl"
        autoPlay
        loop
        playsInline
      >
        <source src="/extraallvideo/group-chat-1.mp4" type="video/mp4" />
      </video>

      <p className="mt-4 text-center text-lg font-mono">
        Connecting to chat...
      </p>
    </div>
  );
}

export default ChatLoader;
