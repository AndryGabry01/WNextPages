import { full as emoji } from 'markdown-it-emoji'
import taskLists from 'markdown-it-task-lists';
import tm from "markdown-it-texmath" //https://www.npmjs.com/package/markdown-it-texmath
import markdownit from 'markdown-it'
import hljs from 'highlight.js' // https://highlightjs.org
import katex from 'katex';
import mft from "markdown-it-footnote"
import mdl from "markdown-it-deflist"
import mss from "markdown-it-sup"
import mssup from 'markdown-it-sub'
import mins from "markdown-it-ins"
import mmark from "markdown-it-mark"
import mabb from "markdown-it-abbr"
import mcus from "markdown-it-container"

// https://github.com/markdown-it/markdown-it?tab=readme-ov-file
//https://www.npmjs.com/package/markdown-it-multimd-table
//https://markdown-it.github.io/markdown-it/
export async function parseMarkdown(content: string) {

  // Actual default values
  const md = markdownit({
    linkify: true,
    html: true,
    typographer: true,
    // Actual default values
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre><code class="hljs">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (__) { }
      }

      return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    }

  })
  .use(mft)
  .use(mdl)
  .use(mss)
  .use(mssup)
  .use(mins)
  .use(mmark)
  .use(mabb)
  .use(mcus, 'spoiler', {

    validate: function(params) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
  
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
  
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
  
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  })
  .use(emoji).use(taskLists).use(tm, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
  }).use(tm, {
    engine: katex,
    delimiters: 'brackets',
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
  });

  const processedContent = md.render(content);

  return processedContent;
}
