# HelloTask

适用于 WAP 端，使用了 Vant UI 组件库，支持 PWA 的基础的 Vue 项目架构。

---

### 目录架构说明 src/

_api_：网络请求接口定义

_const_：全局常量定义

_mock_：模拟数据定义

_vant_：vant 定义

_utils_：工具定义

### 特别文件

_main.js_：代码`import "./mock/index";` 启用模拟数据

_utils/GlobalParamsUtil.js_：全局参数工具定义

_const/Urls_：全局 url 定义

### 特别方法

`goIn(vm, [params...])` 进入当前 view 的方法，可定义参数

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
