import React from 'react';
import ReactPlayer from 'react-player';

const defaultSource = 'https://storage.coverr.co/videos/TEerln00m5BX5hsDYavm12mzBSO3YPlKR?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkxNjE1MjY2fQ.Ucdeu2lhz9YvoGJZej9w4KxoGZlWslBQtpandRUwSrY';

const VideoPlayer = ({ source, ...rest }) => (
  <ReactPlayer
    url={source ? source : defaultSource}
    width='100%'
    height='100%'
    controls
    {...rest}
  />
);

export default VideoPlayer;