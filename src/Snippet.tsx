import { SnippetContainerProps } from "../typings/SnippetProps";
import classNames from "classnames";

import "./ui/index.scss";
import { useEffect, useRef, useState } from "react";
import { useMount, useUnmount } from "ahooks";

import { set } from "dojo/html";

export default function (props: SnippetContainerProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [hasTriggerMount, setHasTriggerMount] = useState(false);

    useMount(() => {
        set(ref.current!, props.htmlContent);
    });
    useEffect(() => {
        if (!hasTriggerMount && props.mountAction?.canExecute && !props.mountAction.isExecuting) {
            setHasTriggerMount(true);
            props.mountAction.execute();
        }
    }, [props.mountAction]);

    useUnmount(() => {
        props.unmountAction?.execute();
    });

    return <div ref={ref} style={props.style} className={classNames("mendixcn-snippet", props.class)}></div>;
}
