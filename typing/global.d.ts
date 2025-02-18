declare const _globalThis: {
  [key: string]: any;
  Zotero: _ZoteroConstructable;
  ZoteroPane: _ZoteroPaneConstructable;
  Zotero_Tabs: typeof Zotero_Tabs;
  window: Window;
  document: Document;
  ztoolkit: typeof ztoolkit;
  addon: typeof addon;
};

declare const ztoolkit: import("E:/Github/zotero-plugin-toolkit").ZoteroToolkit;

declare const rootURI: string;

declare const addon: import("../src/addon").default;

declare const __env__: "production" | "development";