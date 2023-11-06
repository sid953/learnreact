import { motion } from "framer-motion";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Facebook, Github, Twitter } from "./AllSvg";
import { DarkTheme } from "../../constants/Themes";
const Icons1 = styled.div`
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props: { theme: string | undefined }) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/sid953"}
        >
          <Icons1>
            <Github
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </Icons1>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://twitter.com/Siddhes01856997"}
        >
          {" "}
          <Icons1>
            <Twitter
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </Icons1>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://facebook.com/siddhesh.sawant.140193"}
        >
          <Icons1>
            <Facebook
              width={25}
              height={25}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </Icons1>
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
