import React, {useState} from "react";
import {StyledAccordion} from "./NodeSettingsPanel.styles";
import {Node, Panel, useOnSelectionChange} from "reactflow";
import {AccordionDetails, AccordionSummary} from "@mui/material";
import {MdExpandMore as ExpandIcon} from "react-icons/md";
import ClassNodeSettings from "@/components/_flow/settings/ClassNodeSettings/ClassNodeSettings";

//////////////////////////////////////////////////////////////////////////////////

const SettingsContext: React.FC<{ node: Node }> = ({ node }) => {
    switch (node.type) {
        case 'class':
            return <ClassNodeSettings {...node} />;
        default:
            return <></>;
    }
}

//////////////////////////////////////////////////////////////////////////////////

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
                <AccordionSummary
                    expandIcon={<ExpandIcon />}
                    aria-controls="node-settings-menu-content"
                    id="node-settings-menu-header"
                >
                    <b>Node Settings</b>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsContext node={active} />
                </AccordionDetails>
            </StyledAccordion>
        </Panel>
    );
}

export default NodeSettingsPanel;