# 🕹️ Serve

Test your application locally before deploying it to the server/cloud.

## 🌍 Serving Static Files

### 📍 Serve

**[serve](https://github.com/vercel/serve)** is a static file server for single-page applications, designed to be used with the [Vercel](https://vercel.com) platform.

Install `serve` globally:

```bash
pnpm i --global serve
```

Then serve target directory as a static file server:

```bash
serve dist
```

### 📍 PM2

**[PM2](https://pm2.keymetrics.io/)** is a daemon process manager that will help you manage and keep your application online 24/7.

Install `pm2` globally:

```bash
pnpm install pm2 -g
```

Then start your application with `pm2`:

```bash
pm2 start dist
```
