#!/bin/bash

VERSION="1.3.14"

# Angular Core
wget https://code.angularjs.org/${VERSION}/angular.js -N -P ../app/assets/vendor/
wget https://code.angularjs.org/${VERSION}/angular.min.js -N -P ../app/assets/vendor/

# Add-ons
wget https://code.angularjs.org/${VERSION}/angular-route.js -N -P ../app/assets/vendor/
wget https://code.angularjs.org/${VERSION}/angular-route.min.js -N -P ../app/assets/vendor/
