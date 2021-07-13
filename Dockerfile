FROM debian:buster-slim

WORKDIR /bot
COPY ./ ./
RUN apt update && apt install -y curl && \
  curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt update && \
  apt install -y git cron nodejs yarn python3-distutils && \
  curl -sL https://bootstrap.pypa.io/get-pip.py | python3 - && \
  pip install --user --upgrade git+https://github.com/twintproject/twint.git@origin/master#egg=twint && \
  pip install python-dotenv && \
  yarn install && \
  yarn build

ENTRYPOINT [ "bash", "-c", "'while !</dev/tcp/db/3306; do sleep 1; done; ./entrypoint.sh'" ]