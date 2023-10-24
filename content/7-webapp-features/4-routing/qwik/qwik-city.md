With [qwik-city](https://qwik.builder.io/qwikcity/overview/)

```
|-- routes/
    |-- index.tsx // index page "/"
    |-- about/
        |-- index.tsx // about page "/about"
    |-- layout.tsx // global app layout
    |-- [id]/
        |-- index.tsx // dynamic parameter
    |-- [...catchall] // is a directory that represents a dynamic catch-all route
    |-- 404.tsx // Custom 404 Page
    |-- (name) // By enclosing any directory name in parentheses, like (name),
    // the directory name itself will not be included in the URL pathname.
```
