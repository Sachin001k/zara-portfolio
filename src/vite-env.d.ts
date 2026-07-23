/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "react-quill" {
  import type { ComponentType } from "react";

  type ReactQuillProps = {
    theme?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    modules?: Record<string, unknown>;
    placeholder?: string;
    readOnly?: boolean;
    className?: string;
  };

  const ReactQuill: ComponentType<ReactQuillProps>;
  export default ReactQuill;
}
