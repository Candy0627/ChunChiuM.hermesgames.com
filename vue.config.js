module.exports = {
    publicPath: "./",
    outputDir: "dist",
    pages: {
        mb: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: "src/pages/mb/main.js",
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: "public/mIndex.html",
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: "mIndex.html",
            title: "《春秋M》事前登錄火熱進行中"
        },
        pc: {
            entry: "src/pages/pc/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "《春秋M》事前登錄火熱進行中"
        }
    },
    devServer: {
        port: 9090,
        proxy: "",
        // eslint-loader警告配置
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack: {
        devtool: "source-map"
    },
    lintOnSave: false
};
