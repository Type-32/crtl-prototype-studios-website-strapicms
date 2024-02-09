import {region} from "@smithy/signature-v4/dist-types/suite.fixture";

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-upload-minio-v4',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY'),
        secretKey: env('MINIO_SECRET_KEY'),
        bucket: env('MINIO_BUCKET'),
        endPoint: env('MINIO_ENDPOINT'),
        port: env('MINIO_PORT'),
        useSSL: env('MINIO_USE_SSL'),
        folder: env('MINIO_FOLDER'),
        host: env('MINIO_HOST'),
      },
    },
  },
});
