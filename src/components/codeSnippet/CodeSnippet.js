import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnippet=({code,language})=>{
    return (
        <SyntaxHighlighter language={language} style={docco}>
            {code}
        </SyntaxHighlighter>
    );
}

export default CodeSnippet;