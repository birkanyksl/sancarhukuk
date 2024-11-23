"use client";
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import ToolBar from "./ToolBar";
import TextAlign from "@tiptap/extension-text-align";
import Underline from '@tiptap/extension-underline';


const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(), 
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Underline, 
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
  });

  return (
    <div>
      <ToolBar editor={editor} content={content} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};

export default RichTextEditor;
