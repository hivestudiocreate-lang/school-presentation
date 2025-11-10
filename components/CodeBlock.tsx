
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 w-full h-full flex items-center justify-center">
      <code className="font-mono text-sm md:text-base text-cyan-300">
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
   