export const routes = [
    {
        path: "",
        loadChildren: "./examples-list.module#ExamplesListModule",
        data: { title: "NativeScript Code Samples" }
    }
]