# Awesome Notes

Software tools are evolving at *incredible speeds*. It is impossible to catch all of them. With the experience we have accumulated over the years, we have prepared many starter templates to save your time. You can find them [?q=starter-template](https://github.com/orgs/awe-templates/repositories?q=starter-template). Our goal is to increase our speed and productivity and create more sustainable development environments.

This repo contains various notes and recipes for those who want to produce a new starter template. We share with you the information and experiences that you will frequently use when preparing a starter template.

## Start Documentation Server

First of all, you need to install the `docsify-cli` globally. You can do this using either `pnpm` or `npm`. Here is the command:

```bash
pnpm|npm i docsify-cli -g
```

Start documentation using the following command:

```bash
pnpm dlx docsify-cli serve docs --port 1000

# or

npx docsify serve docs --port 1000
```
