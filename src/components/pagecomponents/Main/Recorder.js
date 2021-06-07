import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = () => (
    <div>
        <ReactMediaRecorder
            screen
            render={({
                status,
                startRecording,
                stopRecording,
                mediaBlobUrl,
            }) => (
                <div>
                    <p>{status}</p>
                    <button onClick={startRecording}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                    <video src={mediaBlobUrl} controls autoPlay loop />
                </div>
            )}
        />
    </div>
);

// const RecordView = () => {
//     const { status, startRecording, stopRecording, mediaBlobUrl } =
//         useReactMediaRecorder({ screen: true });

//     return (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//             <p>{status}</p>
//             <button onClick={startRecording}>Start Recording</button>
//             <button onClick={stopRecording}>Stop Recording</button>
//             <video src={mediaBlobUrl} controls autoPlay loop />
//         </div>
//     );
// };

export default RecordView;
