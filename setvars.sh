#!/bin/sh
# default unix environment variables
export http_proxy=http://www-proxy.cs.kadaster.nl:8082
export https_proxy=http://www-proxy.cs.kadaster.nl:8082
export no_proxy="127.0.0.1, localhost, .so.kadaster.nl, .cs.kadaster.nl"
export NODE_TLS_REJECT_UNAUTHORIZED=0
