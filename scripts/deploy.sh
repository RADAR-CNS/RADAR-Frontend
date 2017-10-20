#!/bin/bash

BRANCH=$1

if [[ ${BRANCH} == "master" ]]; then
  # build project without base-href
  npm run build

  rsync -rvz --delete-after \
    --exclude=builds \
    --exclude=questionnaire \
    ${TRAVIS_BUILD_DIR}/dist/ \
    ${DEPLOY_USER}@${DEPLOY_SERVER}:/www/dashboard

  echo Deployed ${BRANCH} to /

elif [[ ${BRANCH} == "develop" ]]; then
  # add base-href with dev path
  npm run build -- --base-href /dev/

  rsync -rvz --delete-after \
    --exclude=coverage \
    ${TRAVIS_BUILD_DIR}/dist/ \
    ${DEPLOY_USER}@${DEPLOY_SERVER}:/www/dashboard/dev

  rsync -rvz --delete-after \
    ${TRAVIS_BUILD_DIR}/coverage/ \
    ${DEPLOY_USER}@${DEPLOY_SERVER}:/www/dashboard/dev/coverage

  echo Deployed ${BRANCH} to /dev/

else
  # add base-href with build path
  npm run build -- --base-href /builds/${TRAVIS_BUILD_NUMBER}/

  rsync -rvz --delete-after \
    ${TRAVIS_BUILD_DIR}/dist/ \
    ${DEPLOY_USER}@${DEPLOY_SERVER}:/www/dashboard/builds/${TRAVIS_BUILD_NUMBER}

  echo Deployed ${BRANCH} to /builds/${TRAVIS_BUILD_NUMBER}/

fi

exit 0
