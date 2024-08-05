import crypto from "crypto";

export const generateMd5Checksum = (data) => {
  return crypto.createHash("md5").update(data).digest("hex");
};
