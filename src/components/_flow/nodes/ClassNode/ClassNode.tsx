import React from "react";
import {Node} from "reactflow";
import {Content, Context, Header} from "./ClassNode.styles";
import {Divider} from "@mui/material";

///////////////////////////////////////////////////////////////////////////////

/**
 * This is the data of a `ClassNode` node. It represents
 * all attributes of a class of a UML class diagram.
 */
export interface ClassNodeData {
    /**
     * The class's name.
     */
    name: string;
    /**
     * The node's color.
     */
    color: string;
    /**
     * The class's attributes. Here, it is
     * represented as an array of strings.
     */
    attributes: string[];
    /**
     * The class's operations. Here, it is
     * represented as an array of strings.
     */
    operations: string[];
}

///////////////////////////////////////////////////////////////////////////////

/**
 * This component is a React Flow node that represents a class of a UML class diagram.
 */
const ClassNode: React.FC<Node<ClassNodeData>> = (props) => {
    return (
        <Context col={props.data.color}>

            {/* Class Name (= title) */}
            <Header col={props.data.color}>
                { props.data.name }
            </Header>

            {/* Actual content */}
            <Content selected={props.selected}>

                {/* Class attributes */}
                <div>
                    {props.data.attributes.map(x => (
                        <div key={x}>
                            <span>{ x }</span>
                            <br />
                        </div>
                    ))}
                </div>

                <Divider sx={{ marginY: 2 }} />

                {/* Class operations */}
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