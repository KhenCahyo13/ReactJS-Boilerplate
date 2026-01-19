## Explanation

This folder will contains your app features, and if you want, you can use Container-Presentational pattern for your codes, so it will separate your codes for view and for the business logic. Below is the example of how you can utilize this folder:

```
- features
    - tickets
        - create
            - view.tsx -> presentational (it will receive props from container)
            - index.tsx -> container (it will call in the routes)
            - types.d.ts -> types
            - schema.ts -> form schema & default values
        - list
            - ...... (same)
        - details
            - ...... (same)
    - .... (another features)
```