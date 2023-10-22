// @ts-nocheck 
import React, { useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import music from "../../assets/u-said-it-v13-1167.mp3";
import reactLogo from "../../assets/react.svg";
import { color } from 'framer-motion';

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 72rem;
  top: -6px;
  z-index: 10;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotation = (props: { isPlaying:any}) => css`
  animation: ${props.isPlaying ? rotate : 'none'} 2s linear infinite;
`;

// @ts-nocheck 
const RotatingLogo = styled.img`
  ${rotation}
  height: 69px;
  width: 54px;
  position: fixed;
`;

const SoundBar = () => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicMode, setMusicMode] = useState('Play');

  const handleClick = () => {
    if (!isPlaying && ref.current) {
      ref.current.play();
    } else {
      if (ref.current) {
        ref.current.pause();
      }
    }

    setIsPlaying(!isPlaying);
    !isPlaying ? setMusicMode('Stop') :setMusicMode('Play')
  };

  return (<>
    <Box  onClick={handleClick}>
    <p style={{color:"white", fontSize:'1rem',marginLeft: '-8.5rem',
    marginTop: '1.3rem'}}>Click to {musicMode} Music</p>
      <RotatingLogo src={reactLogo} alt="React Logo" isPlaying={isPlaying} />
      <audio src={music} ref={ref} loop />
    </Box>
    </>
  );
}

export default SoundBar;
