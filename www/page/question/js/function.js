function renderQuestion(array){
  html = '\
  <li>\
    <label class="item-radio item-content">\
      <input type="radio" name="demo-media-radio" value="'+array.index+'"/>\
      <i class="icon icon-radio"></i>\
      <div class="item-inner">\
        ' + array.answer + '\
      </div>\
      <div class="result" style="display:none">' + array.result + '</div>\
    </label>\
  </li>\
  '
  return html
}
