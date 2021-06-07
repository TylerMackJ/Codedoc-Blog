import { getRenderer } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { TabSelector } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { ToCPrevNext } from '/home/tyler/dev/codedoc/Codedoc-Blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  'GnIncMWQvCESfqTaGY4kNQ==': TabSelector,
  '3VmazAPakJsyuwKaJjNYzA==': CollapseControl,
  'QXX9OP4WW82mdv3vohnFYQ==': GithubSearch,
  '+S9+LUC+9p+72SsxPJB9Gw==': ToCToggle,
  'cm6hHyKJ96d5yQlaHh6JEg==': DarkModeSwitch,
  't0rA7iDQqoSdPBo7Z3CDwA==': ConfigTransport,
  'YBPozPAZLrTtOtBm8W9C9w==': ToCPrevNext
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
