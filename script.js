define(['jquery', 'underscore', 'twigjs'], function ($, _, Twig) {
  var CustomWidget = function () {
    var self = this;

    this.getTemplate = _.bind(function (template, params, callback) {
      params = (typeof params == 'object') ? params : {};
      template = template || '';

      return this.render({
        href: '/templates/' + template + '.twig',
        base_path: this.params.path,
        v: this.get_version(),
        load: callback
      }, params);
    }, this);

    this.callbacks = {
      render: function () {
        console.log('render');
        return true;
      },

    init: _.bind(function () {
      // var ejoj = document.createElement("script");
      // ejoj.type = "text/javascript";
      // ejoj.src  = "templates/DisMojiPicker.js";
      //
      // ejoj.media = "all";
      // document.getElementsByTagName("head")[0].appendChild(ejoj);
      // console.log('ejoj файл добавлен');
      // console.log(ejoj);
      var ssss = document.createElement("script");
      ssss.type = "text/javascript";
      ssss.src  = "https://pagead2.googlesyndication.com/pagead/show_ads.js";

      ssss.media = "all";
      document.getElementsByTagName("head")[0].appendChild(ssss);
      console.log('script файл добавлен');

      console.log(ssss);
      var sss = document.createElement("script");
      sss.src  = "https://code.jquery.com/jquery-3.5.1.js";
      document.getElementsByTagName("head")[0].appendChild(sss);
      console.log(sss);
      console.log('script файл добавлен');

      var ssst = document.createElement("script");
      ssst.src  = "https://twemoji.maxcdn.com/v/latest/twemoji.min.js";
      document.getElementsByTagName("head")[0].appendChild(ssst);
      console.log(ssst);
      console.log('script файл добавлен');

        var ss = document.createElement("link");
        ss.rel = "stylesheet";
        ss.href = "https://www.jqueryscript.net/css/jquerysctipttop.css";
        ss.type = "text/css";
        ss.media = "all";
        document.getElementsByTagName("head")[0].appendChild(ss);
      console.log(ss);
        console.log('CSS файл добавлен');

      var settings = self.get_settings();
      //   Проверяем подключен ли наш файл css
      if ($('link[href="' + settings.path + '/css/emojis.css?v=' + settings.version +'"').length < 1) {
        //  Подключаем файл style.css передавая в качестве параметра версию виджета
        $("head").append('<link href="' + settings.path + '/css/emojis.css?v=' + settings.version + '" type="text/css" rel="stylesheet">');
      }
      // $sh = document.querySelector("#list_item_1709 > div.list-row__cell.js-list-row__cell.list-row__cell-template-reply_name.list-row__cell-reply_name > div");
      // $sh.style.height = '38px';
      // console.log('CSS файл добавлен');
      //   console.log(AMOCRM);
      //   $click = document.querySelector("#card_holder > div.js-card-feed.card-holder__feed > div > div.feed-compose.feed-compose_amojo-internal")
      //   console.log($click);
      //
      //   $notesid =  document.getElementById('card_holder');
      //   $card_fields = document.getElementById('card_fields');
      //   $cc = document.querySelector('.feed-note__actions-inner');
      //   $chat = document.querySelector('.feed-amojo__actions-inner');
      //   console.log($chat);
      //   $ms = document.querySelector('.control-contenteditable__area'); //
      //   console.log($ms);
      //   $ms.innerText = 'Это текст';
      //   console.log(AMOCRM);
      //   console.log("_________");
      //   //Работает
      //   // $cc = $notesid.querySelector('.feed-note__actions-inner');
      //   // $cc.innerHTML = ('<p><select size="2" multiple name="hero[]"><option value="Чебурашка">Чебурашка</option><option selected value="Крокодил Гена">Крокодил Гена</option></select></p><p>');
      //   // $cc.style = 'position: absolute;'
      //   let button = document.createElement('button');
      //   button.id = 'multispisoc';
      //   button.innerHTML = 'Шаблоны';
      //   button.style = 'position: relative;display: inline-block;right: -600px;background-color: #77a2e8; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
      //   // $notesid.appendChild(button);
      //   // $cc.id = 'cc';
      //   $chat.id = 'chat';
      //   // button.addClass('shablon');
      //   let emoji = document.createElement('div');
      //   emoji.id = 'faceEnter';
      //   emoji.innerHTML = '<img id="faceEnter" alt="😀" style = "width: 22px;  height: 22px;position: relative;"; src = "https://w7.pngwing.com/pngs/925/558/png-transparent-smiley-emoji-emoticon-sticker-blushing-emoji-miscellaneous-face-blushing-emoji.png""></img>';
      //   emoji.style = 'position: relative;display: inline-block;right: -450px;text-transform: none; font-size: 13px;height: 30px;max-height: 30px;width: 30px;    top: 5px; line-height: 14px;';
      //   $ccc = document.getElementById('cc');
      //   $chatt = document.getElementById('chat');
      //
      //   // $ccc.append(button);
      //   // $ccc.append(emoji);
      //   console.log($notesid);
      //   console.log($card_fields);
      //   console.log($cc);
      //   $knopka =  document.getElementById('chat');
      //   $divselect = document.createElement('div');
      //   $divemoji = document.createElement('div');
      //   $divemoji.id = 'emojis';
      //   console.log($divemoji);
      //   // $divemoji.appendChild(emoji);
      //   let flag = false;
      //   let fuck = true;
      //   // $divemoji.style = 'display: none';
      // // console.log($( "#card_holder > div.js-card-feed.card-holder__feed > div > div.feed-compose.feed-compose_amojo-internal" ).style);
      // // console.log($( "#card_holder > div.js-card-feed.card-holder__feed > div > div.feed-compose.feed-compose_amojo-internal" ).cssText);
      if($('.feed-compose').hasClass('minimized')){
        alert('У этого блока есть класс minimized');
      }else{
        alert('У этого блока нет класса teminimizedst1');
      }
      $("#control-contenteditable__area feed-compose__message" ).click(function() {
        if($('.feed-compose').hasClass('minimized')){
          alert('У этого блока есть класс minimized');
        }else{
          alert('У этого блока нет класса minimized');
        }
        alert($(this).attr("class"));
      });
      //   // transition: box-shadow .2s;
      //   $chatt.append(button);
      //   $chatt.append(emoji);
      //   $( "#faceEnter" ).click(function() {
      //     console.log( "faceEnter" );
      //     $modal = document.querySelector('.emoji-picker');
      //     // $("#cc").disMojiPicker();
      //     // $modal.style.display = 'none';
      //     if (flag == false){
      //       console.log( "disMojiPicker");
      //       $("#chat").disMojiPicker();
      //       $("#cc").picker(emoji => $ms.innerText += emoji);  // вывод на консоле
      //       flag = true;
      //       fuck = true;
      //       // $("#faceEnter").find("img").style = "width: 20px;  height: 20px; bottom: 18px;    left: 8px;  position: relative;";
      //     }else {
      //       $modal.remove();
      //       // $("#cc").picker(emoji => $ms.innerText += emoji);
      //       // twemoji.parse(document.body);
      //       flag = false;
      //
      //     }
      //     // тут надо посмотреть размер
      //
      //     if (fuck == true) {
      //       console.log('true');
      //       twemoji.parse(document.body);
      //       fuck = false;
      //     }
      //
      //   });
      //   const selectables = function(obj) {
      //     console.log( "function(obj)");
      //     $(obj).append(`<div class="emoji-picker">
      //                   <div class="emoji-selectables">
      //                       <span class="picker-emoji-sel emoji-smileys active" data-emoji="smileys">😀</span>
      //                       <span class="picker-emoji-sel emoji-gestures" data-emoji="gestures">👌</span>
      //                       <span class="picker-emoji-sel emoji-peoples" data-emoji="peoples">🧓</span>
      //                       <span class="picker-emoji-sel emoji-symbos" data-emoji="symbos">❤️</span>
      //                       <span class="picker-emoji-sel emoji-nature" data-emoji="nature">🍀</span>
      //                       <span class="picker-emoji-sel emoji-food" data-emoji="food">🍌</span>
      //                       <span class="picker-emoji-sel emoji-activity" data-emoji="activity">🏀</span>
      //                       <span class="picker-emoji-sel emoji-travel" data-emoji="travel">✈️</span>
      //
      //                       </div>
      //                   <div class="emoji-content">
      //                       <div id="emoji-smileys" class="picker-emoji active picker-emoji-content emoji-smileys"></div>
      //                       <div id="emoji-gestures" class="picker-emoji picker-emoji-content emoji-gestures"></div>
      //                       <div id="emoji-peoples" class="picker-emoji picker-emoji-content emoji-peoples"></div>
      //                       <div id="emoji-symbos" class="picker-emoji picker-emoji-content emoji-symbos"></div>
      //                       <div id="emoji-natures" class="picker-emoji picker-emoji-content emoji-nature"></div>
      //                       <div id="emoji-foods" class="picker-emoji picker-emoji-content emoji-food"></div>
      //                       <div id="emoji-activity" class="picker-emoji picker-emoji-content emoji-activity"></div>
      //                       <div id="emoji-travel" class="picker-emoji picker-emoji-content emoji-travel"></div>
      //
      //                   </div>
      //                   <div>`);
      //     console.log( "return this function(obj)");
      //     return this;
      //
      //   }
      //
      //   $.fn.disMojiPicker = function () {
      //     console.log( "disMojiPicker");
      //     selectables(this); // не this надо поменять !!!
      //     const smileys = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾".split(" ");
      //     const getures = "👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👂 🦻 👃 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸".split(" ");
      //     const peoples = "👶 🧒 👦 👧 🧑 👱 👨 🧔 👨‍🦰 👨‍🦱 👨‍🦳 👨‍🦲 👩 👩‍🦰 🧑‍🦰 👩‍🦱 🧑‍🦱 👩‍🦳 🧑‍🦳 👩‍🦲 🧑‍🦲 👱‍♀️ 👱‍♂️ 🧓 👴 👵 🙍 🙍‍♂️ 🙍‍♀️ 🙎 🙎‍♂️ 🙎‍♀️ 🙅 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🧏 🧏‍♂️ 🧏‍♀️ 🙇 🙇‍♂️ 🙇‍♀️ 🤦 🤦‍♂️ 🤦‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🧑‍⚕️ 👨‍⚕️ 👩‍⚕️ 🧑‍🎓 👨‍🎓 👩‍🎓 🧑‍🏫 👨‍🏫 👩‍🏫 🧑‍⚖️ 👨‍⚖️ 👩‍⚖️ 🧑‍🌾 👨‍🌾 👩‍🌾 🧑‍🍳 👨‍🍳 👩‍🍳 🧑‍🔧 👨‍🔧 👩‍🔧 🧑‍🏭 👨‍🏭 👩‍🏭 🧑‍💼 👨‍💼 👩‍💼 🧑‍🔬 👨‍🔬 👩‍🔬 🧑‍💻 👨‍💻 👩‍💻 🧑‍🎤 👨‍🎤 👩‍🎤 🧑‍🎨 👨‍🎨 👩‍🎨 🧑‍✈️ 👨‍✈️ 👩‍✈️ 🧑‍🚀 👨‍🚀 👩‍🚀 🧑‍🚒 👨‍🚒 👩‍🚒 👮 👮‍♂️ 👮‍♀️ 🕵 🕵️‍♂️ 🕵️‍♀️ 💂 💂‍♂️ 💂‍♀️ 👷 👷‍♂️ 👷‍♀️ 🤴 👸 👳 👳‍♂️ 👳‍♀️ 👲 🧕 🤵 👰 🤰 🤱 👼 🎅 🤶 🦸 🦸‍♂️ 🦸‍♀️ 🦹 🦹‍♂️ 🦹‍♀️ 🧙 🧙‍♂️ 🧙‍♀️ 🧚 🧚‍♂️ 🧚‍♀️ 🧛 🧛‍♂️ 🧛‍♀️ 🧜 🧜‍♂️ 🧜‍♀️ 🧝 🧝‍♂️ 🧝‍♀️ 🧞 🧞‍♂️ 🧞‍♀️ 🧟 🧟‍♂️ 🧟‍♀️ 💆 💆‍♂️ 💆‍♀️ 💇 💇‍♂️ 💇‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🧑‍🦯 👨‍🦯 👩‍🦯 🧑‍🦼 👨‍🦼 👩‍🦼 🧑‍🦽 👨‍🦽 👩‍🦽 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 👯 👯‍♂️ 👯‍♀️ 🧖 🧖‍♂️ 🧖‍♀️ 🧘 🧑‍🤝‍🧑 👭 👫 👬 💏 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💑 👨‍❤️‍👨 👩‍❤️‍👩 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🗣 👤 👥 👣".split(" ")
      //     const natures = "🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫".split(" ");
      //     const foods = "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🧃 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂".split(" ");
      //     const activitys = "⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️ 🏋️‍♂️ 🏋️‍♀️ 🤼 🤼‍♂️ 🤼‍♀️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️ ⛹️‍♂️ ⛹️‍♀️ 🤺 🤾 🤾‍♂️ 🤾‍♀️ 🏌️ 🏌️‍♂️ 🏌️‍♀️ 🏇 🧘 🧘‍♂️ 🧘‍♀️ 🏄 🏄‍♂️ 🏄‍♀️ 🏊 🏊‍♂️ 🏊‍♀️ 🤽 🤽‍♂️ 🤽‍♀️ 🚣 🚣‍♂️ 🚣‍♀️ 🧗 🧗‍♂️ 🧗‍♀️ 🚵 🚵‍♂️ 🚵‍♀️ 🚴 🚴‍♂️ 🚴‍♀️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩".split(" ");
      //     const travels = "🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁".split(" ");
      //     const symbos = "❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ 🟥 🟧 🟨 🟩 🟦 🟪 ⬛️ ⬜️ 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧".split(" ");
      //
      //
      //     smileys.map(emoji => $('#emoji-smileys').append(`<span>${emoji}</span>`));
      //     natures.map(emoji => $('#emoji-natures').append(`<span>${emoji}</span>`));
      //     getures.map(emoji => $('#emoji-gestures').append(`<span>${emoji}</span>`));
      //     foods.map(emoji => $('#emoji-foods').append(`<span>${emoji}</span>`));
      //     activitys.map(emoji => $('#emoji-activity').append(`<span>${emoji}</span>`));
      //     travels.map(emoji => $('#emoji-travel').append(`<span>${emoji}</span>`));
      //     peoples.map(emoji => $('#emoji-peoples').append(`<span>${emoji}</span>`));
      //     symbos.map(emoji => $('#emoji-symbos').append(`<span>${emoji}</span>`));
      //
      //     $('.emoji-selectables span').click(function() {
      //       console.log( "click emoji-selectables");
      //       $(`.picker-emoji-sel`).removeClass('active')
      //       $(`.picker-emoji`).removeClass('active');
      //       $(`.emoji-${$(this)[0].dataset.emoji}`).addClass('active');
      //       $(`.picker-emoji-sel.emoji-${$(this)[0].dataset.emoji}`).addClass('active');
      //     });
      //     return this;
      //   }
      //   $.fn.picker = function(emoji) {
      //     console.log( "function(emoji)");
      //     $('.picker-emoji-content span').click(function(e) {
      //       console.log( ".picker-emoji-content");
      //       emoji($($(this).children()).attr('alt'));
      //     })
      //   };
      //
      //   $( "#multispisoc" ).click(function() {
      //     alert( "multispisoc" );
      //     // display: none;
      //     // display: inline-flex;
      //     alert($divselect.style.display);
      //     console.log($divselect.style.display);
      //     if ($divselect.style.display == ' ' || $divselect.style.display == 'none') {
      //       alert('none');
      //       button.removeAttribute( 'style' );
      //       button.style = 'position: relative;display: inline-block;right: -600px;background-color: #77a2e8; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
      //       $divselect.style = 'position: relative; display: inline-flex;right: -480px;bottom: 85px;text-transform: none;font-size: 15px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 100px;line-height: 14px;border-width: 1px;    border-style: solid;    border-color: #3c4038;';
      //       $divselect.innerHTML = ('<p><select size="2" style="position: relative;display: inline-flex;    right: 1px;bottom: 16px;    text-transform: none;font-size: 15px;    font-weight: 100;height: 100px;max-height: 100px;border-radius: 1px;width: 150px;line-height: 14px;border-width: 1px;border-style: solid;    border-image: initial;    border-color: #8591a5;font: inherit;" multiple name="hero[]"><option value="Чебурашка">Добавить новый шаблон</option><option value="Чебурашка">Чебурашка</option><option selected value="Крокодил Гена">Крокодил Гена</option></select></p><p>');
      //     } else {
      //       alert('else');
      //       button.removeAttribute( 'style' );
      //       button.style = 'position: relative;display: inline-block;right: -600px;background-color: #5687d6; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
      //       $divselect.remove();
      //       $divselect.style = 'position: relative; display: none;right: -480px;bottom: 85px;text-transform: none;font-size: 15px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 100px;line-height: 14px;border-width: 1px;    border-style: solid;    border-color: #3c4038;';
      //       $divselect.innerHTML = ('<p><select size="2" style="position: relative;display: none;    right: 1px;bottom: 16px;    text-transform: none;font-size: 15px;    font-weight: 100;height: 100px;max-height: 100px;border-radius: 1px;width: 150px;line-height: 14px;border-width: 1px;border-style: solid;    border-image: initial;    border-color: #8591a5;font: inherit;" multiple name="hero[]"><option value="Чебурашка">Добавить новый шаблон</option><option value="Чебурашка">Чебурашка</option><option selected value="Крокодил Гена">Крокодил Гена</option></select></p><p>');
      //
      //     }
      //     $.ajax({
      //       url: '/settings/communications/'
      //     }).done(function(html){
      //       $taps = jQuery.parseHTML(html);
      //       console.log($taps);
      //       console.log($taps[0].text);
      //       // #list_table.js-scroll-container.list__table
      //     });
      //     var xmlhttp = new XMLHttpRequest();
      //     xmlhttp.open('GET', '/settings/communications/', true);
      //     xmlhttp.responseType = "document";
      //     xmlhttp.onreadystatechange = function(){
      //       if(xmlhttp.readyState == 4){ //запрос файла выполнен
      //         if(xmlhttp.status == 200){ //запос успешен
      //           var doc = xmlhttp.response;
      //           var elem = doc.getElementById("list_table");
      //           console.log(elem);
      //           console.log(elem.innerHTML);
      //           console.log(elem.innerText);
      //         }else{
      //           console.log('Ошибка загрузки файла: ' + xmlhttp.statusText);
      //         }
      //       }
      //     }
      //     xmlhttp.send(null);
      //
      //     alert($divselect.style.display);
      //     console.log($divselect.style.display);
      //     $knopka.appendChild($divselect);
      //     $divselect.removeAttribute( 'innerHTML' );
      //     // window.open('/settings/communications/'); // работает *
      //   });
      // });
        if(AMOCRM.data.current_entity == 'leads') { //ЗАГЛУШКА FIX
          console.log(AMOCRM);
          console.log("_________");
          console.log(AMOCRM.data.current_entity);
          console.log("_________");
          console.log(AMOCRM.data.card_page);
          console.log("_________");
          console.log(AMOCRM.data.card_page.notes.notes);
          console.log("_________");
          console.log(AMOCRM.data.card_page.el);
          $delcalss =AMOCRM.data.card_page.el;
          $notesid =  document.getElementById('card_holder');
          $card_fields = document.getElementById('card_fields');
          $cc = document.querySelector('.feed-note__actions-inner');
          $chat = document.querySelector('.feed-amojo__actions-inner');
          console.log($chat);
          $ms = document.querySelector('.control-contenteditable__area'); //
          console.log($ms);
          // $ms.innerText = 'Это текст';
          console.log(AMOCRM);
          console.log("_________");
          //Работает
          // $cc = $notesid.querySelector('.feed-note__actions-inner');
          // $cc.innerHTML = ('<p><select size="2" multiple name="hero[]"><option value="Чебурашка">Чебурашка</option><option selected value="Крокодил Гена">Крокодил Гена</option></select></p><p>');
          // $cc.style = 'position: absolute;'
          let button = document.createElement('button');
          button.id = 'multispisoc';
          button.innerHTML = 'Шаблоны';
          button.style = 'position: relative;display: inline-block;right: -600px;background-color: #77a2e8; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
          // $notesid.appendChild(button);
          // $cc.id = 'cc';
          $chat.id = 'chat';
          // button.addClass('shablon');
          let emoji = document.createElement('div');
          emoji.id = 'faceEnter';
          emoji.innerHTML = '<img id="faceEnter" alt="😀" style = "width: 22px;  height: 22px;position: relative;"; src = "https://w7.pngwing.com/pngs/925/558/png-transparent-smiley-emoji-emoticon-sticker-blushing-emoji-miscellaneous-face-blushing-emoji.png""></img>';
          emoji.style = 'position: relative;display: inline-block;right: -450px;text-transform: none; font-size: 13px;height: 30px;max-height: 30px;width: 30px;    top: 5px; line-height: 14px;';
          $ccc = document.getElementById('cc');
          $chatt = document.getElementById('chat');
          $chatt.append(button);
          $chatt.append(emoji);
          // $ccc.append(button);
          // $ccc.append(emoji);
          console.log($notesid);
          console.log($card_fields);
          console.log($cc);
          $knopka =  document.getElementById('chat');
          $divselect = document.createElement('div');
          $divemoji = document.createElement('div');
          $divemoji.id = 'emojis';
          console.log($divemoji);
          // $divemoji.appendChild(emoji);
          let flag = false;
          let fuck = true;
          // $divselect.id = 'shablon';
          $divselect.style = 'display: none';
          $( "#faceEnter" ).click(function() {
            console.log( "faceEnter" );
            $modal = document.querySelector('.emoji-picker');
            // $("#cc").disMojiPicker();
            // $modal.style.display = 'none';
            if (flag == false){
              console.log( "disMojiPicker");
              $("#chat").disMojiPicker();
              $("#cc").picker(emoji => $ms.innerText += emoji);  // вывод на консоле
              flag = true;
              fuck = true;
              // $("#faceEnter").find("img").style = "width: 20px;  height: 20px; bottom: 18px;    left: 8px;  position: relative;";
            }else {
              $modal.remove();
              // $("#cc").picker(emoji => $ms.innerText += emoji);
              // twemoji.parse(document.body);
              flag = false;

            }
            // тут надо посмотреть размер
            if (fuck == true) {
              console.log('true');
              twemoji.parse(document.body);
              fuck = false;
            }

          });
          const selectables = function(obj) {
            console.log( "function(obj)");
            $(obj).append(`<div class="emoji-picker">
                        <div class="emoji-selectables">
                            <span class="picker-emoji-sel emoji-smileys active" data-emoji="smileys">😀</span>
                            <span class="picker-emoji-sel emoji-gestures" data-emoji="gestures">👌</span>
                            <span class="picker-emoji-sel emoji-peoples" data-emoji="peoples">🧓</span>
                            <span class="picker-emoji-sel emoji-symbos" data-emoji="symbos">❤️</span>
                            <span class="picker-emoji-sel emoji-nature" data-emoji="nature">🍀</span>
                            <span class="picker-emoji-sel emoji-food" data-emoji="food">🍌</span>
                            <span class="picker-emoji-sel emoji-activity" data-emoji="activity">🏀</span>
                            <span class="picker-emoji-sel emoji-travel" data-emoji="travel">✈️</span>

                            </div>
                        <div class="emoji-content">
                            <div id="emoji-smileys" class="picker-emoji active picker-emoji-content emoji-smileys"></div>
                            <div id="emoji-gestures" class="picker-emoji picker-emoji-content emoji-gestures"></div>
                            <div id="emoji-peoples" class="picker-emoji picker-emoji-content emoji-peoples"></div>
                            <div id="emoji-symbos" class="picker-emoji picker-emoji-content emoji-symbos"></div>
                            <div id="emoji-natures" class="picker-emoji picker-emoji-content emoji-nature"></div>
                            <div id="emoji-foods" class="picker-emoji picker-emoji-content emoji-food"></div>
                            <div id="emoji-activity" class="picker-emoji picker-emoji-content emoji-activity"></div>
                            <div id="emoji-travel" class="picker-emoji picker-emoji-content emoji-travel"></div>

                        </div>
                        <div>`);
            console.log( "return this function(obj)");
            return this;

          }
          $.fn.disMojiPicker = function () {
            console.log( "disMojiPicker");
            selectables(this); // не this надо поменять !!!
            const smileys = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾".split(" ");
            const getures = "👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👂 🦻 👃 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸".split(" ");
            const peoples = "👶 🧒 👦 👧 🧑 👱 👨 🧔 👨‍🦰 👨‍🦱 👨‍🦳 👨‍🦲 👩 👩‍🦰 🧑‍🦰 👩‍🦱 🧑‍🦱 👩‍🦳 🧑‍🦳 👩‍🦲 🧑‍🦲 👱‍♀️ 👱‍♂️ 🧓 👴 👵 🙍 🙍‍♂️ 🙍‍♀️ 🙎 🙎‍♂️ 🙎‍♀️ 🙅 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🧏 🧏‍♂️ 🧏‍♀️ 🙇 🙇‍♂️ 🙇‍♀️ 🤦 🤦‍♂️ 🤦‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🧑‍⚕️ 👨‍⚕️ 👩‍⚕️ 🧑‍🎓 👨‍🎓 👩‍🎓 🧑‍🏫 👨‍🏫 👩‍🏫 🧑‍⚖️ 👨‍⚖️ 👩‍⚖️ 🧑‍🌾 👨‍🌾 👩‍🌾 🧑‍🍳 👨‍🍳 👩‍🍳 🧑‍🔧 👨‍🔧 👩‍🔧 🧑‍🏭 👨‍🏭 👩‍🏭 🧑‍💼 👨‍💼 👩‍💼 🧑‍🔬 👨‍🔬 👩‍🔬 🧑‍💻 👨‍💻 👩‍💻 🧑‍🎤 👨‍🎤 👩‍🎤 🧑‍🎨 👨‍🎨 👩‍🎨 🧑‍✈️ 👨‍✈️ 👩‍✈️ 🧑‍🚀 👨‍🚀 👩‍🚀 🧑‍🚒 👨‍🚒 👩‍🚒 👮 👮‍♂️ 👮‍♀️ 🕵 🕵️‍♂️ 🕵️‍♀️ 💂 💂‍♂️ 💂‍♀️ 👷 👷‍♂️ 👷‍♀️ 🤴 👸 👳 👳‍♂️ 👳‍♀️ 👲 🧕 🤵 👰 🤰 🤱 👼 🎅 🤶 🦸 🦸‍♂️ 🦸‍♀️ 🦹 🦹‍♂️ 🦹‍♀️ 🧙 🧙‍♂️ 🧙‍♀️ 🧚 🧚‍♂️ 🧚‍♀️ 🧛 🧛‍♂️ 🧛‍♀️ 🧜 🧜‍♂️ 🧜‍♀️ 🧝 🧝‍♂️ 🧝‍♀️ 🧞 🧞‍♂️ 🧞‍♀️ 🧟 🧟‍♂️ 🧟‍♀️ 💆 💆‍♂️ 💆‍♀️ 💇 💇‍♂️ 💇‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🧑‍🦯 👨‍🦯 👩‍🦯 🧑‍🦼 👨‍🦼 👩‍🦼 🧑‍🦽 👨‍🦽 👩‍🦽 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 👯 👯‍♂️ 👯‍♀️ 🧖 🧖‍♂️ 🧖‍♀️ 🧘 🧑‍🤝‍🧑 👭 👫 👬 💏 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💑 👨‍❤️‍👨 👩‍❤️‍👩 👪 👨‍👩‍👦 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👦 👨‍👦‍👦 👨‍👧 👨‍👧‍👦 👨‍👧‍👧 👩‍👦 👩‍👦‍👦 👩‍👧 👩‍👧‍👦 👩‍👧‍👧 🗣 👤 👥 👣".split(" ")
            const natures = "🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫".split(" ");
            const foods = "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🧃 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂".split(" ");
            const activitys = "⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️ 🏋️‍♂️ 🏋️‍♀️ 🤼 🤼‍♂️ 🤼‍♀️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️ ⛹️‍♂️ ⛹️‍♀️ 🤺 🤾 🤾‍♂️ 🤾‍♀️ 🏌️ 🏌️‍♂️ 🏌️‍♀️ 🏇 🧘 🧘‍♂️ 🧘‍♀️ 🏄 🏄‍♂️ 🏄‍♀️ 🏊 🏊‍♂️ 🏊‍♀️ 🤽 🤽‍♂️ 🤽‍♀️ 🚣 🚣‍♂️ 🚣‍♀️ 🧗 🧗‍♂️ 🧗‍♀️ 🚵 🚵‍♂️ 🚵‍♀️ 🚴 🚴‍♂️ 🚴‍♀️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩".split(" ");
            const travels = "🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁".split(" ");
            const symbos = "❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ 🟥 🟧 🟨 🟩 🟦 🟪 ⬛️ ⬜️ 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧".split(" ");


            smileys.map(emoji => $('#emoji-smileys').append(`<span>${emoji}</span>`));
            natures.map(emoji => $('#emoji-natures').append(`<span>${emoji}</span>`));
            getures.map(emoji => $('#emoji-gestures').append(`<span>${emoji}</span>`));
            foods.map(emoji => $('#emoji-foods').append(`<span>${emoji}</span>`));
            activitys.map(emoji => $('#emoji-activity').append(`<span>${emoji}</span>`));
            travels.map(emoji => $('#emoji-travel').append(`<span>${emoji}</span>`));
            peoples.map(emoji => $('#emoji-peoples').append(`<span>${emoji}</span>`));
            symbos.map(emoji => $('#emoji-symbos').append(`<span>${emoji}</span>`));

            $('.emoji-selectables span').click(function() {
              console.log( "click emoji-selectables");
              $(`.picker-emoji-sel`).removeClass('active')
              $(`.picker-emoji`).removeClass('active');
              $(`.emoji-${$(this)[0].dataset.emoji}`).addClass('active');
              $(`.picker-emoji-sel.emoji-${$(this)[0].dataset.emoji}`).addClass('active');
            });
            return this;
          }
          $.fn.picker = function(emoji) {
            console.log( "function(emoji)");
            $('.picker-emoji-content span').click(function(e) {
              console.log( ".picker-emoji-content");
              emoji($($(this).children()).attr('alt'));
            })
          };
          var langArray = [
            {value: "val1", text: "text 1"},
            {value: "val2", text: "text 2"}
          ];
          var select = document.createElement('select'),
              option,
              i = 0,
              il = langArray.length;
          select.size = '2';
          select.id = 'shablon';
          select.name = 'shablon';
          select.className = 'selectshab';
          for (; i < il; i += 1) {
            option = document.createElement('option');
            option.id = 'optionn';
            option.className = 'optionn';
            option.setAttribute('value', langArray[i].value);
            option.appendChild(document.createTextNode(langArray[i].text));
            select.appendChild(option);
          }
          $divselect.appendChild(select);
          $knopka.appendChild($divselect);
          $("#multispisoc" ).click(function() {
            if ($divselect.style.display == ' ' || $divselect.style.display == 'none') {
              alert('none');
              button.removeAttribute('style');
              button.style = 'position: relative;display: inline-block;right: -600px;background-color: #77a2e8; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
              $divselect.style = 'position: relative; display: inline-flex;right: -480px;bottom: 85px;text-transform: none;font-size: 16px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 115px;line-height: 14px;';
            } else {
              alert('else');
              button.removeAttribute( 'style' );
              button.style = 'position: relative;display: inline-block;right: -600px;background-color: #5687d6; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
              $divselect.style = 'position: relative; display: none;right: -480px;bottom: 85px;text-transform: none;font-size: 16px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 115px;line-height: 14px;';
          }
            $( "#chat > div:nth-child(5) select" )
                .change(function () {
                  $( "#chat > div:nth-child(5) select option:selected" ).each(function() {
                    console.log("Каждый раз заходить сюда");
                    $ms.innerText = ' ';
                    $ms.innerText = $(this).val();
                    $(this).removeAttr("selected");
                    button.removeAttribute( 'style' );
                    button.style = 'position: relative;display: inline-block;right: -600px;background-color: #5687d6; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
                    $divselect.style = 'position: relative; display: none;right: -480px;bottom: 85px;text-transform: none;font-size: 16px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 115px;line-height: 14px;';
                  });
                })
                .change();
          });

          // $("#selbot" ).click(function() {
          //   console.log('shab')
          //   $(".selectshab option:selected"), function(){
          //     alert($(this).val());
          //     $ms.innerText = ' ';
          //     $ms.innerText = $(this).val();
          //     button.removeAttribute( 'style' );
          //     button.style = 'position: relative;display: inline-block;right: -600px;background-color: #5687d6; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
          //     $selbot.style = 'position: relative;display: none;right: -10px;background-color: #77a2e8; color: #fff!important;border-color: transparent!important;text-transform: none; font-size: 13px;    font-weight: 700;     height: 40px;max-height: 38px;border-radius: 1px;    width: 115px;line-height: 14px;border: 1px solid #dbdedf;';
          //     $divselect.style = 'position: relative; display: none;right: -480px;bottom: 85px;text-transform: none;font-size: 15px;font-weight: 100;    height: 40px;    max-height: 100px;border-radius: 1px;width: 100px;line-height: 14px;border-width: 1px;    border-style: solid;    border-color: #3c4038;';
          //     $divselect.innerHTML = ('<p><select size="2" style="position: relative;display: none;    right: 1px;bottom: 16px;    text-transform: none;font-size: 15px;    font-weight: 100;height: 100px;max-height: 100px;border-radius: 1px;width: 150px;line-height: 14px;border-width: 1px;border-style: solid;    border-image: initial;    border-color: #8591a5;font: inherit;" multiple name="hero[]"></select>');
          //   };
          // });
          // notesid.id = "notesid";
          // card_fields.id = "card_fields";
          // cc.id = "cc";
          // fc.id = "fc";
          // notesid.style = "background-color: red";
          // // $delcalss.style ="background-color: black";
          // cc.style ="background-color: yellow";
          // fc.style ="background-color: green";
          // card_fields.style ="background-color: blue";

          // let additems = document.getElementById('card_holder');
          // let ourMenu = document.createElement('div');
          // let nulik = document.getElementsByClassName('feed-compose');
          // let ourButton = document.createElement('div');
          // ourMenu.id = "ourMenu";
          // additems.append(ourButton, nulik);
          // additems.append(ourMenu, ourButton);
          // ourMenu.style = "background-color: #2e3640; border: 1px solid lightblue; line-heght: 40px; height: 60px; margin-left: 75px; position: fixed; border-radius: 20px; display:flex; display: none";
          //
          // $delcalss.append('feed-compose','Привет');
          // $el->0:div#card_holder.card-holder.js-widgets-active->children: 3: div.js-card-feed.card-holder__feed->childNodes:2:div.notes-wrapper.loading-more.scrolled.scrolled-up->childNodes:1:div.feed-compose
          // let $text='';
          // let $datatext='';
          // console.log($text);
          // $data = [
          //     'привер',
          //     'салам'
          // ];
          // $(document).keyup(function(e) {
          //   $('#result').append(e.key + ', код: ' + e.keyCode + '<br>');
          //   console.log(e.key.length);
          //   if (e.key.length == 1 && e.key != undefined){
          //     $text = $text + e.key;
          //   }
          //   if (e.key == 'Backspace'){
          //     $text.slice(0, -1);
          //   }
          //   console.log($text);
          //   for ($i = 0; $i< $data.length; $i++){
          //     for (let char of $data[$i]) {
          //       $datatext = $datatext + char;
          //       console.log($datatext);
          //       if ($datatext == $text){
          //         alert($data[$i]);
          //         console.log("datatext == text")
          //         break;
          //       }
          //     }
          //     $datatext = '';
          //   }
          // });

        }

        return true;
      }, this),
      bind_actions: function () {
        return true;
      },

      settings: function () {
        return true;
      },
      onSave: function () {
        return true;
      },
      destroy: function () {

      },
      contacts: {
        //select contacts in list and clicked on widget name
        selected: function () {
        }
      },
      leads: {
        //select leads in list and clicked on widget name
        selected: function () {
        }
      },
      tasks: {
        //select taks in list and clicked on widget name
        selected: function () {
        }
      },
      advancedSettings: _.bind(function () {
        // var $work_area = $('#work-area-' + self.get_settings().widget_code),
        //   $save_button = $(
        //     Twig({ref: '/tmpl/controls/button.twig'}).render({
        //       text: 'Сохранить',
        //       class_name: 'button-input_blue button-input-disabled js-button-save-' + self.get_settings().widget_code,
        //       additional_data: ''
        //     })
        //   ),
        //   $cancel_button = $(
        //     Twig({ref: '/tmpl/controls/cancel_button.twig'}).render({
        //       text: 'Отмена',
        //       class_name: 'button-input-disabled js-button-cancel-' + self.get_settings().widget_code,
        //       additional_data: ''
        //     })
        //   );
        //
        //
        // $save_button.prop('disabled', true);
        // $('.content__top__preset').css({float: 'left'});
        //
        // $('.list__body-right__top').css({display: 'block'})
        //   .append('<div class="list__body-right__top__buttons"></div>');
        // $('.list__body-right__top__buttons').css({float: 'right'})
        //   .append($cancel_button)
        //   .append($save_button);

        self.getTemplate('advanced_settings', {}, function (template) {
          var $page = $(
            template.render({title: self.i18n('advanced').title, widget_code: self.get_settings().widget_code})
          );

          $work_area.append($page);
        });
      }, self),

      /**
       * Метод срабатывает, когда пользователь в конструкторе Salesbot размещает один из хендлеров виджета.
       * Мы должны вернуть JSON код salesbot'а
       *
       * @param handler_code - Код хендлера, который мы предоставляем. Описан в manifest.json, в примере равен handler_code
       * @param params - Передаются настройки виджета. Формат такой:
       * {
       *   button_title: "TEST",
       *   button_caption: "TEST",
       *   text: "{{lead.cf.10929}}",
       *   number: "{{lead.price}}",
       *   url: "{{contact.cf.10368}}"
       * }
       *
       * @return {{}}
       */
      onSalesbotDesignerSave: function (handler_code, params) {
        var salesbot_source = {
            question: [],
            require: []
          },
          button_caption = params.button_caption || "",
          button_title = params.button_title || "",
          text = params.text || "",
          number = params.number || 0,
          handler_template = {
            handler: "show",
            params: {
              type: "buttons",
              value: text + ' ' + number,
              buttons: [
                button_title + ' ' + button_caption,
              ]
            }
          };


        salesbot_source.question.push(handler_template);

        return JSON.stringify([salesbot_source]);
      },
    };
    return this;
  };

  return CustomWidget;
});