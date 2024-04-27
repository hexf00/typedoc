import * as TypeDoc from "../";

const init = async () => {
    const app = await TypeDoc.Application.bootstrapWithPlugins({
        entryPoints: ["../doc-test/src/index.ts"],
        tsconfig: "../doc-test/tsconfig.json",
        out: "docs",
        plugin: ["typedoc-plugin-include-example"],
    });

    const project = await app.convert();
    if (project) {
        await app.generateDocs(project, "docs");
    }
};

init().catch((error) => {
    console.error(error);
    process.exit(1);
});
