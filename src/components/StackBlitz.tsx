import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";
import { Project, EmbedOptions, OpenOptions } from "@stackblitz/sdk";
// import { Button } from 'react-bootstrap';
// import logo from '../assets/stackblitzIcon.svg';

export type EmbedOpts = {
  /** Either an element ID string or the target HTMLElement itself. */
  elementOrId?: string | HTMLElement;
} & EmbedOptions;

export type StackBlitzProps = Project &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * String of the Github username, repo and optionally branch/tag/commit.
     * https://developer.stackblitz.com/docs/platform/javascript-sdk#sdkopengithubprojectreposlug-opts
     */
    repoSlug?: string;
    /** The ID of the StackBlitz project to open */
    projectId?: string;
    embedOpts?: EmbedOpts;
    openOpts?: OpenOptions;
  };

const StackBlitz: React.FC<StackBlitzProps> = (props) => {
  useEffect(() => {
    embdedStackblitz();
  }, []);
  const {
    embedOpts = {},
    files,
    title,
    description,
    template = "create-react-app",
    tags,
    dependencies,
    settings,
  } = props || {};
  const { ...otherEmbedOpts } = embedOpts;
  function embdedStackblitz() {
    const project = {
      files,
      title,
      description,
      template,
      tags,
      dependencies,
      settings,
    };
    sdk.embedProject("myDiv", project, otherEmbedOpts);
  }
  return (
    <>
      {/* <Button variant="secondary" {...other} >
      {props.children}
      <img src={logo} className="App-logo" alt="logo" /></Button>
    <span className='pe-2'></span> */}
    </>
  );
};

export default StackBlitz;
