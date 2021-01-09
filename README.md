## USAGE:

1. To create a new project, execute the below command

   `serverless install -u https://github.com/GurungPinkel/sls-aws-node-typescript -n <name-your-project>`

1. navigate the the project folder and install the dependencies

   `$ npm install`

1. To execute a function locally,

   `sls invoke local -f <function name> --stage <stage> --profile <aws profile>`

1. To package the app,

   `sls package`

1. To deploy the app,

   ` sls deploy -v --stage <stage> --profile <aws profile>`
