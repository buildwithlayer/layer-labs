import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    h1: (props) => <h1 className="text-3xl font-extrabold my-5" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />,
    h3: (props) => <h3 className="text-xl font-medium mt-6 mb-2" {...props} />,
    p: (props) => <p className="my-2" {...props} />,
    a: (props) => (
        <a
            className="text-blue-600 hover:underline"
            {...props}
        />
    ),
    ul: (props) => <ul className="list-disc pl-5 mb-6" {...props} />,
    ol: (props) => <ol className="list-decimal pl-5 mb-6" {...props} />,
    li: (props) => <li className="my-2 mb-4" {...props} />,
    img: (props) => (
        <img
            className="max-w-full h-auto rounded-lg shadow-sm"
            {...props}
        />
    ),
    code: (props) => (
        <code className="bg-gray-100 p-1 rounded" {...props} />
    ),
    pre: (props) => (
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto" {...props} />
    ),
    blockquote: (props) => (
        <blockquote className="border-l-4 border-black/40 pl-4 italic text-gray-600 my-4" {...props} />
    ),
}

export function useMDXComponents(
    otherComponents: MDXComponents
): MDXComponents {
    return {
        ...components,
        ...otherComponents,
    };
}