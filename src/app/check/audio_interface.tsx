export default function AudioInterface(){
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">🎧 Audio Output</h2>
          <audio controls className="w-full">
            <source src="/audio/sample.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}