import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

const QuillEditor = ({ value, onChange, placeholder }: Props) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "link"],
        ["clean"],
      ],
    }),
    [],
  );

  return (
    <div className="quill-wrap rounded-xl border border-border/40 bg-background overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder ?? "Write your musing…"}
      />
    </div>
  );
};

export default QuillEditor;
