import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings'
import { listsPlugin } from '@mdxeditor/editor/plugins/lists'
import { quotePlugin } from '@mdxeditor/editor/plugins/quote'
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break'
import { diffSourcePlugin } from '@mdxeditor/editor/plugins/diff-source'


export default function Editor() {
  return (
    <MDXEditor markdown='# Hello world' plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), diffSourcePlugin()]} />
  )
}
