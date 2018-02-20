To use `uniq-id` simply:

```
var uniqID = require('uniq-id');

uniqID();
// '5bc1afc03bb3e5b89838'
```

If you want a particular pattern or character set:
**generateUUID(Pattern, # of characters)**

```
uniqID.generateUUID('xxxxyxxxxyxxxxyxxxxy', 16)(); // Default behaviour
// 'a2b6b957f9eeb5a3f88a'

uniqID.generateUUID('xxx-xxx', 2)();
// '110-100'

uniqID.generateUUID('5xxx-4xxx-3xxx', 62)();
// '51f9-4wIs-30BX'
```
