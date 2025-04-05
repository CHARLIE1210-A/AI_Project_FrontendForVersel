"use client";

// import { useState, useRef, useEffect } from "react";

// interface DetectionResult {
//   class: string;
//   confidence: number;
//   bbox: [number, number, number, number];
// }

// export default function Home() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [results, setResults] = useState<DetectionResult[]>([]);

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing webcam:", error);
//       }
//     };
//     startWebcam();
//   }, []);

//   useEffect(() => {
//     const processFrame = async () => {
//       if (!videoRef.current || !canvasRef.current) return;

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");

//       if (!context) return;

//       context.drawImage(video, 0, 0, canvas.width, canvas.height);

//       canvas.toBlob(async (blob) => {
//         if (!blob) return;

//         const formData = new FormData();
//         formData.append("file", blob, "frame.jpg");

//         try {
//           const response = await fetch("http://127.0.0.1:8000/api/detect/", {
//             method: "POST",
//             body: formData,
//           });
//           const data = await response.json();
//           setResults(data);
//         } catch (error) {
//           console.error("Error detecting objects:", error);
//         }
//       }, "image/jpeg");
//     };

//     const interval = setInterval(processFrame, 100);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen w-screen">
//       {/* First Row */}
//       <div className="flex w-full h-[70%]">
//         {/* Video Section */}
//         <div className="w-[65%] flex items-center justify-center border-r border-gray-600 p-4">
//           <video ref={videoRef} autoPlay muted className="w-full h-full rounded-lg border border-gray-500" />
//           <canvas ref={canvasRef} width="640" height="480" className="hidden" />
//         </div>

//         {/* Results Section */}
//         <div className="w-[35%] p-4 overflow-auto">
//           <h2 className="text-xl font-semibold mb-3">Detection Results</h2>
//           {results.length > 0 ? (
//             <ul className="space-y-2">
//               {results.map((detection, index) => (
//                 <li key={index} className="bg-gray-800 p-2 rounded-md">
//                   <strong>{detection.class}</strong> - {(detection.confidence * 100).toFixed(2)}%
//                   <br />
//                   <span className="text-sm">BBox: {JSON.stringify(detection.bbox)}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No objects detected</p>
//           )}
//         </div>
//       </div>

//       {/* Second Row (Future Use) */}
//       <div className="w-full h-[30%] flex items-center justify-center bg-gray-800 border-t border-gray-600">
//         <h2 className="text-lg">Second Row - Future Feature Section</h2>
//       </div>
//     </div>
//   );
// }

// frontend/pages/index.tsx
import useWebSocket from '../../../hooks/useWebSocket';
import { useEffect, useRef, useState } from 'react';

interface DetectionResult {
  class: string;
  confidence: number;
  bbox: [number, number, number, number];
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const { messages, sendMessage } = useWebSocket('ws://localhost:8000/ws/detect/');

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };
    startWebcam();
  }, []);

  useEffect(() => {
    const processFrame = () => {
      if (!videoRef.current || !canvasRef.current) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (!context) return;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) {
          sendMessage(blob);
        }
      }, 'image/jpeg');
    };

    const interval = setInterval(processFrame, 100);
    return () => clearInterval(interval);
  }, [sendMessage]);

  useEffect(() => {
    if (messages.length > 0) {
      setResults(messages[messages.length - 1]);
    }
  }, [messages]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    const drawDetections = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      results.forEach((result) => {
        const [x1, y1, x2, y2] = result.bbox;
        const width = x2 - x1;
        const height = y2 - y1;

        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.strokeRect(x1, y1, width, height);

        context.fillStyle = 'red';
        context.font = '18px Arial';
        context.fillText(
          `${result.class} (${(result.confidence * 100).toFixed(2)}%)`,
          x1,
          y1 > 20 ? y1 - 5 : y1 + 20
        );
      });

      requestAnimationFrame(drawDetections);
    };

    drawDetections();
  }, [results]);

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Video and Canvas Section */}
      <div className="flex w-full h-full items-center justify-center bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="absolute w-auto h-full max-w-full max-h-full"
        />
        <canvas
          ref={canvasRef}
          className="absolute w-auto h-full max-w-full max-h-full"
          width={640}
          height={480}
        />
      </div>
    </div>
  );
}
