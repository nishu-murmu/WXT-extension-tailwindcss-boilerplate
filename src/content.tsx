import type { ContentScriptContext } from "wxt/client";
import "~/src/tailwind/index.css";
import ReactDOM from "react-dom/client";
import App from "./content/App";

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createUi(ctx);
    ui.mount();
  },
});

function createUi(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: "wxt-tailwind-shadow-root",
    position: "inline",
    anchor: "body",
    append: "first",
    onMount: (uiContainer) => {
      console.log("content scripts called");
      const wrapper = document.createElement("div");
      uiContainer.append(wrapper);

      const root = ReactDOM.createRoot(wrapper);
      root.render(<App />);
    },
  });
}
