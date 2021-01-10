(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(t,e,l){"use strict";l.r(e);l(41);var o={name:"SlopeSeparator",props:{direction:{type:String,validator:function(t){return["asc","desc"].includes(t)}},fillColor:String}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{name:"slopeseparator"}},["asc"==this.direction?e("div",{staticClass:"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute",staticStyle:{height:"80px",transform:"translateZ(0)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"fill-current",class:this.fillColor,attrs:{points:"2560 0 2560 100 0 100"}})])]):this._e(),this._v(" "),"desc"==this.direction?e("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",staticStyle:{height:"80px",transform:"translateZ(0px)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"fill-current",class:this.fillColor,attrs:{points:"2560 0 2560 100 0 100"}})])]):this._e()])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,l){"use strict";l.r(e);var o={name:"NavBar",components:{NavLink:l(242).default},data:function(){return{open:!1,navLinks:[{href:"/#aboutme",label:"About Me",icon:["fas","address-card"]},{href:"/#experience",label:"My Experience",icon:["fas","briefcase"]},{href:"/blog",label:"My Blog",icon:["fas","book"]}]}},methods:{toggleMobileNav:function(){this.open=!0!==this.open}}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg"},[e("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[e("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},[e("NuxtLink",{staticClass:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800",attrs:{to:"/"}},[this._v("\n        Guillaume Clement\n      ")]),this._v(" "),e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",attrs:{type:"button"},on:{click:this.toggleMobileNav}},[e("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1)],1),this._v(" "),e("div",{staticClass:"lg:flex flex-grow items-center",class:!0===this.open?"block":"hidden"},[e("ul",{staticClass:"flex flex-col lg:flex-row list-none lg:ml-auto"},this._l(this.navLinks,(function(link){return e("NavLink",{key:link.key,attrs:{href:link.href,label:link.label,icon:link.icon}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavLink:l(242).default})},237:function(t,e,l){"use strict";l.r(e);var o=l(238),n=l(235),r={name:"MainFooter",components:{SocialIcons:o.default,SlopeSeparator:n.default}},c=l(32),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"relative bg-gray-900 pt-8 pb-6"},[e("SlopeSeparator",{attrs:{direction:"desc","fill-color":"text-gray-900"}}),this._v(" "),e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("h4",{staticClass:"text-3xl font-semibold text-white"},[this._v("\n          Let's keep in touch!\n        ")]),this._v(" "),e("h5",{staticClass:"text-lg mt-0 mb-2 text-gray-500"},[this._v("\n          Make sure to connect with me on any of these platforms.\n        ")]),this._v(" "),e("div",{staticClass:"mt-6"},[e("ul",{staticClass:"text-3xl list-none text-gray-500 pl-1"},[e("SocialIcons",{attrs:{appearance:"dark"}})],1)])])]),this._v(" "),this._m(0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center mt-16"},[e("div",{staticClass:"w-full md:w-4/12 px-4 mx-auto text-center"},[e("div",{staticClass:"text-sm text-white font-semibold py-1"},[this._v("\n          Made with 😀 by Guillaume Clement.\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SlopeSeparator:l(235).default,SocialIcons:l(238).default})},238:function(t,e,l){"use strict";l.r(e);l(41);var o={name:"SocialIcons",components:{SocialIcon:l(243).default},props:{appearance:{type:String,validator:function(t){return["light","dark"].includes(t)}}},data:function(){return{socialIcons:[{href:"https://www.linkedin.com/in/guillaumecleme",label:"LinkedIn",icon:["fab","linkedin-in"]},{href:"https://twitter.com/guillaumecleme",label:"Twitter",icon:["fab","twitter"]},{href:"https://www.facebook.com/guillaume.e.clement",label:"FaceBook",icon:["fab","facebook-f"]},{href:"https://www.instagram.com/guillaumecle.me/",label:"Instagram",icon:["fab","instagram"]},{href:"https://m.me/guillaume.e.clement",label:"Messenger",icon:["fab","facebook-messenger"]},{href:"https://github.com/guillaumecleme",label:"GitHub",icon:["fab","github"]},{href:"https://stackoverflow.com/users/3308078/guillaumecle.me",label:"Stack Overflow",icon:["fab","stack-overflow"]},{href:"https://www.youracclaim.com/users/guillaumecleme",label:"Adobe/Acclaim",icon:["fab","adobe"]},{href:"https://www.goodreads.com/guillaumecleme",label:"Goodreads",icon:["fab","goodreads"]}]}}},n=l(32),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{name:"socialicons"}},t._l(t.socialIcons,(function(e){return l("SocialIcon",{key:e.key,attrs:{href:e.href,label:e.label,icon:e.icon,appearance:t.appearance}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialIcon:l(243).default})},239:function(t,e,l){"use strict";l.r(e);var o={name:"CoverImage",props:{cover:{type:String,required:!0}}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",style:"background-image: url("+this.cover+")"},[e("span",{staticClass:"w-full h-full absolute opacity-50 bg-black",attrs:{id:"blackOverlay"}})])])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,l){"use strict";l.r(e);var o={name:"NavLink",props:{href:String,label:String,icon:Array}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item text-gray-800 hover:text-gray-600"},[e("NuxtLink",{staticClass:"px-3 py-2 flex items-center text-xs uppercase font-bold",attrs:{to:this.href}},[e("div",{staticClass:"text-lg leading-lg"},[e("font-awesome-icon",{attrs:{icon:this.icon}})],1),this._v(" "),e("span",{staticClass:"ml-2"},[this._v(this._s(this.label))])])],1)}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,l){"use strict";l.r(e);var o={name:"SocialIcon",props:{href:String,label:String,icon:Array,appearance:String}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"inline-block mr-2",class:"light"==this.appearance?"hover:text-gray-600":"hover:text-gray-700"},[e("a",{attrs:{href:this.href,target:"_blank",rel:"noreferrer","aria-label":this.label}},[e("font-awesome-icon",{attrs:{icon:this.icon}})],1)])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,l){"use strict";l.r(e);var o={name:"SecondaryHero",components:{CoverImage:l(239).default}},n=l(32),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"75vh"}},[e("CoverImage",{attrs:{cover:"https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}}),this._v(" "),this._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container relative mx-auto"},[e("div",{staticClass:"items-center flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[e("div",{staticClass:"pr-12"},[e("h1",{staticClass:"text-white font-semibold text-5xl"},[this._v("\n            Welcome to my Blog.\n          ")]),this._v(" "),e("p",{staticClass:"mt-4 text-lg text-gray-300"},[this._v("\n            This is a space I use to share my thoughts around Product, Methodology, and Technology.\n          ")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CoverImage:l(239).default})},250:function(t,e,l){"use strict";l.r(e);var o=l(235),n=l(255),r={name:"BlogListing",components:{SlopeSeparator:o.default,BlogCard:n.default},props:{blogs:{type:Array,required:!0}}},c=l(32),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mt-12 relative bg-gray-200"},[e("SlopeSeparator",{attrs:{direction:"asc","fill-color":"text-gray-200"}}),this._v(" "),e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full -mt-40 mb-20 xl:mb-40"},[e("div",{staticClass:"container mx-auto px-6 relative"},[e("div",{staticClass:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"},this._l(this.blogs,(function(t,l){return e("BlogCard",{key:t.slug,attrs:{title:t.title,description:t.description,cover:t.cover,slug:t.slug,featured:0==l}})})),1)])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlopeSeparator:l(235).default,BlogCard:l(255).default})},255:function(t,e,l){"use strict";l.r(e);var o={name:"BlogCard",props:{title:{type:String,default:"Blog Title"},description:{type:String,default:"Blog Description"},cover:{type:String},slug:{type:String,required:!0},featured:{type:Boolean,default:!1}}},n=(l(287),l(32)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-700",class:[t.featured?"lg:max-w-none lg:col-span-2 lg:row-span-2":""]},[l("NuxtLink",{attrs:{to:{name:"blog-slug",params:{blog:"blog",slug:t.slug}}}},[l("div",{staticClass:"flex items-end justify-end w-full bg-cover h-56",class:[t.featured?"featured-post-cover":""],style:"background-image: url("+t.cover+")"}),t._v(" "),l("div",{staticClass:"px-5 py-3"},[l("h3",{staticClass:"text-gray-700 uppercase"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),l("div",{staticClass:"text-gray-500 mt-2"},[t._v("\n        "+t._s(t.description)+"\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,l){var content=l(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("7bd4a2cd",content,!0,{sourceMap:!1})},271:function(t,e,l){var content=l(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("7b1857d8",content,!0,{sourceMap:!1})},285:function(t,e,l){"use strict";l.r(e);l(26);var o=l(3),n=l(236),r=l(249),c=l(250),f=l(237),d=l(235),m={name:"Blog",components:{NavBar:n.default,SecondaryHero:r.default,SlopeSeparator:d.default,BlogListing:c.default,MainFooter:f.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var l,o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,o=t.params,n=t.error,e.next=3,l("blog",o.slug).only(["title","description","slug","cover"]).sortBy("date","desc").fetch().catch((function(t){n({statusCode:404,message:"Page not found"})}));case 3:return r=e.sent,e.abrupt("return",{blogs:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{ogTitle:"Guillaume Clement&#039;s personal blog.",ogDesc:"Checkout Guillaume&#039;s blog which covers topics around Code, Product, Methodology, and Technology",ogImageUrl:"https://guillaumecle.me/og-image.png"}},head:function(){return{title:"Guillaume Clement | Blog",meta:[{hid:"description",name:"description",content:"Guillaume Clement&#039;s blog covering topics around Code, Product, Methodology, and Technology."},{name:"og:title",content:this.ogTitle},{name:"og:description",content:this.ogDesc},{name:"og:image",content:this.ogImageUrl},{name:"og:image:secure_url",content:this.ogImageUrl},{name:"og:image:alt",content:this.ogTitle},{name:"twitter:title",content:this.ogTitle},{name:"twitter:description",content:this.ogDesc},{name:"twitter:image",content:this.ogImageUrl}]}}},h=(l(289),l(32)),component=Object(h.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("main",[e("SecondaryHero"),this._v(" "),e("div",{staticClass:"relative py-20"},[e("SlopeSeparator",{attrs:{direction:"desc","fill-color":"text-white"}})],1),this._v(" "),e("BlogListing",{attrs:{blogs:this.blogs}})],1),this._v(" "),e("MainFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:l(236).default,SecondaryHero:l(249).default,SlopeSeparator:l(235).default,BlogListing:l(250).default,MainFooter:l(237).default})},287:function(t,e,l){"use strict";l(270)},288:function(t,e,l){(e=l(33)(!1)).push([t.i,"@media (min-width:1024px){.featured-post-cover{height:32rem}}",""]),t.exports=e},289:function(t,e,l){"use strict";l(271)},290:function(t,e,l){(e=l(33)(!1)).push([t.i,"html{scroll-behavior:smooth}",""]),t.exports=e}}]);