# Zero n Ones - Qwik City App [Production Ready] ⚡️

Created by [Ibrahim Zaman](mailto:AbrahimZaman3@gmail.com)

- [Ibrahim Zaman's links](https://tiles.bio/abrahimzaman360)
- [Qwik Docs](https://qwik.builder.io/)

---

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
    │   └── Login
    │   └── Profile 
        └── Home (index.tsx)
```

- `src/routes`: routes directory, learn more at [Qwik City](https://qwik.builder.io/docs/qwikcity/).

- `src/components`: components directory.

- `public`: static assets directory.

## Add Integrations and deployment

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```
