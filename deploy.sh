#!/usr/bin/env bash

npm run build;

firebase deploy --only hosting:docs-known-origin-io
