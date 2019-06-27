import {createElement, render,Component } from 'rax';
import DU from "driver-universal"
import View from 'rax-view';
import QRCode from '../src/index';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
	    <QRCode 
           data={'http://market.m.taobao.com/apps/market/m-vip/88-festival.html?wh_weex=true&wx_navbar_transparent=true'}
          style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}

render(<App />, document.body, { driver: DU });
