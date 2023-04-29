import React from "react";
import {Node} from "reactflow";
import {Content, Context, Header} from "./ClassNode.styles";
import {Divider} from "@mui/material";

///////////////////////////////////////////////////////////////////////////////

export interface ClassNodeData {
    name: string;
    color: string;
    attributes: string[];
    operations: string[];
}

///////////////////////////////////////////////////////////////////////////////

const ClassNode: React.FC<Node<ClassNodeData>> = (props) => {
    return (
        <Context col={props.data.color}>

            <Header col={props.data.color}>
                { props.data.name }
            </Header>

            <Content selected={props.selected}>
                <div>
                    {props.data.attributes.map(x => (
                        <div key={x}>
                            <span>{ x }</span>
                            <br />
                        </div>
                    ))}
                </div>
                <Divider sx={{ marginY: 2 }} />
                <div>
                    {props.data.operations.map(x => (
                        <div key={x}>
                            <span>{ x }</span>
                            <br />
                        </div>
                    ))}
                </div>
            </Content>

        </Context>
    );
}

export default ClassNode;