FROM debian:bullseye-slim

RUN DEBIAN_FRONTEND=noninteractive \
  apt-get update && \
  apt-get install -yq curl && \
  curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get install -yq --no-install-recommends git cron make nodejs yarn python3-distutils && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  curl -sL https://bootstrap.pypa.io/get-pip.py | python3 -

WORKDIR /bot
COPY ./ ./
RUN cd .. && \
  git clone --depth=1 https://github.com/kevctae/twint.git twint && \
  cd twint && \
  pip3 install . -r requirements.txt && \
  cd .. && \
  cd bot && \
  pip install -r requirements.txt && \
  yarn install --network-concurrency 1 && \
  make build && \
  pip cache purge && \
  yarn cache clean && \
  rm -rf ./node_modules /root/.pkg-cache && \
  apt-get remove --purge -y make nodejs yarn && \
  apt-get autoremove -y && \
  apt-get clean

ENTRYPOINT [ "./script/entrypoint.sh" ]
