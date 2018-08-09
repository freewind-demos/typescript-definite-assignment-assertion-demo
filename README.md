TypeScript Definite Assignment Assertion Demo
=============================================

就是告诉编译器，我这个`private`的字段，虽然没有通过`constructor`初始化，但是我自己会在使用前把它初始化好的，你就不要报错了。

```
npm install
npx tsc --strict hello.ts
```

可以正常编译。