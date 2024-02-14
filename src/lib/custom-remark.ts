import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

interface Node {
  type: string;
  children?: Node[];
  depth?: number;
  value?: string;
  data?: any;
}

interface HeadingNode extends Node {
  depth: number;
}

export interface TransformedNode {
  value: string;
  depth: number;
  data: any;
  children: TransformedNode[];
}

interface IndexMap {
  [depth: number]: TransformedNode;
}

interface NodesCount {
  [id: string]: number;
}

export const headingTree = () => {
  return (node: Node, file: any) => {
    file.data.headings = getHeadings(node);
  };
};

const getHeadings = (root: Node): TransformedNode[] => {
  const nodes: NodesCount = {};
  const output: TransformedNode[] = [];
  const indexMap: IndexMap = {};

  visit(root, 'heading', (node: HeadingNode) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
};

const addID = (node: HeadingNode, nodes: NodesCount) => {
  const id = (node.children?.map((c: Node) => c.value).join('') || 'default-id')
    .toLowerCase() // 소문자 교체
    .replace(/\s+/g, '-') // 공백 하이픈 교체
    .replace(/[^a-z0-9\uAC00-\uD7A3\-]/g, ''); // 안전하지 않은 문자 제거

  nodes[id] = (nodes[id] || 0) + 1;

  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? `-${nodes[id] - 1}` : ''}`,
    },
  };
};

const transformNode = (
  node: HeadingNode,
  output: TransformedNode[],
  indexMap: IndexMap
) => {
  const transformedNode: TransformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
};
