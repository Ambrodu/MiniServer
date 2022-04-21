# MiniServer

Small webserver template running on express with multiple domains support and bot blocking.

## Deployment

To deploy this project run

```bash
npm install
```

```bash
pm2 start app.js
```
## Enable/Disable bots

Change `true` to `false` to allow bots from crawling your websites.

```javascript
app.use(noBots({block:true}));
```
