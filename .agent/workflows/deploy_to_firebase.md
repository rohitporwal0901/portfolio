---
description: Deploy the portfolio to Firebase Hosting
---

1.  **Login to Firebase** (if not already logged in):
    ```bash
    firebase login
    ```

2.  **Select your Firebase Project**:
    Run the following command and select the project you want to deploy to (or create a new one):
    ```bash
    firebase use --add
    ```
    Select the alias `default` when prompted.

3.  **Build the Project**:
    Ensure the latest version of your app is built:
    ```bash
    npm run build
    ```

4.  **Deploy**:
    Deploy the `dist` folder to Firebase Hosting:
    ```bash
    firebase deploy --only hosting
    ```

5.  **Verify**:
    The CLI will output a "Hosting URL". Click it to view your live portfolio.
