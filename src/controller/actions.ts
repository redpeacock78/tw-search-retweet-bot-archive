import * as core from '#core/core';

const actions: () => Promise<void> = async (): Promise<void> => {
  console.log('Start Github Action version...');
  await core();
};

export = actions;
