import React from "react";
import {Panel} from "reactflow";
import {Button, ButtonGroup} from "@mui/material";
import {useTheme, Theme} from "@mui/system";
import {AiOutlineAppstoreAdd as AddIcon} from "react-icons/ai";
import uuid from "react-uuid";
import useStore from "@/zustand/store";
import {NodeDataTypes} from "@/components/_flow/FlowContext/FlowContext";

////////////////////////////////////////////////////////////////////

function initialNodes(theme: Theme): NodeDataTypes {
    return {
        class: {
            name: 'MyClass',
            color: theme.palette.primary.main,
            attributes: [
                '- foo: int',
                '- bar: int'
            ],
            operations: [
                '+ doSomething(param: string): void'
            ]
        }
    }
}

////////////////////////////////////////////////////////////////////

const ControlsPanel: React.FC = () => {
    const theme = useTheme();
    const addNode = useStore(state => state.addNode);

    const initial = initialNodes(theme);

    function addNodeClicked() {
        addNode({
            id: 'class-' + uuid(),
            type: 'class',
            position: { x: 0, y: 0 },
            data: initial.class
        });
    }

    return (
        <Panel position="top-left">
            <ButtonGroup orientation="vertical">

                {/* Add Node */}
                <Button variant="contained" onClick={addNodeClicked}>
                    <AddIcon fontSize="1.4rem"/>
                </Button>

            </ButtonGroup>
        </Panel>
    );
}

export default ControlsPanel;