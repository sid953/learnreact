// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import axios from "axios";

import localMusic from "../../assets/Maroon-5---Girls-Like-You---ft.-Cardi-B(musicdownload.cc).mp3";
import reactLogo from "../../assets/react.svg";
import { color } from "framer-motion";

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

const rotation = (props: { isPlaying: any }) => css`
  animation: ${props.isPlaying ? rotate : "none"} 2s linear infinite;
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
  const [musicMode, setMusicMode] = useState("Play");
  const [music, setMusic] = useState(localMusic);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://shazam8.p.rapidapi.com/track/recommedations",
      params: {
        track_id: "296831279",
        limit: "4",
      },
      headers: {
        "X-RapidAPI-Key": "bff2c3375cmsh8aebaebe94bdff5p175ecejsn42d877df49b0",
        "X-RapidAPI-Host": "shazam8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        const audioUrl = response.data.tracks[1].hub.actions.find(
          (action) => action.type === "uri"
        ).uri;
        if (audioUrl) {
          setMusic(audioUrl);
        }

        console.log(audioUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClick = () => {
    if (!isPlaying && ref.current) {
      ref.current.play();
    } else {
      if (ref.current) {
        ref.current.pause();
      }
    }

    setIsPlaying(!isPlaying);
    !isPlaying ? setMusicMode("Stop") : setMusicMode("Play");
  };

  return (
    <>
      <Box style={{ marginLeft: "15rem" }} onClick={handleClick}>
        <p
          style={{
            color: "white",
            fontSize: "1rem",
            marginLeft: "-8.5rem",
            marginTop: "1.3rem",
          }}
        >
          Click to {musicMode} Music
        </p>
        <RotatingLogo src={reactLogo} alt="React Logo" isPlaying={isPlaying} />
        <audio src={music} ref={ref} loop />
      </Box>
    </>
  );
};

export default SoundBar;
