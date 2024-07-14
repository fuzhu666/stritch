import { defineComponent, toRef, computed, useSSRContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, resolveDynamicComponent, renderSlot as renderSlot$1 } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, i as appConfig, d as useUI, p as useAppConfig, y as config$6, x as __nuxt_component_0$8, l as __nuxt_component_1, _ as _export_sfc } from './server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderSlot as ssrRenderSlot$1 } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Bum7rJyU.mjs';
import { r as renderSlot } from './slot-TbM67qIw.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'nitropack/dist/runtime/plugin';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './node-04k6j4dz.mjs';

const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot$1(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot$1(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot$1(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot$1(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot$1(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot$1(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: "primary"
    },
    to: {
      type: String,
      default: void 0
    },
    target: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const appConfig2 = useAppConfig();
    const config2 = computed(() => ({
      wrapper: "relative group overflow-hidden flex items-center rounded-lg",
      to: "hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
      icon: {
        base: "w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"
      },
      body: {
        base: "flex-1"
      },
      externalIcon: {
        name: appConfig2.ui.icons.external,
        base: "w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"
      },
      title: "text-gray-900 dark:text-white font-semibold text-base my-0",
      description: "text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"
    }));
    const props = __props;
    const { ui, attrs } = useUI("content.card", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const colorLight = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$6[props.color]) == null ? void 0 : _a["500"]) || config$6[props.color] || props.color;
    });
    const colorDark = computed(() => {
      var _a;
      if (props.color === "primary") {
        return "rgb(var(--color-primary-DEFAULT))";
      }
      return ((_a = config$6[props.color]) == null ? void 0 : _a["400"]) || config$6[props.color] || props.color;
    });
    const target = computed(() => props.target || (props.to && props.to.startsWith("http") ? "_blank" : void 0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$8;
      const _component_UIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: [unref(ui).wrapper, __props.to && unref(ui).to]
      }, unref(attrs), {
        ui: unref(ui),
        style: { "--color-light": unref(colorLight), "--color-dark": unref(colorDark) }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.to) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: __props.to,
                target: unref(target),
                class: "focus:outline-none",
                tabindex: "-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: __props.icon,
                class: unref(ui).icon.base
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!!__props.to && unref(target) === "_blank") {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: unref(ui).externalIcon.name,
                class: unref(ui).externalIcon.base
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>${ssrInterpolate(__props.title)}</p>`);
            if (_ctx.$slots.default) {
              _push2(`<p class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.to ? (openBlock(), createBlock(_component_NuxtLink, {
                key: 0,
                to: __props.to,
                target: unref(target),
                class: "focus:outline-none",
                tabindex: "-1"
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "absolute inset-0",
                    "aria-hidden": "true"
                  })
                ]),
                _: 1
              }, 8, ["to", "target"])) : createCommentVNode("", true),
              __props.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                name: __props.icon,
                class: unref(ui).icon.base
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              !!__props.to && unref(target) === "_blank" ? (openBlock(), createBlock(_component_UIcon, {
                key: 2,
                name: unref(ui).externalIcon.name,
                class: unref(ui).externalIcon.base
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              createVNode("p", {
                class: unref(ui).title
              }, toDisplayString(__props.title), 3),
              _ctx.$slots.default ? (openBlock(), createBlock("p", {
                key: 3,
                class: unref(ui).description
              }, [
                renderSlot(_ctx.$slots, "default", { unwrap: "p" })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Card-CuymjYxg.mjs.map
