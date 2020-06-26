/*! For license information please see aa2532b6.63b625b3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),i=(a(0),a(211)),s=(a(220),a(219),{id:"use-typed-odata-client-for-js",title:"Consume OData clients for JS / TS",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Consume OData clients for JS / TS",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a typesafe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"],author:"Charles Dubois"}),l={id:"js/features/odata/use-typed-odata-client-for-js",title:"Consume OData clients for JS / TS",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a typesafe way.",source:"@site/docs/js/features/odata/use-generated-client.md",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-client-for-js",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/use-generated-client.md",lastUpdatedBy:"CharlesDuboisSAP",lastUpdatedAt:1593160099,sidebar_label:"Consume OData clients for JS / TS",sidebar:"someSidebar",previous:{title:"Generate an OData client for JavaScript",permalink:"/cloud-sdk/docs/js/features/odata/generator-js-sdk"},next:{title:"Migrate to Open Source version of SDK for JS/TS",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"}},o=[{value:"Making a request using a generated OData client",id:"making-a-request-using-a-generated-odata-client",children:[{value:"Setting custom request headers",id:"setting-custom-request-headers",children:[]},{value:"Setting custom query parameters",id:"setting-custom-query-parameters",children:[]},{value:"Setting a custom service path",id:"setting-a-custom-service-path",children:[]}]},{value:"OData Features",id:"odata-features",children:[{value:"GetAll Request Builder",id:"getall-request-builder",children:[]},{value:"GetByKey Request Builder",id:"getbykey-request-builder",children:[]},{value:"Create Request Builder",id:"create-request-builder",children:[]},{value:"Update Request Builder",id:"update-request-builder",children:[]},{value:"Delete Request Builder",id:"delete-request-builder",children:[]},{value:"Handling of ETags",id:"handling-of-etags",children:[]},{value:"Handling of CSRF tokens",id:"handling-of-csrf-tokens",children:[]}]}],c={rightToc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"making-a-request-using-a-generated-odata-client"},"Making a request using a generated OData client"),Object(i.b)("p",null,"The typed OData client allows to build type-safe OData requests for a given service.\nEvery OData client generated by the SAP Cloud SDK provides request builders and abstractions for entity sets, that we refer to as entities. In order to create a request towards entity sets, entities offer a fluent API."),Object(i.b)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),Object(i.b)("p",null,"First, import the entity from the service directory (",Object(i.b)("inlineCode",{parentName:"p"},"my-service"),") within the output directory you specified when generating the service (",Object(i.b)("inlineCode",{parentName:"p"},"outputDir"),"). The service directory corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"directoryName")," specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"serviceMapping.json")," in your input directory.\nEvery entity has a ",Object(i.b)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getall-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getAll"))," request type."),Object(i.b)("p",null,"Potential request types (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"requestType")," in the example above) are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getall-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getAll")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getbykey-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getByKey")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#create-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"create")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#update-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"update"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#delete-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"delete")),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Some entities do not support all of the request types, which in turn won't be available through the API."))),Object(i.b)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",Object(i.b)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above). All requests can be configured by setting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-custom-request-headers"}),"custom request headers"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-custom-query-parameters"}),"custom query parameters")," and a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setting-a-custom-service-path"}),"custom service path"),"."),Object(i.b)("p",null,"Each request type has additional request specific configuration options:"),Object(i.b)("p",null,"Creating  an entity ",Object(i.b)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#create-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"create"))," requests, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#handling-of-etags"}),"ETag handling")," for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#update-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"update"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#delete-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"delete"))," requests, as well as set operations for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getall-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getAll"))," requests and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#select"}),Object(i.b)("inlineCode",{parentName:"a"},"select")),"ing properties for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getall-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getAll"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getbykey-request-builder"}),Object(i.b)("inlineCode",{parentName:"a"},"getByKey"))," requests."),Object(i.b)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution. Once the request is configured, chain the ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," function and pass a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination-js-sdk/"}),"destination")," to it."),Object(i.b)("h3",{id:"setting-custom-request-headers"},"Setting custom request headers"),Object(i.b)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request. You can specify additional custom headers using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomHeaders")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomHeaders({\n    apikey: 'my-api-key'\n  });\n")),Object(i.b)("p",null,"The keys and values of the passed object correspond with the header names and values. Custom headers take priority over automatically generated headers. Automatically generated headers are sent with lower case header names, custom header keep the case they were set in.\nIn the example above we pass an ",Object(i.b)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Setting an ",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," or ",Object(i.b)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do."))),Object(i.b)("h3",{id:"setting-custom-query-parameters"},"Setting custom query parameters"),Object(i.b)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration. You can add custom parameters by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function. Custom query parameters take precedence over those created by the SAP Cloud SDK."),Object(i.b)("p",null,"In the example below an additional query parameter ",Object(i.b)("inlineCode",{parentName:"p"},"language=en")," will be added to the request url:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n\n  .withCustomQueryParameters({\n    language: 'en'\n  });\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you want to set a query parameter in quotes (e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),"."))),Object(i.b)("h3",{id:"setting-a-custom-service-path"},"Setting a custom service path"),Object(i.b)("p",null,"If a service specification contains a specification for the servicePath, the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",Object(i.b)("inlineCode",{parentName:"p"},"'/sap/opu/odata/sap/'")," for SAP S/4HANA services). When there is no such path defined in the specification it can be manually set in the ",Object(i.b)("inlineCode",{parentName:"p"},"service-mapping.json"),". It can also be adjusted per request by using the ",Object(i.b)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),Object(i.b)("p",null,"This will add the custom service path to your request. Executing the example request above against a destination with url '",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://my.s4-system.com'"}),"https://my.s4-system.com'")," would then execute the request against something like this: '",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://my.s4-system.com/my/custom/service/path/MyEntity'"}),"https://my.s4-system.com/my/custom/service/path/MyEntity'"),"."),Object(i.b)("h2",{id:"odata-features"},"OData Features"),Object(i.b)("p",null,"Below different OData features supported by the SAP Cloud SDK are documented using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/resource"}),"Business Partner Service")," of SAP S/4HANA as an example."),Object(i.b)("h3",{id:"getall-request-builder"},"GetAll Request Builder"),Object(i.b)("p",null,"The GetAll request builder allows you to create a request to retrieve all entities that match the request configuration."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().getAll();\n")),Object(i.b)("p",null,"The example above creates a request to get all BusinessPartner entites."),Object(i.b)("h4",{id:"select"},"Select"),Object(i.b)("p",null,"When reading entities, the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"select( ... )")," on the builders. Through it, the query parameter ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," is set. It restricts the response to the given selection of properties in the request."),Object(i.b)("p",null,"The properties that can be selected or expanded are represented via static fields on the entity class. So there will be a field for each property. E.g. the business partner entity has ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," as representation of a property and ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS ")," as representation of a navigation property."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.LAST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n")),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"$select=FirstName,LastName,to_BusinessPartnerAddress\n")),Object(i.b)("p",null,"One can also select properties of the expanded object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS.select(\n      BusinessPartnerAddress.ADDRESS_ID,\n      BusinessPartnerAddress.CITY_CODE\n    )\n  )\n  .execute(destination);\n")),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")),Object(i.b)("h4",{id:"filter"},"Filter"),Object(i.b)("p",null,"When operating on a collection of entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders. It directly corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the request. Filters are also built via the static property fields on entities:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        BusinessPartner.FIRST_NAME.equals('Alice'),\n        BusinessPartner.LAST_NAME.notEquals('Bob')\n      ),\n      BusinessPartner.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n")),Object(i.b)("p",null,"The example above will translate to this filter parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),Object(i.b)("p",null,"Take note of the order of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or"),". As ",Object(i.b)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",Object(i.b)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",Object(i.b)("inlineCode",{parentName:"p"},"or"),"."),Object(i.b)("p",null,"It is also possible to pass multiple filters to the same filter function without concatenating them with ",Object(i.b)("inlineCode",{parentName:"p"},"and")," or ",Object(i.b)("inlineCode",{parentName:"p"},"or"),". They will be concatenated with ",Object(i.b)("inlineCode",{parentName:"p"},"and")," by default. The two following examples are equal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),".filter(\n  and(\n    BusinessPartner.FIRST_NAME.equals('Alice'),\n    BusinessPartner.LAST_NAME.notEquals('Bob')\n  )\n)\n")),Object(i.b)("p",null,"The example above can be shortened to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),".filter(\n  BusinessPartner.FIRST_NAME.equals('Alice'),\n  BusinessPartner.LAST_NAME.notEquals('Bob')\n)\n")),Object(i.b)("p",null,"More advanced filter expressions can be found ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#available-filter-expressions"}),"here"),"."),Object(i.b)("h4",{id:"skip"},"Skip"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"skip")," allows you to skip a number of results in the requested set. It can be useful for paging:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().\n  .getAll()\n  .skip(10)\n")),Object(i.b)("p",null,"The example above retrieves all BusinessPartner entities except for the first 10 results."),Object(i.b)("h4",{id:"top"},"Top"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"top")," limits the number of returned results. This can also be useful for paging:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().\n  .getAll()\n  .top(10)\n")),Object(i.b)("p",null,"The example above retrieves the first 10 BusinessPartner entities."),Object(i.b)("h4",{id:"count"},"Count"),Object(i.b)("p",null,"Not yet available."),Object(i.b)("h3",{id:"getbykey-request-builder"},"GetByKey Request Builder"),Object(i.b)("p",null,"The GetByKey request builder allows you to create a request to retrieve one entity based on its key:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().getByKey('id');\n")),Object(i.b)("p",null,"The example above retrieves the BusinessPartner with the id 'id'."),Object(i.b)("p",null,"The result can be retricted by applying the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#select"}),"select")," function, same as in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getall-request-builder"}),"GetAll")," request."),Object(i.b)("h3",{id:"create-request-builder"},"Create Request Builder"),Object(i.b)("p",null,"The Create request builder allows you to send a ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," request to create a new entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const businessPartner = BusinessPartner.builder().build();\nBusinessPartner.requestBuilder().create(businessPartner);\n")),Object(i.b)("p",null,"In the example above we created an instance of BusinessPartner and sent it to the BusinessPartner service in a ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," request."),Object(i.b)("p",null,"You can also create an entity ",Object(i.b)("inlineCode",{parentName:"p"},"asChildOf")," another entity."),Object(i.b)("h3",{id:"update-request-builder"},"Update Request Builder"),Object(i.b)("p",null,"The Update request builder allows you to sent ",Object(i.b)("inlineCode",{parentName:"p"},"PUT")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PATCH")," requests. By default ",Object(i.b)("inlineCode",{parentName:"p"},"PATCH")," is used to only update the changed fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().update(businessPartner);\n")),Object(i.b)("p",null,"In the example above only the changed fields of the given ",Object(i.b)("inlineCode",{parentName:"p"},"businessPartner")," instance are sent to the BusinessPartner service using ",Object(i.b)("inlineCode",{parentName:"p"},"PATCH"),"."),Object(i.b)("p",null,"To update the whole entity use ",Object(i.b)("inlineCode",{parentName:"p"},"replaceWholeEntityWithPut"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n")),Object(i.b)("p",null,"This will send a ",Object(i.b)("inlineCode",{parentName:"p"},"PUT")," request and thereby replace the whole entity."),Object(i.b)("p",null,"Entities can only be updated if ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#handling-of-etags"}),"ETags")," match. If you want to force an update of the entity regardless of the ETag configure the request to ignore version identifiers with ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n")),Object(i.b)("h3",{id:"delete-request-builder"},"Delete Request Builder"),Object(i.b)("p",null,"The Delete request builder allows you to create ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE")," requests, that delete entities."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  We added this only for the sake of the example.\n*/\nBusinessPartner.requestBuilder().delete(businessPartner);\n")),Object(i.b)("p",null,"Entities can only be deleted if ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#handling-of-etags"}),"ETags")," match. If you want to force deletion of the entity regardless of the ETag configure the request to ignore version identifiers with ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .ignoreVersionIdentifier();\n")),Object(i.b)("p",null,"You can also overwrite ETags using ",Object(i.b)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .setVersionIdentifier('etag');\n")),Object(i.b)("p",null,"In the example above the ETag 'etag' is being used instead of the original one."),Object(i.b)("h3",{id:"handling-of-etags"},"Handling of ETags"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}),"ETag")," is a version identifier which is often used to implement an optimistic locking mechanism. The SAP Cloud SDK will try to read version identifiers from responses and set them when sending OData requests."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"async function modifyBusinessPartner(id) {\n  const destination = { url: 'https://my.s4-system.com' };\n\n  const businessPartner = await BusinessPartner.requestBuilder()\n    .getByKey(id)\n    .execute(myDestination);\n\n  // do some modification\n  applyModification(businessPartner);\n\n  return BusinessPartner.requestBuilder()\n    .update(businessPartner)\n    .execute(destination);\n}\n")),Object(i.b)("p",null,"When executing ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getByKey")," requests the SAP Cloud SDK will automatically attempt to extract the version identifier from the response and store it within the returned entity (",Object(i.b)("inlineCode",{parentName:"p"},"partner")," in the example above). When executing ",Object(i.b)("inlineCode",{parentName:"p"},"update")," requests the version identifier will be sent in the ",Object(i.b)("inlineCode",{parentName:"p"},"If-match")," request header."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."),Object(i.b)("p",{parentName:"div"},"By default an ETag is sent if it's present on the entity being modified. ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier()")," will instead always send a ",Object(i.b)("inlineCode",{parentName:"p"},"*")," which acts as a wildcard to match all ETags."))),Object(i.b)("h3",{id:"handling-of-csrf-tokens"},"Handling of CSRF tokens"),Object(i.b)("p",null,"For create, update and delete requests the SDK will try to send a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Cookie-to-header_token"}),"CSRF token"),". Upon execution the request will try to fetch a token first before issuing the actual create request. Many services require this behavior for security reasons. However, the create request will be made without a CSRF token if none could be obtained."),Object(i.b)("h4",{id:"available-filter-expressions"},"Available Filter Expressions"),Object(i.b)("p",null,"There are predefined filter functions e. g. ",Object(i.b)("inlineCode",{parentName:"p"},"length"),", ",Object(i.b)("inlineCode",{parentName:"p"},"substring"),", ",Object(i.b)("inlineCode",{parentName:"p"},"substringOf")," in the core library, that allow for a wide range of filter expressions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  Fetch all business partners who have a first name shorter than 5 letters\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(length(BusinessPartner.FIRST_NAME).lessThan(5))\n  .execute(destination);\n")))}u.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},213:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},218:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},219:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},220:function(e,t,a){"use strict";a(23),a(19),a(18);var n=a(0),r=a.n(n),i=a(218);var s=function(){return Object(n.useContext)(i.a)},l=a(213),o=a.n(l),c=a(126),u=a.n(c),b=37,p=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,l=e.values,c=e.groupId,d=s(),m=d.tabGroupChoices,h=d.setTabGroupChoices,O=Object(n.useState)(i),j=O[0],f=O[1];if(null!=c){var g=m[c];null!=g&&g!==j&&f(g)}var y=function(e){f(e),null!=c&&h(c,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:o()("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}}}]);