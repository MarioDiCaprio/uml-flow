import React, {useState} from "react";
import {StyledAccordion} from "./NodeSettingsPanel.styles";
import {Node, Panel, useOnSelectionChange} from "reactflow";
import {AccordionDetails, AccordionSummary} from "@mui/material";
import {MdExpandMore as ExpandIcon} from "react-icons/md";
import ClassNodeSettings from "@/components/_flow/settings/ClassNodeSettings/ClassNodeSettings";

//////////////////////////////////////////////////////////////////////////////////

/**
 * This component maps a given node to its corresponding settings, which can promptly
 * be found under `/src/components/_flow/settings`. Which settings component is to be
 * displayed is determined by the node's `type` attribute.
 */
const SettingsContext: React.FC<{ node: Node }> = ({ node }) => {
    switch (node.type) {
        case 'class':
            return <ClassNodeSettings {...node} />;
        default:
            return <></>;
    }
}

//////////////////////////////////////////////////////////////////////////////////

/**
 * This component is a React Flow panel that displays a node's settings. Only the active
 * (= selected) node's settings are displayed. All nodes' settings can be found under
 * `/src/components/_flow/settings`. If no node is active, then nothing is rendered.
 */
const NodeSettingsPanel: React.FC = () => {
    const [active, setActive] = useState<Node | null>(null);

    useOnSelectionChange({
        onChange: ({ nodes }) => {
            setActive((nodes.length === 1)? nodes[0] : null);
        }
    });

    if (!active) {
        return <></>;
    }

    return (
        <Panel position="top-right">
            <StyledAccordion defaultExpanded>

                {/* Accordion Title */}
                <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="node-settings-menu-content" id="node-settings-menu-header">
                    <b>Node Settings</b>
                </AccordionSummary>

                {/* Actual settings */}
                <AccordionDetails>
                    <SettingsContext node={active} />
                </AccordionDetails>

            </StyledAccordion>
        </Panel>
    );
}

export default NodeSettingsPanel;