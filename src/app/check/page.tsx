'use client';

import { useState } from 'react';
import ChatInterface from './chat_interface';
import AudioInterface from './audio_interface';
import VideoInterface from './video_interface';

export default function Check() {
  return (
    <div className="grid grid-cols-[65%_35%] min-h-screen p-6 gap-4 bg-gray-100">
      {/* Left Column - Video & Audio */}
      <div className="flex flex-col justify-between gap-4">

        <VideoInterface />  {/* Video */}
        <AudioInterface />  {/* Audio */}

      </div>

      {/* Right Column - Chat */}
      <ChatInterface />     {/* Chat */}

    </div>
  );
}
