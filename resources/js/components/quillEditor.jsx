// src/components/quill-editor.jsx
import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image', 'video'],
  ['clean']
];

function QuillEditor({ initialValue, onChange }) {
  const editorRef = useRef(null); // Ref untuk div editor
  const quillInstance = useRef(null); // Ref untuk instance Quill

  // Efek untuk menginisialisasi Quill HANYA SEKALI
  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: 'Tulis Pesan Kamu Disini...',
      });

      // Menambahkan event listener untuk perubahan konten
      quillInstance.current.on('text-change', () => {
        const html = quillInstance.current.root.innerHTML;
        // Panggil onChange prop hanya jika ada perubahan yang signifikan
        // (misalnya, bukan hanya karena pemformatan internal Quill)
        if (onChange && html !== initialValue) { // Perbandingan untuk menghindari loop tak terbatas
          onChange(html);
        }
      });
    }

    // Cleanup: menghancurkan instance Quill saat komponen unmount
    return () => {
      if (quillInstance.current) {
        quillInstance.current.off('text-change'); // Hapus listener
        quillInstance.current = null; // Hapus referensi
      }
    };
  }, []); // <--- DEPENDENSI KOSONG: Ini sangat penting! Quill hanya diinisialisasi sekali.

  // Efek untuk memperbarui konten editor jika initialValue berubah dari luar
  // Ini berguna jika Anda mengedit artikel yang sudah ada
useEffect(() => {
  if (
    quillInstance.current &&
    typeof initialValue === 'string' &&
    initialValue !== quillInstance.current.root.innerHTML
  ) {
    quillInstance.current.root.innerHTML = initialValue;

    // Pindahkan kursor ke akhir konten (gunakan safe fallback)
    const length = quillInstance.current.getLength();
    quillInstance.current.setSelection(length, 0);
  }
}, [initialValue]);

  return (
    <div className="quill-editor-container"> {/* Tambahkan class untuk styling */}
      <div ref={editorRef} style={{ minHeight: '300px' }} />
    </div>
  );
}

export default QuillEditor;