(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{564:function(t,a,s){"use strict";s.r(a);var e=s(22),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"skeleton-骨架屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skeleton-骨架屏"}},[t._v("#")]),t._v(" Skeleton 骨架屏 "),s("to-api")],1),t._v(" "),s("demo-model",{attrs:{url:"/pages/componentsC/skeleton/skeleton"}}),t._v(" "),s("p",[t._v("骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("VUE")]),t._v("和"),s("code",[t._v("NVUE")]),t._v("的特性不同，组件动画在"),s("code",[t._v("VUE")]),t._v("上为由左到右形式，在"),s("code",[t._v("NVUE")]),t._v("上为明暗显隐的形式。")])]),t._v(" "),s("h3",{attrs:{id:"平台差异说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("App")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("头条小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("组件由"),s("code",[t._v("标题")]),t._v("，"),s("code",[t._v("段落")]),t._v("和"),s("code",[t._v("头像")]),t._v("组件组件，其中"),s("code",[t._v("段落")]),t._v("需要通过"),s("code",[t._v("rows")]),t._v("参数配置才显示，可以通过"),s("code",[t._v("title")]),t._v("和"),s("code",[t._v("avatar")]),t._v("是否显示"),s("code",[t._v("标题")]),t._v("和"),s("code",[t._v("头像")]),t._v(" 。"),s("br"),t._v("\n该组件的使用，有几个需要注意的点，如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("title")]),t._v("(可选)，是否显示"),s("code",[t._v("标题")]),t._v("占位行，该占位行不布满全屏宽度，同时与"),s("code",[t._v("段落")]),t._v("的距离较大以做明显区分")]),t._v(" "),s("li",[s("code",[t._v("avatar")]),t._v("(可选)，是否在左上角位置显示圆形的"),s("code",[t._v("头像")]),t._v("占位区域")]),t._v(" "),s("li",[s("code",[t._v("rows")]),t._v("(可选)，"),s("code",[t._v("段落")]),t._v("的行数")]),t._v(" "),s("li",[s("code",[t._v("loading")]),t._v("(必选)，是否加载中状态，如果为`true```则显示骨架屏组件占位，否则显示插槽中的内容")])]),t._v(" "),s("p",[t._v("数据请求完成后，将"),s("code",[t._v("loading")]),t._v("设置为"),s("code",[t._v("false")]),t._v("，会隐藏骨架组件")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"加载中动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载中动画"}},[t._v("#")]),t._v(" 加载中动画")]),t._v(" "),s("p",[t._v("设置"),s("code",[t._v("animate")]),t._v("为"),s("code",[t._v("true")]),t._v("，加载中的骨架块将会有一个动画效果，用以加强视觉效果。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":animate")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"显示头像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示头像"}},[t._v("#")]),t._v(" 显示头像")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"插槽内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽内容"}},[t._v("#")]),t._v(" 插槽内容")]),t._v(" "),s("p",[t._v("可以通过插槽写入展示的内容，当请求结束，将"),s("code",[t._v("loading")]),t._v("设置为"),s("code",[t._v("false")]),t._v("，此时会隐藏骨架组件，同时展示插槽内容。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatar")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u--text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("loading为false时，将会展示此处插槽内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u--text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tloading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 延时2秒钟")]),t._v("\n\t\t\tuni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示骨架占位图，设置为"),s("code",[t._v("false")]),t._v("将会展示子组件内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animate")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启动画效果")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("段落占位图行数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number | String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("rowsWidth")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String | Array | Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("100%")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("rowsHeight")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("段落的高度")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String | Array | Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示标题占位图")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("titleWidth")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("标题的宽度")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("50%")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("titleHeight")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("标题的高度")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("avatar")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示头像占位图")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("avatarSize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("头像占位图大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("32")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("avatarShape")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("头像占位图的形状，circle-圆形，square-方形")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("circle")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("square")])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);