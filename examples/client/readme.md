this test will be runned in browser, then we need build step, I user bundle to install it run
```
deno install --unstable --allow-read --allow-write --allow-net --allow-env --name bundler https://deno.land/x/bundler/cli.ts
```
then 
```
bundler bundle src/index.html=index.html
```
and copy file todos.json (mocked todos) by running <br>
```
deno run --allow-read --allow-write copy.ts
```
and file server to serve files in dist, you will run:
```
cd dist
deno run --allow-net --allow-read https://deno.land/std@/http/file_server.ts dist
```
then open http://0.0.0.0:4507 in your browser
summy for commands
```
deno install --unstable --allow-read --allow-write --allow-net --allow-env --name bundler https://deno.land/x/bundler/cli.ts
bundler bundle src/index.html=index.html
deno run --allow-read --allow-write copy.ts
deno run --allow-net --allow-read https://deno.land/std@/http/file_server.ts dist

```

 