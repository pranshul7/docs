"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[81923],{334576:function(N,i,e){e.r(i),e.d(i,{default:function(){return g}});var s=e(627424),h=e.n(s),t=e(667294),l=e(596707),c=e(64236),o=e(705785),d=e(490482),k=e(785893),m={};function g(){var p=(0,l.pC)(),u=(0,t.useState)(!1),n=h()(u,2),b=n[0],C=n[1],a=(0,t.useRef)(l.m8.location.pathname);return(0,t.useEffect)(function(){return l.m8.listen(function(r){r.location.pathname!==a.current&&(a.current=r.location.pathname,document.documentElement.scrollTo(0,0))})},[]),(0,k.jsx)(c.D.Provider,{value:{pkg:{name:"nocobase-docs",description:"A static site based on dumi",version:"0.0.1",license:"MIT",authors:[]},historyType:"browser",entryExports:m,demos:o.DE,components:o.wx,locales:d.k,loading:b,setLoading:C,hostname:void 0,themeConfig:{footer:"\xA9 2020-2024 NocoBase. All rights reserved.",prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,title:"NocoBase",logo:"https://www.nocobase.com/images/logo.png",nav:[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE",link:"/welcome/introduction"},{title:"Handbook","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook"},{title:"Plugin development","title.zh-CN":"\u63D2\u4EF6\u5F00\u53D1",link:"/development"},{title:"API reference","title.zh-CN":"API \u53C2\u8003",link:"/api"},{title:"NocoBase Home","title.zh-CN":"NocoBase \u9996\u9875",link:"https://www.nocobase.com","link.zh-CN":"https://cn.nocobase.com"}],sidebarEnhance:{"/welcome":[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE",type:"group",children:["/welcome/introduction","/welcome/introduction/features","/welcome/introduction/why"]},{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB",type:"group",children:[{title:"Installation","title.zh-CN":"\u5B89\u88C5",children:["/welcome/getting-started/installation","/welcome/getting-started/installation/docker-compose","/welcome/getting-started/installation/create-nocobase-app","/welcome/getting-started/installation/git-clone"]},{title:"Upgrading","title.zh-CN":"\u5347\u7EA7",children:["/welcome/getting-started/upgrading","/welcome/getting-started/upgrading/docker-compose","/welcome/getting-started/upgrading/create-nocobase-app","/welcome/getting-started/upgrading/git-clone"]},"/welcome/getting-started/env"]},{title:"Releases","title.zh-CN":"\u4EA7\u54C1\u53D1\u5E03",type:"group",children:[{title:"Roadmap","title.zh-CN":"\u8DEF\u7EBF\u56FE",link:"/welcome/release/roadmap"},{title:"Release notes","title.zh-CN":"\u66F4\u65B0\u65E5\u5FD7",children:["/welcome/release/v0200-changelog","/welcome/release/v0190-changelog","/welcome/release/v0180-changelog","/welcome/release/v0170-changelog","/welcome/release/v0160-changelog","/welcome/release/v0150-changelog","/welcome/release/v0140-changelog","/welcome/release/v0130-changelog","/welcome/release/v0120-changelog","/welcome/release/v0110-changelog","/welcome/release/v0100-changelog","/welcome/release/v0094-changelog","/welcome/release/v0093-changelog","/welcome/release/v0092-changelog","/welcome/release/v0091-changelog","/welcome/release/v0080-changelog","/welcome/release/v0075-changelog","/welcome/release/v0074-changelog","/welcome/release/v0073-changelog","/welcome/release/v0072-changelog","/welcome/release/v0071-changelog","/welcome/release/v0070-changelog","/welcome/release/v0060-changelog","/welcome/release/v0050-changelog","/welcome/release/v0040-changelog"]}]},{title:"Community","title.zh-CN":"\u793E\u533A",type:"group",children:["/welcome/community/contributing","/welcome/community/translations","/welcome/community/thanks"]}],"/handbook":[{title:"Guide","title.zh-CN":"\u6307\u5357",link:"/handbook"},{title:"Data modeling","title.zh-CN":"\u6570\u636E\u5EFA\u6A21",type:"group",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling"},{title:"Data model tools","title.zh-CN":"\u6570\u636E\u5EFA\u6A21\u5DE5\u5177",children:[{title:"Data source manager","title.zh-CN":"\u6570\u636E\u6E90\u7BA1\u7406",link:"/handbook/data-source-manager"},{title:"Graph collection manager","title.zh-CN":"\u53EF\u89C6\u5316\u6570\u636E\u8868\u7BA1\u7406",link:"/handbook/graph-collection-manager"}]},{title:"Data sources","title.zh-CN":"\u6570\u636E\u6E90",children:[{title:"Main database","title.zh-CN":"\u4E3B\u6570\u636E\u5E93\uFF1AMain",link:"/handbook/data-source-main"},{title:"External MySQL","title.zh-CN":"\u5916\u90E8\u6570\u636E\u6E90\uFF1AMySQL",link:"/handbook/data-source-external-mysql"},{title:"External MariaDB","title.zh-CN":"\u5916\u90E8\u6570\u636E\u6E90\uFF1AMariaDB",link:"/handbook/data-source-external-mariadb"},{title:"External PostgreSQL","title.zh-CN":"\u5916\u90E8\u6570\u636E\u6E90\uFF1APostgreSQL",link:"/handbook/data-source-external-postgres"}]},{title:"Collections","title.zh-CN":"\u6570\u636E\u8868",children:[{title:"File collection","title.zh-CN":"\u6587\u4EF6\u8868",link:"/handbook/file-manager/file-collection"},{title:"Tree collection","title.zh-CN":"\u6811\u8868",link:"/handbook/collection-tree"},{title:"Calendar collection","title.zh-CN":"\u65E5\u5386\u8868",link:"/handbook/calendar/calendar-collection"},{title:"Expression collection","title.zh-CN":"\u8868\u8FBE\u5F0F\u8868",link:"/handbook/workflow-dynamic-calculation/expression"},{title:"SQL collection","title.zh-CN":"SQL \u8868",link:"/handbook/collection-sql"},{title:"View collection","title.zh-CN":"\u6570\u636E\u5E93\u89C6\u56FE",link:"/handbook/collection-view"},{title:"Foreign data collection\uFF08FDW\uFF09","title.zh-CN":"\u5916\u90E8\u6570\u636E\u8868",link:"/handbook/collection-fdw"}]},{title:"Collection fields","title.zh-CN":"\u6570\u636E\u8868\u5B57\u6BB5",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling/collection-fields"},{title:"Data types","title.zh-CN":"\u6570\u636E\u7C7B\u578B",children:[{title:"String","title.zh-CN":"\u5B57\u7B26\u4E32",link:"/handbook/data-modeling/collection-fields/types/string"}]},{title:"UI types","title.zh-CN":"UI \u7C7B\u578B",children:[{title:"Attachment","title.zh-CN":"\u9644\u4EF6",link:"/handbook/file-manager/attachment-field"},{title:"Formula","title.zh-CN":"\u516C\u5F0F",link:"/handbook/field-formula"},{title:"China region","title.zh-CN":"\u4E2D\u56FD\u884C\u653F\u533A\u5212",link:"/handbook/china-region"},{title:"Sequence","title.zh-CN":"\u81EA\u52A8\u7F16\u7801",link:"/handbook/field-sequence"},{title:"Snapshot","title.zh-CN":"\u5FEB\u7167",link:"/handbook/field-snapshot"}]},{title:"Association types","title.zh-CN":"\u5173\u7CFB\u7C7B\u578B",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling/collection-fields/associations"},{title:"One-to-one","title.zh-CN":"\u4E00\u5BF9\u4E00",link:"/handbook/data-modeling/collection-fields/associations/o2o"},{title:"One-to-many","title.zh-CN":"\u4E00\u5BF9\u591A",link:"/handbook/data-modeling/collection-fields/associations/o2m"},{title:"Many-to-one","title.zh-CN":"\u591A\u5BF9\u4E00",link:"/handbook/data-modeling/collection-fields/associations/m2o"},{title:"Many-to-many","title.zh-CN":"\u591A\u5BF9\u591A",link:"/handbook/data-modeling/collection-fields/associations/m2m"}]}]}]},{title:"Edit UI","title.zh-CN":"\u914D\u7F6E\u754C\u9762",type:"group",children:[{title:"Edit UI mode","title.zh-CN":"\u914D\u7F6E\u754C\u9762\u6A21\u5F0F",link:"/handbook/ui/ui-editor"},{title:"Menu","title.zh-CN":"\u83DC\u5355",link:"/handbook/ui/menus"},{title:"Page","title.zh-CN":"\u9875\u9762",link:"/handbook/ui/pages"},{title:"Pop-up","title.zh-CN":"\u5F39\u7A97",link:"/handbook/ui/pop-up"},{title:"Blocks","title.zh-CN":"\u6DFB\u52A0\u533A\u5757",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/blocks"},{title:"Data blocks","title.zh-CN":"\u6570\u636E\u533A\u5757",children:[{title:"Table","title.zh-CN":"\u8868\u683C",link:"/handbook/ui/blocks/data-blocks/table"},{title:"Form","title.zh-CN":"\u8868\u5355",link:"/handbook/ui/blocks/data-blocks/form"},{title:"Table","title.zh-CN":"\u8BE6\u60C5",link:"/handbook/ui/blocks/data-blocks/details"},{title:"Gantt","title.zh-CN":"\u7518\u7279\u56FE",link:"/handbook/block-gantt"},{title:"Calendar","title.zh-CN":"\u65E5\u5386",link:"/handbook/calendar/calendar-block"}]},{title:"Filter blocks","title.zh-CN":"\u7B5B\u9009\u533A\u5757",children:[{title:"Form","title.zh-CN":"\u8868\u5355",link:"/handbook/ui/blocks/filter-blocks/form"}]},{title:"Other blocks","title.zh-CN":"\u5176\u4ED6\u533A\u5757",children:[{title:"Markdown","title.zh-CN":"Markdown",link:"/handbook/ui/blocks/other-blocks/markdown"},{title:"Workflow todos","title.zh-CN":"\u5DE5\u4F5C\u6D41\u5F85\u529E",link:"/handbook/workflow-manual/workflow-todos-block"}]}]},{title:"Configure fields","title.zh-CN":"\u914D\u7F6E\u5B57\u6BB5",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/fields"},{title:"\u901A\u7528\u5C5E\u6027\u8BBE\u7F6E","title.zh-CN":"\u901A\u7528\u5C5E\u6027\u8BBE\u7F6E",children:[{title:"\u8868\u683C\u5B57\u6BB5","title.zh-CN":"\u8868\u683C\u5B57\u6BB5",link:"/handbook/ui/fields/field-settings/table-column"},{title:"\u8868\u5355\u5B57\u6BB5","title.zh-CN":"\u8868\u5355\u5B57\u6BB5",link:"/handbook/ui/fields/field-settings/form-item"},{title:"\u6279\u91CF\u7F16\u8F91\u8868\u5355","title.zh-CN":"\u6279\u91CF\u7F16\u8F91\u8868\u5355",link:"/handbook/ui/fields/field-settings/BulkEditFormItem"},{title:"\u7B5B\u9009\u8868\u5355\u5B57","title.zh-CN":"\u7B5B\u9009\u8868\u5355",link:"/handbook/ui/fields/field-settings/filter-form-item"},{title:"\u6298\u53E0\u9762\u677F","title.zh-CN":"\u6298\u53E0\u9762\u677F",link:"/handbook/ui/fields/field-settings/FilterCollapseItem"}]},{title:"\u7279\u6709\u5C5E\u6027\u8BBE\u7F6E","title.zh-CN":"\u7279\u6709\u5C5E\u6027\u8BBE\u7F6E",children:[{title:"DatePicker","title.zh-CN":"DatePicker",link:"/handbook/ui/fields/field-settings/DatePicker"},{title:"\u7EA7\u8054\u9009\u62E9","title.zh-CN":"\u7EA7\u8054\u9009\u62E9",link:"/handbook/ui/fields/field-settings/CascadeSelect"},{title:"\u5B50\u8868\u5355","title.zh-CN":"\u5B50\u8868\u5355",link:"/handbook/ui/fields/field-settings/Nester"},{title:"\u5F39\u7A97\u5B50\u8868\u5355","title.zh-CN":"\u5F39\u7A97\u5B50\u8868\u5355",link:"/handbook/ui/fields/field-settings/PopoverNester"},{title:"\u9009\u62E9\u5668","title.zh-CN":"\u9009\u62E9\u5668",link:"/handbook/ui/fields/field-settings/Select"},{title:"\u6570\u636E\u9009\u62E9\u5668","title.zh-CN":"\u6570\u636E\u9009\u62E9\u5668",link:"/handbook/ui/fields/field-settings/Picker"},{title:"\u5B50\u8868\u683C","title.zh-CN":"\u5B50\u8868\u683C",link:"/handbook/ui/fields/field-settings/SubTable"},{title:"\u6807\u7B7E","title.zh-CN":"\u6807\u7B7E",link:"/handbook/ui/fields/field-settings/Tag"},{title:"\u6587\u4EF6\u7BA1\u7406\u5668","title.zh-CN":"\u6587\u4EF6\u7BA1\u7406\u5668",link:"/handbook/ui/fields/field-settings/FileManager"}]}]},{title:"Configure actions","title.zh-CN":"\u914D\u7F6E\u64CD\u4F5C",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/actions"},{title:"\u5E38\u7528\u8BBE\u7F6E\u9879","title.zh-CN":"\u5E38\u7528\u8BBE\u7F6E\u9879",children:[{title:"Linkage","title.zh-CN":"\u8054\u52A8\u89C4\u5219",link:"/handbook/ui/actions/linkage"},{title:"Open mode","title.zh-CN":"\u6253\u5F00\u65B9\u5F0F",link:"/handbook/ui/actions/open-mode"},{title:"Popup size","title.zh-CN":"\u5F39\u7A97\u5C3A\u5BF8",link:"/handbook/ui/actions/popup-size"},{title:"Second confirmation","title.zh-CN":"\u4E8C\u6B21\u786E\u8BA4",link:"/handbook/ui/actions/double-check"},{title:"Bind workflows","title.zh-CN":"\u7ED1\u5B9A\u5DE5\u4F5C\u6D41",link:"/handbook/ui/actions/bind-workflow"},{title:"Assign field values","title.zh-CN":"\u5B57\u6BB5\u8D4B\u503C",link:"/handbook/ui/actions/assign-values"}]},{title:"Action types","title.zh-CN":"\u64CD\u4F5C\u7C7B\u578B",children:[{title:"Custom pop-up","title.zh-CN":"\u81EA\u5B9A\u4E49\u5F39\u7A97",link:"/handbook/ui/actions/types/pop-up"},{title:"Add new","title.zh-CN":"\u6DFB\u52A0",link:"/handbook/ui/actions/types/add-new"}]}]},{title:"Mobile client","title.zh-CN":"\u79FB\u52A8\u7AEF",link:"/handbook/mobile-client"}]},{title:"Core modules","title.zh-CN":"\u6838\u5FC3\u6A21\u5757",type:"group",children:[{title:"Users & permissions","title.zh-CN":"\u7528\u6237\u548C\u6743\u9650",children:[{title:"Users","title.zh-CN":"\u7528\u6237",link:"/handbook/users"},{title:"Access control","title.zh-CN":"\u89D2\u8272\u548C\u6743\u9650",link:"/handbook/acl"},{title:"Departments","title.zh-CN":"\u90E8\u95E8",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/departments"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/departments/manual"}]}]},{title:"Users authentication","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1",children:[{title:"Authentication","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/auth"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth/user"},{title:"Development","title.zh-CN":"\u5F00\u53D1\u6307\u5357",children:["/handbook/auth/dev/guide","/handbook/auth/dev/api"]}]},{title:"Authentication - CAS","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - CAS",link:"/handbook/auth-cas"},{title:"Authentication - OIDC","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - OIDC",children:[{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth-oidc"},{title:"Example","title.zh-CN":"\u793A\u4F8B",children:["/handbook/auth-oidc/example/google"]}]},{title:"Authentication - SAML","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - SAML",children:[{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth-saml"},{title:"Example","title.zh-CN":"\u793A\u4F8B",children:["/handbook/auth-saml/example/google"]}]},{title:"Authentication - SMS","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - \u77ED\u4FE1",link:"/handbook/auth-sms"},{title:"Verification","title.zh-CN":"\u9A8C\u8BC1\u7801",link:"/handbook/verification"},{title:"API Keys","title.zh-CN":"API \u5BC6\u94A5",link:"/handbook/api-keys"}]},{title:"Workflow","title.zh-CN":"\u5DE5\u4F5C\u6D41",children:[{title:"Workflow","title.zh-CN":"\u5DE5\u4F5C\u6D41",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/workflow"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",children:["/handbook/workflow/manual","/handbook/workflow/manual/advanced",{title:"Triggers","title.zh-CN":"\u89E6\u53D1\u5668",children:["/handbook/workflow/manual/triggers","/handbook/workflow/manual/triggers/collection","/handbook/workflow/manual/triggers/schedule"]},{title:"Nodes","title.zh-CN":"\u8282\u70B9",children:["/handbook/workflow/manual/nodes","/handbook/workflow/manual/nodes/condition","/handbook/workflow/manual/nodes/calculation","/handbook/workflow/manual/nodes/create","/handbook/workflow/manual/nodes/update","/handbook/workflow/manual/nodes/destroy","/handbook/workflow/manual/nodes/query","/handbook/workflow/manual/nodes/end"]}]},{title:"Development","title.zh-CN":"\u5F00\u53D1\u6307\u5357",children:["/handbook/workflow/development","/handbook/workflow/development/trigger","/handbook/workflow/development/instruction","/handbook/workflow/development/api"]}]},{title:"Workflow - Aggregate","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u805A\u5408\u8282\u70B9",link:"/handbook/workflow-aggregate"},{title:"Workflow - Approval","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u5BA1\u6279",link:"/handbook/workflow-approval"},{title:"Workflow - Delay","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u5EF6\u65F6\u8282\u70B9",link:"/handbook/workflow-delay"},{title:"Workflow - Dynamic calculation","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u52A8\u6001\u8868\u8FBE\u5F0F\u8BA1\u7B97",link:"/handbook/workflow-dynamic-calculation"},{title:"Workflow - Form trigger","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u8868\u5355\u4E8B\u4EF6",link:"/handbook/workflow-form-trigger"},{title:"Workflow - JSON query","title.zh-CN":"\u5DE5\u4F5C\u6D41 - JSON \u89E3\u6790\u8282\u70B9",link:"/handbook/workflow-json-query"},{title:"Workflow - Loop","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u5FAA\u73AF\u8282\u70B9",link:"/handbook/workflow-loop"},{title:"Workflow - Manual","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u4EBA\u5DE5\u8282\u70B9",link:"/handbook/workflow-manual"},{title:"Workflow - Parallel","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u5E76\u884C\u5206\u652F\u8282\u70B9",link:"/handbook/workflow-parallel"},{title:"Workflow - Request","title.zh-CN":"\u5DE5\u4F5C\u6D41 - HTTP \u8BF7\u6C42\u8282\u70B9",link:"/handbook/workflow-request"},{title:"Workflow - Request interceptor","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u8BF7\u6C42\u62E6\u622A\u5668",link:"/handbook/workflow-request-interceptor"},{title:"Workflow - Response message","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u54CD\u5E94\u6D88\u606F",link:"/handbook/workflow-response-message"},{title:"Workflow - SQL","title.zh-CN":"\u5DE5\u4F5C\u6D41 - SQL \u64CD\u4F5C\u8282\u70B9",link:"/handbook/workflow-sql"},{title:"Workflow - Varaible","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u53D8\u91CF\u8282\u70B9",link:"/handbook/workflow-variable"}]},{title:"File storages","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8",children:[{title:"File manager","title.zh-CN":"\u6587\u4EF6\u7BA1\u7406\u5668",link:"/handbook/file-manager"},{title:"File storage: Local","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1A\u672C\u5730",link:"/handbook/file-manager/file-storage-local"},{title:"File storage: OSS","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1AOSS",link:"/handbook/file-storage-oss"},{title:"File storage: S3","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1AS3",link:"/handbook/file-storage-s3"},{title:"File storage: COS","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1ACOS",link:"/handbook/file-storage-cos"}]},{title:"Logging and monitoring","title.zh-CN":"\u65E5\u5FD7\u548C\u76D1\u63A7",children:[{title:"Logger","title.zh-CN":"\u65E5\u5FD7",link:"/handbook/logger"},{title:"Telemetry - Prometheus","title.zh-CN":"\u9065\u6D4B - Prometheus",link:"/handbook/telemetry-prometheus"},{title:"Audit logs","title.zh-CN":"\u5BA1\u8BA1\u65E5\u5FD7",link:"/handbook/audit-logs"}]},{title:"Multi-app manager","title.zh-CN":"\u591A\u5E94\u7528\u7BA1\u7406",link:"/handbook/multi-app-manager"}]},{title:"System management","title.zh-CN":"\u7CFB\u7EDF\u7BA1\u7406",type:"group",children:[{title:"Plugin manager","title.zh-CN":"\u63D2\u4EF6\u7BA1\u7406",link:"/handbook/plugin-manager"},{title:"System settings","title.zh-CN":"\u7CFB\u7EDF\u8BBE\u7F6E",link:"/handbook/system-settings"},{title:"Theme editor","title.zh-CN":"\u4E3B\u9898\u7F16\u8F91\u5668",link:"/handbook/theme-editor"},{title:"Localization management","title.zh-CN":"\u672C\u5730\u5316\u7BA1\u7406",link:"/handbook/localization-management"},{title:"Backup & Restore","title.zh-CN":"\u5907\u4EFD\u548C\u8FD8\u539F",link:"/handbook/backup-restore"}]},{title:"Others","title.zh-CN":"\u5176\u4ED6",type:"group",children:[{title:"API doc","title.zh-CN":"API \u6587\u6863",link:"/handbook/api-doc"}]}],"/development":[{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB",type:"group",children:["/development","/development/your-fisrt-plugin","/development/app-ds"]},{title:"Server","title.zh-CN":"\u670D\u52A1\u7AEF",type:"group",children:["/development/server",{title:"Collections & Fields","title.zh-CN":"\u6570\u636E\u8868\u548C\u5B57\u6BB5",children:["/development/server/collections","/development/server/collections/options","/development/server/collections/configure","/development/server/collections/association-fields","/development/server/collections/field-extension","/development/server/collections/collection-template"]},"/development/server/resources-actions","/development/server/middleware","/development/server/commands","/development/server/events","/development/server/i18n","/development/server/logger","/development/server/telemetry","/development/server/migration","/development/server/test"]},{title:"Client","title.zh-CN":"\u5BA2\u6237\u7AEF",type:"group",children:["/development/client","/development/client/router","/development/client/styles-and-themes","/development/client/api-client","/development/client/providers",{title:"UI Schema","title.zh-CN":"UI Schema",children:["/development/client/ui-schema/quick-start","/development/client/ui-schema/what-is-ui-schema","/development/client/ui-schema/rendering","/development/client/ui-schema/extending","/development/client/ui-schema/components","/development/client/ui-schema/designable","/development/client/ui-schema/toolbar","/development/client/ui-schema/initializer","/development/client/ui-schema/settings"]},"/development/client/i18n","/development/client/test"]},{title:"Others","title.zh-CN":"\u5176\u4ED6",type:"group",children:["/development/others/build","/development/others/languages","/development/others/deps","/development/life-cycle"]}],"/api":["/api",{title:"@nocobase/acl",link:"/api/acl/acl"},{title:"@nocobase/actions",link:"/api/actions"},{title:"@nocobase/auth",type:"subMenu",children:["/api/auth/auth-manager","/api/auth/auth","/api/auth/base-auth"]},{title:"@nocobase/cache",type:"subMenu",children:["/api/cache/cache-manager","/api/cache/cache"]},{title:"@nocobase/cli",link:"/api/cli"},{title:"@nocobase/client",link:"https://client.docs.nocobase.com/core/application/application","link.zh-CN":"https://client.docs-cn.nocobase.com/core/application/application"},{title:"@nocobase/database",type:"subMenu",children:["/api/database","/api/database/collection","/api/database/field","/api/database/repository","/api/database/relation-repository/has-one-repository","/api/database/relation-repository/has-many-repository","/api/database/relation-repository/belongs-to-repository","/api/database/relation-repository/belongs-to-many-repository","/api/database/operators"]},{title:"@nocobase/data-source-manager",type:"subMenu",children:["/api/data-source-manager","/api/data-source-manager/data-source","/api/data-source-manager/i-collection-manager","/api/data-source-manager/i-collection","/api/data-source-manager/i-repository","/api/data-source-manager/i-model"]},{title:"@nocobase/logger",link:"/api/logger"},{title:"@nocobase/resourcer",type:"subMenu",children:["/api/resourcer","/api/resourcer/action"]},{title:"@nocobase/sdk",children:["/api/sdk","/api/sdk/auth","/api/sdk/storage"]},{title:"@nocobase/server",type:"subMenu",children:["/api/server/application","/api/server/plugin"]},{title:"@nocobase/telemetry",type:"subMenu",children:["/api/telemetry/telemetry","/api/telemetry/trace","/api/telemetry/metric"]},{title:"@nocobase/test",type:"subMenu",children:["/api/test/server","/api/test/client","/api/test/e2e"]}],"/breaking-changes":[{title:"Breaking changes","title.zh-CN":"\u4E0D\u517C\u5BB9\u53D8\u66F4",type:"group",children:["/breaking-changes/v0-19-0-alpha-1","/breaking-changes/v0-18-0-alpha-1","/breaking-changes/v0-17-0-alpha-5","/breaking-changes/v0-17-0-alpha-3","/breaking-changes/v0-17-0-alpha-1"]}]},github:"https://github.com/nocobase/nocobase",alert:'The document is currently under construction, with some content possibly missing or awaiting translation. For details, please refer to the <a target="_blank" href="https://github.com/nocobase/docs/commits/main/">changelog</a>',localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D",hostname:"docs-cn.nocobase.com"},{id:"en-US",switchPrefix:"en",hostname:"docs.nocobase.com"}]},_2_level_nav_available:!0},children:p})}}}]);
