"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(a),p=o,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={title:"Build Open Lakehouse using Apache Hudi & dbt",excerpt:"How to style blog focused projects on teaching how to build an open Lakehouse using Apache Hudi & dbt",author:"Vinoth Govindarajan",category:"blog",image:"/assets/images/blog/hudi_dbt_lakehouse.png"},l=void 0,r={permalink:"/cn/blog/2022/07/11/build-open-lakehouse-using-apache-hudi-and-dbt",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-07-11-build-open-lakehouse-using-apache-hudi-and-dbt.md",source:"@site/blog/2022-07-11-build-open-lakehouse-using-apache-hudi-and-dbt.md",title:"Build Open Lakehouse using Apache Hudi & dbt",description:"The focus of this blog is to show you how to build an open lakehouse leveraging incremental data processing and performing field-level updates. We are excited to announce that you can now use Apache Hudi + dbt for building open data lakehouses.",date:"2022-07-11T00:00:00.000Z",formattedDate:"July 11, 2022",tags:[],readingTime:6.64,truncated:!1,authors:[{name:"Vinoth Govindarajan"}],nextItem:{title:"Apache Hudi vs Delta Lake - Transparent TPC-DS Lakehouse Performance Benchmarks",permalink:"/cn/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks"}},s={authorsImageUrls:[void 0]},d=[{value:"What is Apache Hudi?",id:"what-is-apache-hudi",children:[],level:2},{value:"What is dbt?",id:"what-is-dbt",children:[],level:2},{value:"What is a Lakehouse?",id:"what-is-a-lakehouse",children:[],level:2},{value:"How to build an open lakehouse?",id:"how-to-build-an-open-lakehouse",children:[],level:2},{value:"Step 1: How to extract &amp; load the raw data datasets?",id:"step-1-how-to-extract--load-the-raw-data-datasets",children:[],level:2},{value:"Step 2: How to configure hudi with the dbt project?",id:"step-2-how-to-configure-hudi-with-the-dbt-project",children:[],level:2},{value:"Step 3: How to read the raw data incrementally?",id:"step-3-how-to-read-the-raw-data-incrementally",children:[{value:"How to apply filters on an incremental run?",id:"how-to-apply-filters-on-an-incremental-run",children:[],level:3},{value:"How to define the uniqueness constraint?",id:"how-to-define-the-uniqueness-constraint",children:[],level:3}],level:2},{value:"Step 4: How to use the upsert feature while writing datasets?",id:"step-4-how-to-use-the-upsert-feature-while-writing-datasets",children:[{value:"How to perform field-level updates?",id:"how-to-perform-field-level-updates",children:[],level:3},{value:"How to configure additional hoodie custom configs?",id:"how-to-configure-additional-hoodie-custom-configs",children:[],level:3}],level:2}],u={toc:d};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The focus of this blog is to show you how to build an open lakehouse leveraging incremental data processing and performing field-level updates. We are excited to announce that you can now use Apache Hudi + dbt for building open data lakehouses."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/assets/images/blog/hudi_dbt_lakehouse.png",src:a(51004).Z})),(0,o.kt)("p",null,"Let's first clarify a few terminologies used in this blog before we dive into the details."),(0,o.kt)("h2",{id:"what-is-apache-hudi"},"What is Apache Hudi?"),(0,o.kt)("p",null,"Apache Hudi brings ACID transactions, record-level updates/deletes, and change streams to data lakehouses."),(0,o.kt)("p",null,"Apache Hudi is an open-source data management framework used to simplify incremental data processing and data pipeline development. This framework more efficiently manages business requirements like data lifecycle and improves data quality."),(0,o.kt)("h2",{id:"what-is-dbt"},"What is dbt?"),(0,o.kt)("p",null,"dbt (data build tool) is a data transformation tool that enables data analysts and engineers to transform, test, and document data in the cloud data warehouses."),(0,o.kt)("p",null,"dbt enables analytics engineers to transform data in their warehouses by simply writing select statements. dbt handles turning these select statements into tables and views."),(0,o.kt)("p",null,"dbt does the T in ELT (Extract, Load, Transform) processes \u2013 it doesn\u2019t extract or load data, but it\u2019s extremely good at transforming data that\u2019s already loaded into your warehouse."),(0,o.kt)("h2",{id:"what-is-a-lakehouse"},"What is a Lakehouse?"),(0,o.kt)("p",null,"A lakehouse is a new, open architecture that combines the best elements of data lakes and data warehouses. Lakehouses are enabled by a new system design: implementing transaction management and data management features similar to those in a data warehouse directly on top of low-cost cloud storage in open formats. They are what you would get if you had to redesign data warehouses in the modern world, now that cheap and highly reliable storage (in the form of object stores) are available."),(0,o.kt)("p",null,"In other words, while data lakes historically have been viewed as a bunch of files added to cloud storage folders, lakehouse tables support transactions, updates, deletes, and in the case of Apache Hudi, even database-like functionality like indexing or change capture."),(0,o.kt)("h2",{id:"how-to-build-an-open-lakehouse"},"How to build an open lakehouse?"),(0,o.kt)("p",null,"Now, we know what is a lakehouse, so let's build one, In order to build an open lakehouse, you need a few components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open table format which supports ACID transactions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache Hudi (integrated with dbt)"),(0,o.kt)("li",{parentName:"ul"},"Delta Lake (proprietary features locked to Databricks runtime)"),(0,o.kt)("li",{parentName:"ul"},"Apache Iceberg (currently not integrated with dbt)"))),(0,o.kt)("li",{parentName:"ul"},"Data transformation tool",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open source dbt is the de-facto popular choice for transformation layer"))),(0,o.kt)("li",{parentName:"ul"},"Distributed data processing engine",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache Spark is the de-facto popular choice for compute engine"))),(0,o.kt)("li",{parentName:"ul"},"Cloud Storage",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can choose any of the cost-effective cloud stores or HDFS"))),(0,o.kt)("li",{parentName:"ul"},"Bring your favorite query engine")),(0,o.kt)("p",null,"To build the lakehouse you need a way to extract and load the data into Hudi table format and then transform in-place using dbt."),(0,o.kt)("p",null,"DBT supports Hudi out of the box with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-spark"},"dbt-spark")," adapter package. When creating modeled datasets using dbt you can choose Hudi as the format for your tables."),(0,o.kt)("p",null,"You can follow the instructions on this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-examples/hudi-examples-dbt/README.md"},"page")," to learn how to install and configure dbt+hudi."),(0,o.kt)("h2",{id:"step-1-how-to-extract--load-the-raw-data-datasets"},"Step 1: How to extract & load the raw data datasets?"),(0,o.kt)("p",null,"This is the first step in building your data lake and there are many choices here to load the data into our open lakehouse. I\u2019m going to go with one of the Hudi\u2019s native tools called Delta Streamer since all the ingestion features are pre-built and battle-tested in production at scale."),(0,o.kt)("p",null,"Hudi\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_deltastreamer"},"DeltaStreamer")," does the EL in ELT (Extract, Load, Transform) processes \u2013 it\u2019s extremely good at extracting, loading, and optionally ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/transforms"},"transforming data")," that\u2019s already loaded into your lakehouse."),(0,o.kt)("h2",{id:"step-2-how-to-configure-hudi-with-the-dbt-project"},"Step 2: How to configure hudi with the dbt project?"),(0,o.kt)("p",null,"To use the Hudi with your dbt project,  all you need to do is choose the file format as Hudi. The file format config can either be specified in specific models, or for all the models in your dbt_project.yml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"models:\n   +file_format: hudi\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="model/my_model.sql"',title:'"model/my_model.sql"'},"{{ config(\n   materialized = 'incremental',\n   incremental_strategy = 'merge',\n   file_format = 'hudi',\n   unique_key = 'id',\n   \u2026\n) }}\n")),(0,o.kt)("p",null,"After choosing hudi as the file_format you can create materialized datasets using dbt, which offers additional benefits that are unique to the Hudi table format such as field-level upserts/deletes."),(0,o.kt)("h2",{id:"step-3-how-to-read-the-raw-data-incrementally"},"Step 3: How to read the raw data incrementally?"),(0,o.kt)("p",null,"Before we learn how to build incremental materialization, let\u2019s quickly learn, What are materializations in dbt? Materializations are strategies for persisting dbt models in a lakehouse. There are four types of materializations built into dbt. They are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"table"),(0,o.kt)("li",{parentName:"ul"},"view"),(0,o.kt)("li",{parentName:"ul"},"incremental"),(0,o.kt)("li",{parentName:"ul"},"ephemeral")),(0,o.kt)("p",null,"Among all the materialization types, only incremental models allow dbt to insert or update records into a table since the last time that dbt was run, which unlocks the powers of Hudi, we will dive into the details."),(0,o.kt)("p",null,"To use incremental models, you need to perform these two activities:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Tell dbt how to filter the rows on the incremental executions"),(0,o.kt)("li",{parentName:"ol"},"Define the uniqueness constraint of the model (required when using >= Hudi 0.10.1 version)")),(0,o.kt)("h3",{id:"how-to-apply-filters-on-an-incremental-run"},"How to apply filters on an incremental run?"),(0,o.kt)("p",null,"dbt provides you a macro ",(0,o.kt)("inlineCode",{parentName:"p"},"is_incremental()")," which is very useful to define the filters exclusively for incremental materializations."),(0,o.kt)("p",null,'Often, you\'ll want to filter for "new" rows, as in, rows that have been created since the last time dbt ran this model. The best way to find the timestamp of the most recent run of this model is by checking the most recent timestamp in your target table. dbt makes it easy to query your target table by using the "',(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/dbt-jinja-functions/this"},"{{ this }}"),'" variable.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="models/my_model.sql"',title:'"models/my_model.sql"'},"{{\n   config(\n       materialized='incremental',\n       file_format='hudi',\n   )\n}}\n\nselect\n   *\nfrom raw_app_data.events\n{% if is_incremental() %}\n   -- this filter will only be applied on an incremental run\n   where event_time > (select max(event_time) from {{ this }})\n{% endif %}\n")),(0,o.kt)("h3",{id:"how-to-define-the-uniqueness-constraint"},"How to define the uniqueness constraint?"),(0,o.kt)("p",null,"A unique_key is the primary key of the dataset, which determines whether a record has new values and should be updated/deleted, or inserted."),(0,o.kt)("p",null,"You can define the unique_key in the configuration block at the top of your model. This unique_key will act as the primaryKey (hoodie.datasource.write.recordkey.field) on the hudi table."),(0,o.kt)("h2",{id:"step-4-how-to-use-the-upsert-feature-while-writing-datasets"},"Step 4: How to use the upsert feature while writing datasets?"),(0,o.kt)("p",null,"dbt offers multiple load strategies when loading the transformed datasets, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"append (default)"),(0,o.kt)("li",{parentName:"ul"},"insert_overwrite (optional)"),(0,o.kt)("li",{parentName:"ul"},"merge (optional, Only available for Hudi and Delta formats)")),(0,o.kt)("p",null,"By default dbt uses the append strategy, which may cause duplicate rows when you execute dbt run command multiple times on the same payload."),(0,o.kt)("p",null,"When you choose the insert_overwrite strategy, dbt will overwrite the entire partition or full table load for every dbt run, which causes unnecessary overheads and is very expensive."),(0,o.kt)("p",null,"In addition to all the existing strategies to load the data, with hudi you can use the exclusive merge strategy when using incremental materialization. Using the merge strategy you can perform field-level updates/deletes on your data lakehouse which is performant and cost-efficient. As a result, you will get access to fresher data and accelerated insights."),(0,o.kt)("h3",{id:"how-to-perform-field-level-updates"},"How to perform field-level updates?"),(0,o.kt)("p",null,"If you are using the merge strategy and have specified a unique_key, by default, dbt will entirely overwrite matched rows with new values."),(0,o.kt)("p",null,"Since Apache Spark adapter supports the merge strategy, you may optionally pass a list of column names to a ",(0,o.kt)("inlineCode",{parentName:"p"},"merge_update_columns")," config. In that case, dbt will update only the columns specified by the config, and keep the previous values of other columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="models/my_model.sql"',title:'"models/my_model.sql"'},"{{ config(\n   materialized = 'incremental',\n   incremental_strategy = 'merge',\n   file_format = 'hudi',\n   unique_key = 'id',\n   merge_update_columns = ['msg', 'updated_ts'],\n) }}\n")),(0,o.kt)("h3",{id:"how-to-configure-additional-hoodie-custom-configs"},"How to configure additional hoodie custom configs?"),(0,o.kt)("p",null,"When you want to specify additional hudi configs, you can do that with the options config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="models/my_model.sql"',title:'"models/my_model.sql"'},"{{ config(\n   materialized='incremental',\n   file_format='hudi',\n   incremental_strategy='merge',\n   options={\n       'type': 'mor',\n       'primaryKey': 'id',\n       'precombineKey': 'ts',\n   },\n   unique_key='id',\n   partition_by='datestr',\n   pre_hook=[\"set spark.sql.datetime.java8API.enabled=false;\"],\n  )\n}}\n")),(0,o.kt)("p",null,"Hope you understood the benefits of using Apache Hudi with dbt to build your next open lakehouse, good luck!"))}h.isMDXComponent=!0},51004:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hudi_dbt_lakehouse-1faadd1dd1a7e90797f2aab86bf0ae8b.png"}}]);