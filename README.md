
# aiwebsite

A simple AI agent platform website with download functionality.

## Project Setup

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

## Download Configuration

To configure the download functionality:

1. Host your downloadable file on a server or CDN
2. Update the `DOWNLOAD_URL` constant in `src/config/download.ts`
3. The download button will automatically use this URL

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory.
