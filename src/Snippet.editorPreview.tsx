import { parseStyle } from "./piw-utils-internal";
import { SnippetPreviewProps } from "../typings/SnippetProps";

declare function require(name: string): string;

export function preview(props: SnippetPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
