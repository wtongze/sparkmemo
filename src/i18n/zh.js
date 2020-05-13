module.exports = {
  menu: {
    file: '文件',
    fileMenu: {
      open: '打开',
      save: '保存',
      saveAs: '另存为',
      export: '导出',
      exportMenu: {
        exportToPDF: '导出至 PDF',
      },
      settings: '设置',
      quit: '退出',
    },
    edit: '编辑',
    editMenu: {
      undo: '撤销',
      redo: '重做',
      cut: '剪切',
      copy: '复制',
      paste: '粘贴',
      delete: '删除',
      selectAll: '全选',
    },
    insert: '插入',
    insertMenu: {
      heading: '标题',
      headingMenu: {
        heading1: '一级标题',
        heading2: '二级标题',
        heading3: '三级标题',
        heading4: '四级标题',
        heading5: '五级标题',
        heading6: '六级标题',
      },
      format: '格式',
      formatMenu: {
        bold: '加粗',
        italic: '斜体',
        strikethrough: '删除线',
      },
      inlineCode: '行内代码',
      inlineMath: '行内公式',
      codeBlock: '代码块',
      mathBlock: '公式块',
      hyperlink: '超链接',
      image: '图片',
      quote: '引用',
      orderedList: '有序列表',
      unorderedList: '无序列表',
      horizontalRule: '水平分割线',
    },
    view: '查看',
    viewMenu: {
      reload: '重新加载',
      toggleDevTools: '开发者工具',
      resetZoom: '重置缩放',
      zoomIn: '放大',
      zoomOut: '缩小',
    },
    window: '窗口',
    windowMenu: {
      minimize: '最小化',
      toggleFullScreen: '切换全屏',
    },
    help: '帮助',
    helpMenu: {
      about: '关于',
      checkForUpdates: '检查更新',
    },
  },
  dialog: {
    unsavedChange: {
      hasUnsavedChange: '当前有尚未保存的变动',
      discardUnsavedChange: '丢弃尚未保存的变动',
    },
    load: {
      selectLoadPath: '请选择打开文件的路径',
      cannotLoadFile: '无法读取文件',
    },
    save: {
      selectSavePath: '请选择保存文件的路径',
      cannotSaveFile: '无法保存文件',
    },
    saveAs: {
      selectSaveAsPath: '请选择另存文件的路径',
      cannotSaveAsFile: '无法另存文件',
    },
    mdFile: 'Markdown 文件',
    cancel: '取消',
  },
};
