import React, { Component } from "react";
import { render } from "react-dom";

export default function Video({ path }) {
    return (
        <>
            <video width="100%" height="100%" controls>
                <source src={path} type="video/mp4" />
                Your browser does not support this video format.
            </video>
        </>
    );
}