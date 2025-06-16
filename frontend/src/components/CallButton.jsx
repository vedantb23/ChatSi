import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="p-3 border-b flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
      <div
        className="tooltip tooltip-left"
        data-tip="Stream, connect, and enjoy!"
      >
        <button
          onClick={handleVideoCall}
          className="btn btn-success btn-sm text-white"
        >
          Start Video Call
          <VideoIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default CallButton;
