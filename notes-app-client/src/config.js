export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'hogarthww-notes-app-uploads',
  },
  apiGateway: {
    URL: 'https://dd6e1gnjze.execute-api.eu-west-1.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID: 'eu-west-1_cKz8C6FNb',
    APP_CLIENT_ID: '5phi59qeo71alcnuhdoa81ftsp',
    REGION: 'eu-west-1',
    IDENTITY_POOL_ID: 'eu-west-1:378453a5-1ed7-492f-9647-fee8c1fc8c87',
  },
};
