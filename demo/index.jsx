/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render } from 'rax';
import DU from 'driver-universal';
import View from 'rax-view';
import QRCode from '../src/index';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <QRCode
        data="http://market.m.taobao.com/apps/market/m-vip/88-festival.html?wh_weex=true&wx_navbar_transparent=true"
        style={{ width: 400, height: 400 }}
      />
      <QRCode
        data="http://market.m.taobao.com/apps/market/m-vip/88-festival.html?wh_weex=true&wx_navbar_transparent=true"
        options={{ fillColor: 'red', blankColor: '#000' }}
      />
    </View>
  );
}

render(<App />, document.body, { driver: DU });
