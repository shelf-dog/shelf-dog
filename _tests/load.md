---
module: Load
title: Client API Load Tests
for: [test]
requires: [client]
script: modules/test/tests/load
tests:
  - name: Users
    desc: Test API User Load Performance Calls
    function: users
---
To check API performance under higher __load__ conditions.