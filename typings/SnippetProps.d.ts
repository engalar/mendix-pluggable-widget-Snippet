/**
 * This file was generated from Snippet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface SnippetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    htmlContent: string;
    mountAction?: ActionValue;
    unmountAction?: ActionValue;
}

export interface SnippetPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    htmlContent: string;
    mountAction: {} | null;
    unmountAction: {} | null;
}
