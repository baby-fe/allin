const u = navigator.userAgent;

export default {
  name: 'tools',
  isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
  isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端

  /**
   * setTitle
   * @param {String} title [description]
   */
  setTitle(title) {
    title = title ? title : '';
    window.document.title = title;
  },

  /**
   * isEmpty
   * @param  {String}  value [description]
   * @return {Boolean}       [description]
   */
  isEmpty(value) {
    return value === null || value === undefined || value.trim() === ''
  },


  /**
   * [queryStringToObject description]
   */
  // queryStringToObject(){
  //   const urlParams = Qs.parse(location.search)
  //   return urlParams
  // },

  /**
   * [objectToQueryString description]
   * @param  {Object} obj [description]
   * @return {string}     [description]
   */
  objectToQueryString(obj) {
    if (!obj || !Object.keys(obj).length) {
      return ''
    }
    return '?' + Object.keys(obj).map((key) => {
      return `${key}=${encodeURIComponent(obj[key])}`
    }).join('&')
  },

  /**
   * setKeyToValue
   * @param  {Object} obj [description]
   * @return {Object}     [description]
   */
  setKeyToValue(obj) {
    let newObj = {}
    let key
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }
      newObj[key] = key
    }
    return newObj
  },

  /**
   * loadScript
   * @param  {string} url [description]
   */
  loadScript(url) {
    const httpReq = new XMLHttpRequest()
    httpReq.open('GET', url, true)
    httpReq.send(null)
  },

  /**
   * handlerMessage
   * @param  {String} message [description]
   * @return {String}         [description]
   */
  handlerMessage: function(message) {
      let msg = '';
      if (message) {
        switch (message) {
          case 1000:
            msg = '没有权限';
            break;
          case -201:
            msg = '没有用户';
            break;
          case -1:
            msg = '没有权限';
            break;
          case 500:
            msg = '服务器错误';
            break;
          default:
            msg = message;
            break;
        }
      }
      return msg;
  },

  /**
   * showLoading
   * @param  {Boolean} show [description]
   */
  showLoading(show) {
    var loading = document.getElementById('loading')
    if (!loading) {
      loading = document.createElement('img');
      loading.id = 'loading';
      loading.className = 'loading';
      loading.src = "/static/image/loading.gif";
      document.body.appendChild(loading)
    }

    var isVisible = loading.offsetWidth > 0 || loading.offsetHeight > 0;
    if (show && !isVisible) {
      loading.style.display = 'block';
    } else {
      loading.style.display = 'none';
    }
  },


  /**
   * [htmlEncode description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlEncode(str) {
    str = str.replace(/\n/g,'<br>');
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    str = str.replace(/\+/g,' &#43;');
    str = str.replace(/ /g, '&nbsp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    return str;
  },
  /**
   * [htmlDecode description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlDecode(str) {
    str = str.replace(/&lt;/gi, '<');
    str = str.replace(/&gt;/gi, '>');
    str = str.replace(/<br>/gi, '\n');
    str = str.replace(/&amp;/gi, '&');
    str = str.replace(/&quot;/gi, '"');
    str = str.replace(/&#39;/g, "'");
    str = str.replace(/&#43;/g, '+');
    str = str.replace(/&nbsp;/gi, ' ');
    return str;
  },
  /**
   * [htmlEncoding description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlEncoding(str) {
    // str = str.replace(/\n/g,'<br>');
    str = str.replace(/\+/g, '&#43;');
    return str;
  },
  /**
   * [htmlDecoding description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlDecoding(str) {
    // str = str.replace(/<br>/gi, '\n');
    str = str.replace(/&#43;/g, '+');
    return str;
  },

  formatTime(seconds) {
    var min,hour,second, newMin, time,day;
    var seconds=parseInt(seconds);
    if(seconds>60){
        min = Math.floor(seconds / 60);
        second = seconds % 60;
        if (min > 60) {
            hour = Math.floor(min / 60);
            min = min % 60;
        }
        if (hour > 24) {
            day = Math.floor(hour / 24);
            hour=hour%24;
            min = min % 60;
        }
    }else{
        second=seconds;
    }
    return time=(day? day+'天':'')+(hour ? (hour<10 ? '0'+hour : hour)+':' : '00')+(min ? (min<10 ? '0'+min : min) + ':' : '00')+ (second<10 ? '0'+second : second);
    /* if(day>0){
        return time=(day? day+'天':'')+(hour? hour+'小时':'');
    }else if(hour>0){
        return time=(hour? hour+'小时':'')+(min? min + '分':'');
    }else if(min>0){
        return time=(min? min + '分':'');
    }else{
        return '1分';
    }*/
  },

  //获取url参数
  GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
  },

  toast:function(msg){
      let _t = document.createElement('div');
      _t.className = 'toasting'
      _t.innerHTML = msg;
      document.body.appendChild(_t);
      setTimeout(()=>{document.body.removeChild(_t);},2000);
  },
}
