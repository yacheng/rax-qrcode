if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }
function success() {
require('../../app');
require('../../src/miniapp/index');
require('../../demo/miniapp/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}