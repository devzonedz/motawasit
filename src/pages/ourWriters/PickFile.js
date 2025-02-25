import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

// const thumb = {
//   display: 'inline-flex',
//   borderRadius: 2,
//   border: '1px solid #eaeaea',
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: 'border-box',
// };

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden',
// };

// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%',
// };

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf,.doc,.docx,.odt',
    maxFiles: 1,
    onDrop: async acceptedFiles => {
      await setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      props.setData(prevState => ({ ...prevState, file: acceptedFiles[0] }));
    },
  });

  const preview = files.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="item-image-picker">
      <div
        style={{ padding: 40, border: '1px solid #ddd', borderRadius: '7px' }}
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <p>اسحب الملف هنا او قم بالضغط لتحديده</p>
      </div>
      <aside style={thumbsContainer}>{preview}</aside>
    </section>
  );
}
