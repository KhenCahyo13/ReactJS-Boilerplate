## Explanation

Actually this folder is came from ShadCN, and and every you want to create your custom components, you must think about the context of the components, then you create folder group for those components. For the details, see the structure below:

```
- components
    - ui
        - ... (just for ShadCN UI Components)
    - layouts (it means, it will contains all files of components layout)
        - authenticated-layout.tsx
        - unauthenticated-layout.tsx
        - content-layout.tsx
    - ...(another folders)
```