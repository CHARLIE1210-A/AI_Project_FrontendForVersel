export default function VideoInterface (){
    return (
        <div className="bg-black rounded-xl overflow-hidden shadow-md flex-1">
          <video
            className="w-full h-full"
            controls
            autoPlay
            muted
          >
            <source src="/video/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    );
}