/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const markdownMock = `# Heading
## Subheading
### Sub-subheading
#### Sub-sub-subheading
Texto noraml
![React Logo w/ Text](https://source.unsplash.com/random)
- [x] Integers integers - Further Explore function declaration syntax and learn new ways to improve the documentation of your code.
- [x] Iteration iteration - Learn about \`for\` and benchmarking.
- [ ] Iteration iteration - Learn about \`for\` and benchmarking.
`;

type Props = {
  markdown?: string;
};

const MarkdownViewer: React.FC<Props> = ({ markdown }) => {
  return (
    <ReactMarkdown
      className="markdown"
      children={markdown || markdownMock}
      // components={{
      //   code({ node, inline, className, children, ...props }) {
      //     const match = /language-(\w+)/.exec(className || "");
      //     return !inline && match ? (
      //       <SyntaxHighlighter
      //         children={String(children).replace(/\n$/, "")}
      //         style={materialOceanic}
      //         language={match[1]}
      //         PreTag="div"
      //         {...props}
      //       />
      //     ) : (
      //       <code className={className} {...props}>
      //         {children}
      //       </code>
      //     );
      //   },
      // }}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default MarkdownViewer;
