<h1 align="center">
  Mat Hayward Photography Portfolio
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b28e0afb-caea-470e-8edb-b6458ff1fc9b/deploy-status)](https://app.netlify.com/sites/boring-lalande-b686d0/deploys)

Gatsby + DatoCMS powered photography portfolio for Mat Hayward

- [Website](https://mat-hayward.netlify.com)
- [DatoCMS Dashboard](https://mat-hayward.admin.datocms.com)

## 🚀 Quick start

1.  **Clone the repo**

    ```sh
    git clone https://github.com/samuelgoddard/mat-hayward
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and install the local dependencies.

    ```sh
        yarn install
    ```

    Create a `.env` file in the root of your project and add a DATO_API_KEY variable, your API key can be found in dato dashboard > settings > API tokens > Read-only API token

    ```
        DATO_API_KEY=XXXXXXXXXXXXX
    ```

    Start developing locally.

    ```sh
    cd mat-hayward/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💫 Deployment

Deployment is done via Netlify on push to `master`, deploys can be triggered directly through the Dato Dashboard. This should be done after a mass edit to save API usage.

## 📄 Docs

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [DatoCMS](https://www.datocms.com/)
- [TailwindCSS](https://tailwindcss.com/)