import {region} from "@smithy/signature-v4/dist-types/suite.fixture";

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options:{
          accessKeyId: env('MINIO_ACCESS_KEY_ID'),
          secretAccessKey: env('MINIO_ACCESS_SECRET'),
          baseUrl: env('MINIO_ENDPOINT'),
          region: 'us-west-rack2', // set as default on the minio config
          params: {
            Bucket: env('MINIO_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
