import fs from "fs";
import path from "path";
const deleteLocalFiles = (files) => {
  files.forEach((file) => {
    const filePath = path.resolve(file.path);
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", filePath, err);
    });
  });
};

export default deleteLocalFiles;
