1. Install Static Web Apps CLI:
    ```bash
    npm i -g @azure/static-web-apps-cli
    ```

1. Start the app using the CLI. Behind the scenes it calls `func` to start Core Tools.
    ```bash
    swa start www --api-location api
    ```

You should be able to access the app at `http://localhost:4280/`.

`http://localhost:4280/api/HttpTrigger1` should be proxied to the function app. If the user is logged in, it'll automatically insert the `x-ms-client-principal` header.