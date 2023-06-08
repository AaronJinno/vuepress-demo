import { defineClientConfig } from "@vuepress/client"
import LinkCard from "./components/LinkCard.vue"
import FileDownload from "./components/FileDownload.vue"

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        // 全局加载组件components
        app.component("LinkCard", LinkCard);
        app.component("FileDownload",  FileDownload);
    },
});
