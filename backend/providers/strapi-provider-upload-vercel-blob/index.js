'use strict';

const { put, del } = require('@vercel/blob');

// Files are stored at <folder>/<hash><ext> with no random suffix, which is the
// layout the frontend's imageResolver reads from (media/uploads/<filename>).
module.exports = {
  init({ token, folder = 'media/uploads' }) {
    const upload = async (file) => {
      const blob = await put(`${folder}/${file.hash}${file.ext}`, file.stream || file.buffer, {
        access: 'public',
        token,
        contentType: file.mime,
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      file.url = blob.url;
    };

    return {
      upload,
      uploadStream: upload,
      async delete(file) {
        await del(file.url, { token });
      },
    };
  },
};
