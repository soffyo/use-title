# use-title
>React hook for managing the document title

This hook is used for setting the current document title. It provies a way to add a prefix alongside every title through HTML `<meta>` tags in a SPA (single page app).

## Usage example

`index.html`
```html
<meta name="use-title-prefix" content="My custom prefix">
```

`index.js`
```javascript
import { useTitle } from "use-title"

function Component() {
    useTitle("My page title")
    
    return (
        ...
    )
}
```
### Resulting title

``` 
My page title - My custom prefix 
```

## Prefix

The prefix functionality is provided via setting a `<meta>` tag into the HTML which loads your script. The HTML meta tag must have a `name="use-title-prefix"` attribute and the `content=""` attribute value determines your custom prefix. This prefix will be included in every title set via the `useTitle` hook, unless the `{ prefix: false }` option is passed. 

## API

The useTitle hook doesn't return anything and accepts two arguments:

```typescript
title: string
options?: { prefix: boolean }
```

+ **title**: *Non-Optional* - the title you want to use for the actual page when the component is rendered.
+ **options**: *Optional* - a config object. It only supports the *prefix* property for now which determines if the prefix set via `meta` HTML tags will be included in the page title. Defaults to `{ prefix: true }`



