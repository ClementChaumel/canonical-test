# Canonical technical test

The goal is to replicate the following design using [Vanilla framework](https://docs.vanillaframework.io) and using [this data](https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json) coming from the Wordpress API

 ![image](https://assets.ubuntu.com/v1/c0a2b5b5-candidate-test-blog-row-design.png)
 
 The result can be seen [here](https://clementchaumel.github.io/canonical-test/) 


# Installation

1. clone the project on your computer `git clone git@github.com:ClementChaumel/canonical-test.git`
2. go into the folder, install dependencies and run it.
  ```sh 
    cd canonical-test
    yarn
    yarn dev
  ```

3. The app is now accessible at `http://localhost:3000/`

# Testing
You can run `yarn test-all` to check jest tests, linting and typescript types.


# Building
This project uses [NextJS](https://nextjs.org/) to export the app into a static website optimised to be served over a CDN.
To create an optimised build run the following commands

```bash
yarn build
yarn export
```

You can then serve it using [serve](https://www.npmjs.com/package/serve)

```bash
cd out
npx serve -p 5555
```

And the generated static app will be running on http://localhost:5555/


# Deploying
The app is deployed automatically when changes happen on `master`

# About
This app was created using [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and is based on the [with-typescript-elsint-jest](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest) template.
