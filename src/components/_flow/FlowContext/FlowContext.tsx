import React from "react";
import {Box} from "@mui/material";
import {Background, MiniMap, ReactFlow} from "reactflow";

import 'reactflow/dist/style.css';
import ClassNode, {ClassNodeData} from "@/components/_flow/nodes/ClassNode/ClassNode";
import ControlsPanel from "@/components/_flow/panels/ControlsPanel/ControlsPanel";
import useStore from "@/zustand/store";
import NodeSettingsPanel from "@/components/_flow/panels/NodeSettingsPanel/NodeSettingsPanel";

////////////////////////////////////////////////////////////////////////

/**
 * This type maps a node type to its corresponding data.
 */
export type NodeDataTypes = {
    class: ClassNodeData
}

/**
 * This is later used in the main component to declare all node types.
 * Very important: If node types are added (e.g. for additional UML types),
 * then this object needs to be updated!
 */
const nodeTypes = {
    class: ClassNode
}

////////////////////////////////////////////////////////////////////////

/**
 * This component is the React Flow context for the page. Everything happens inside this
 * component.
 */
const FlowContext: React.FC = () => {
    const store = useStore();

    return (
        <Box width="100vw" height="100vh" position="fixed">
            <ReactFlow
                nodes={store.nodes}
                edges={store.edges}
                onNodesChange={store.onNodesChange}
                onEdgesChange={store.onEdgesChange}
                onConnect={store.onConnect}
                nodeTypes={nodeTypes}
            >
                <MiniMap />
                <ControlsPanel />
                <NodeSettingsPanel />
                <Background variant="cross" gap={50}/>
            </ReactFlow>
        </Box>
    );
}

export default FlowContext;