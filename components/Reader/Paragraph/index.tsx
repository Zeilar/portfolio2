"use client";

import type { Entry, RTParagraph } from "../../../types";
import { CodeBlock } from "../CodeBlock";
import { HyperLink } from "../HyperLink";
import { Text } from "../Text";

interface Props {
	paragraph: RTParagraph;
	entries?: Entry[];
}

export function Paragraph({ paragraph, entries }: Props) {
	return (
		<>
			{paragraph.content.map((node, i) => {
				switch (node.nodeType) {
					case "text":
						return <Text key={i} text={node} />;
					case "hyperlink":
						return <HyperLink key={i} hyperLink={node} />;
					case "embedded-entry-inline":
						if (!entries) {
							return null;
						}
						// eslint-disable-next-line no-case-declarations
						const codeBlock: Entry | undefined = entries.find(
							(entry) => entry.sys.id === node.data.target.sys.id
						);
						return codeBlock ? (
							<CodeBlock
								key={i}
								code={codeBlock.fields.code}
								language={codeBlock.fields.language}
							/>
						) : null;
					default:
						return null;
				}
			})}
		</>
	);
}
