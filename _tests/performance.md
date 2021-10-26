---
module: Performance
title: Client API Performance Tests
for: [test]
requires: [client]
script: modules/test/tests/performance
tests:
  - name: Auth
    desc: Test API Auth Performance Calls
    function: auth
  - name: Meta
    desc: Test API Meta Performance Calls
    function: meta
---
To check API performance under normal / low load conditions.