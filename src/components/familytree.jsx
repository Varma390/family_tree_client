import React, {useState, useEffect} from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { useDispatch } from "react-redux";
import { select1 } from "../actions/actions";

export const FamilyTree = ({data}) => {
  const dispatch = useDispatch()

    const renderTree = (nodes) => (
        <TreeItem key={Math.floor(Math.random() * 100).toString()} nodeId={Math.floor(Math.random() * 100).toString()} label={<span onClick={(e) => dispatch(select1(e.target.innerHTML))}>{nodes.name}</span>}>
        {/* <TreeItem key={nodes.id} nodeId={nodes.id} label={<span onClick={(e) => dispatch(select1(e.target. */}
        
          {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
      );
    
      return (
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          // onNodeSelect={() => handleSelectedItems()}
          sx={{  height: 110, flexGrow: 1, maxWidth: 200, overflowY: 'auto' }}
        >
          {renderTree(data.users[0])}
        </TreeView>
      );
}
// 
