import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../../css/style.css';
import '../../css/globalstyle.css';
import '../../css/perfect-scrollbar.css';
import '../../css/style.css';
const VideoCard = (props) => {
  const ref = useRef();
  const peer = props.peer;

  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
    peer.on('track', (track, stream) => {
    });
  }, [peer]);

  return (
    <Video
      playsInline
      autoPlay
      ref={ref}
    />
  );
};

const Video = styled.video``;

export default VideoCard;
