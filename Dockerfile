FROM ubuntu:14.04.4
MAINTAINER Tanat Kamalov

ENV HOME /root
WORKDIR /var/www

RUN apt-get update -qq \
    && apt-get install -y -qq git curl wget python build-essential \
    && curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - \
    && apt-get install -y -qq nodejs \
    && rm -rf /var/lib/apt/lists/*

ADD entrypoint.sh /
CMD ["/entrypoint.sh"]
