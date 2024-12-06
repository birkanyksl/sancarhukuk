"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import ToolBar from "./ToolBar";
import TextAlign from "@tiptap/extension-text-align";
import Underline from '@tiptap/extension-underline';
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";


const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(), 
      TextAlign.configure({
        types: ["heading", "paragraph",],
      }),
      Highlight,
      Underline, 
      BulletList.configure({
        HTMLAttributes: {
          class: 'bulletList',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'orderedList',
        },
      })

    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
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
