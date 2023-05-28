import logger from "../logger/logger";
import Minio from "minio";

const minioClient = new Minio.Client({
  endPoint: "play.min.io",
  port: 9000,
  useSSL: true,
  accessKey: "",
  secretKey: "",
});

const metaData = {
  "Content-Type": "application/octet-stream",
  "X-Amz-Meta-Testing": 1234,
  example: 5678,
};

const createFileBucket = (bucketName: string) => {
  minioClient.makeBucket(bucketName, "ru", (error: Error | null) => {
    if (error) {
      return logger.error(`Basket creation error ${bucketName} ${error}`);
    }

    return logger.info(`Basket: ${bucketName} created`);
  });
};

const saveFile = (bucketName: string, fileName: string, filePath: string) => {
  minioClient.fPutObject(bucketName, "photos-europe.tar", filePath, metaData, (error: Error | null) => {
    if (error) {
      return logger.error(`File upload error: ${fileName} ${error}`);
    }

    return logger.info(`File: ${fileName} upload`);
  });
};

export default { createFileBucket, saveFile };
