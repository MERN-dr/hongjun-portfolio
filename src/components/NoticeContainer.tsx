import React from "react";

type Notice = {
    type: "ERROR" | "SUCCESS";
    content: string;
    visible?: boolean;
};

function NoticeContainer (props: Notice) {
    return (
        <>
        <div
            className={props.visible ? "p-3" : "hidden"}
            style={{
            backgroundColor:
                props.type === "SUCCESS"
                ? "rgba(152, 250, 180, 0.5)"
                : "rgba(255, 47, 0, 0.5",
            }}
        >
            <p
            style={{
                textAlign: "center",
                margin: 0,
                fontSize: 18,
                color: "black",
            }}
            >
            {props.content}
            </p>
        </div>
        </>
    );
};

export default NoticeContainer;