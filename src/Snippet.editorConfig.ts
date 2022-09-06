import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { SnippetPreviewProps } from "../typings/SnippetProps";

export function getProperties(
    values: SnippetPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: SnippetPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
