const fs = require('fs');
const path = require('path');

// 需要更新的文件列表
const filesToUpdate = [
  'src/components/basics/Borders.vue',
  'src/components/basics/Shadows.vue',
  'src/components/basics/Transforms.vue',
  'src/components/basics/Animations.vue',
  'src/components/html/Header.vue',
  'src/components/html/Canvas.vue',
  'src/components/html/Forms.vue',
  'src/components/html/Media.vue',
  'src/components/javascript/DOMAPI.vue',
  'src/components/javascript/Functions.vue',
  'src/components/javascript/Prototype.vue',
  'src/components/javascript/BOMAPI.vue',
  'src/components/javascript/Modules.vue',
  'src/components/javascript/DataTypes.vue',
  'src/components/javascript/AsyncProgramming.vue',
  'src/components/preprocessors/Comparison.vue',
  'src/components/preprocessors/LessDemo.vue'
];

function updateCodeBlocks(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`文件不存在: ${fullPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let updated = false;

  // 1. 替换简单的动态代码块 <pre class="code-block"><code>{{ variable }}</code></pre>
  content = content.replace(
    /<pre class="code-block"><code>{{ (\w+) }}<\/code><\/pre>/g,
    '<CodeBlock :code="$1" language="css" :show-line-numbers="true" />'
  );

  // 2. 替换带标题的动态代码块
  content = content.replace(
    /<h4 class="font-semibold mb-2">([^<]+)<\/h4>\s*<pre class="code-block"><code>{{ (\w+) }}<\/code><\/pre>/g,
    '<CodeBlock :code="$2" language="css" title="$1" :show-line-numbers="true" />'
  );

  // 3. 替换静态HTML代码块
  content = content.replace(
    /<pre><code>(&lt;[^<]+)<\/code><\/pre>/gs,
    (match, htmlCode) => {
      const cleanCode = htmlCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      return `<CodeBlock code="${cleanCode}" language="markup" :show-line-numbers="true" />`;
    }
  );

  // 4. 检查是否需要导入 CodeBlock
  if (content.includes('<CodeBlock') && !content.includes('import CodeBlock')) {
    // 在 <script> 标签后添加导入
    content = content.replace(
      /<script>\s*export default \{/,
      `<script>
import CodeBlock from '@/components/common/CodeBlock.vue'

export default {
  components: {
    CodeBlock
  },`
    );
    updated = true;
  }

  // 检查是否有变化
  const originalContent = fs.readFileSync(fullPath, 'utf8');
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`已更新: ${filePath}`);
    updated = true;
  }

  return updated;
}

// 批量更新文件
console.log('开始批量更新代码块...');
let totalUpdated = 0;

filesToUpdate.forEach(filePath => {
  if (updateCodeBlocks(filePath)) {
    totalUpdated++;
  }
});

console.log(`\n批量更新完成! 共更新了 ${totalUpdated} 个文件。`);
