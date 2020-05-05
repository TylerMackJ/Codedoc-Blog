import { getRenderer } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/tyler/dev/codedoc/blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { reloadOnChange } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { TabSelector } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { ToCToggle } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/tyler/dev/codedoc/blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'J0wgazktbZUjdISUD+A+yQ==': TabSelector,
  'cnUjX84N4USZxspeSISSeQ==': CollapseControl,
  'r+KJL48+s/wbPvee5KMgCQ==': ToCToggle,
  'KpIwwdUnw5tPEVxiE0Zhfw==': DarkModeSwitch,
  'J7n9h5Hkx7EwL/YAaORytQ==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
