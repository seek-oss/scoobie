FROM node:12-alpine

RUN apk add --no-cache docker

RUN set -x \
  && docker --version \
  && node --version \
  && npm --version

WORKDIR /workdir

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
