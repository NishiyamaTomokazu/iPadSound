Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("プログラムスタート");
    this.setNextStatement(true, null);
    this.setColour("#ffbf00");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("終了");
    this.setPreviousStatement(true, null);
    this.setColour("#ffbf00");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(3, 1, 255, 1), "times")
        .appendField("回繰り返す");
    this.appendStatementInput("loop_play")
        .setCheck(null)
        .appendField("実行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#428a43");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_swon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SW=ON");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_swoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SW=OFF");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("明るさ >=")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "if_light");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_dark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("明るさ <")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "if_light");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_tempup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("温度 >")
        .appendField(new Blockly.FieldNumber(25, 1, 50, 1), "if_light");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_tempdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("温度 <")
        .appendField(new Blockly.FieldNumber(25, 1, 50, 1), "if_light");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_tempeq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("温度 =")
        .appendField(new Blockly.FieldNumber(25, 1, 50, 1), "if_light");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_henup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("現在の温度が変数xより高い");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_hendown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("現在の温度が変数xより低い");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_block_heneq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("現在の温度が変数xと同じ");
    this.setOutput(true, null);
    this.setColour("#59c059");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("赤")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("LED赤を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("緑")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#51a647");
 this.setTooltip("LED緑を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("青")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7373ff");
 this.setTooltip("LED青を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_yellow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("黄色")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d9c332");
 this.setTooltip("LED黄色を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_purple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紫")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d073ff");
 this.setTooltip("LED紫を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_lightblue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("水色")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#73f3ff");
 this.setTooltip("LED水色を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("白")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cfcfcf");
 this.setTooltip("LED白を点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("消灯")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "ledtime")
        .appendField("秒");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#545454");
 this.setTooltip("LEDを消灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffcc66"), "color")
        .appendField("で")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "time")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Red:")
        .appendField(new Blockly.FieldNumber(255, 0, 255, 1), "color_r")
        .appendField("Green:")
        .appendField(new Blockly.FieldNumber(255, 0, 255, 1), "color_g")
        .appendField("Blue:")
        .appendField(new Blockly.FieldNumber(255, 0, 255, 1), "color_b")
        .appendField("で")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "time")
        .appendField("秒点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fade_red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("赤を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("緑を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#51a647");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("青を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7373ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_yellow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("黄色を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d9c332");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_purple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紫を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d073ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_lightblue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("水色を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#73f3ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['fade_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("白を")
        .appendField(new Blockly.FieldDropdown([["フェードイン","f_in"], ["フェードアウト","f_out"]]), "fade")
        .appendField("する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cfcfcf");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_conti_red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("赤を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("LEDを赤で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("緑を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#51a647");
 this.setTooltip("LEDを緑で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_blue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("青を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7373ff");
 this.setTooltip("LEDを青で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_yellow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("黄色を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d9c332");
 this.setTooltip("LEDを黄色で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_purple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紫を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d073ff");
 this.setTooltip("LEDを紫で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_lightblue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("水色を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#73f3ff");
 this.setTooltip("LEDを赤で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("白を連続点灯");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cfcfcf");
 this.setTooltip("LEDを白で点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['led_conti_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEDを消灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#545454");
 this.setTooltip("LEDを消灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['backlight_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("バックライトを")
        .appendField(new Blockly.FieldNumber(100, 1, 100, 1), "backlightlight")
        .appendField("％で")
        .appendField(new Blockly.FieldNumber(1, 0.25, 31.75, 0.25), "backlighttime")
        .appendField("秒間点灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4c97ff");
 this.setTooltip("時計のバックライトを一定時間点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['backlight_conti'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("バックライトを連続点灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4c97ff");
 this.setTooltip("時計のバックライトを点灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['backlight_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("バックライト消灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4c97ff");
 this.setTooltip("時計のバックライトを消灯します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒 or 音センサ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer_sw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒 or SWセンサ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒 or 明るくなるまで")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "timerlight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer_dark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒 or 暗くなるまで")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "timerlight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['timer_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("動作停止")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timertime")
        .appendField("秒 or 温度")
        .appendField(new Blockly.FieldNumber(25, 1, 50, 1), "timertemp")
        .appendField("度");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff8c1a");
 this.setTooltip("一定時間動作を停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("音センサ信号があるまで待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("音センサ反応するまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_sw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SWボタンが押されるまで待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("SWボタンが押されるまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("明るくなるまで待つ")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "waitlight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("明るくなるまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_dark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("暗くなるまで待つ")
        .appendField(new Blockly.FieldNumber(50, 1, 100, 1), "waitlight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("暗くなるまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("温度が")
        .appendField(new Blockly.FieldNumber(25, 1, 50, 1), "waitlight")        
        .appendField("度になるまで待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("指定温度になるまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_signal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("信号入力があるまで待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("信号入力があるまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait_alerm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("アラーム信号があるまで待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5cb1d6");
 this.setTooltip("アラームが鳴るまで停止します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sound1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("確認音１");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cf63cf");
 this.setTooltip("確認音１を鳴らします");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sound2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("確認音２");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cf63cf");
 this.setTooltip("確認音２を鳴らします");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sound3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("確認音３");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cf63cf");
 this.setTooltip("確認音３を鳴らします");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['soundplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("音プログラムを再生する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#cf63cf");
 this.setTooltip("音プログラムを再生します");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_yes'] = {
  init: function() {
    this.appendValueInput("if_jeken")
        .setCheck(null)
        .appendField("もし ～なら");
    this.appendStatementInput("yes")
        .setCheck(null)
        .appendField("YES");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("if_jeken")
        .setCheck(null)
        .appendField("もし　～なら");
    this.appendStatementInput("yes")
        .setCheck(null)
        .appendField("YES");
    this.appendStatementInput("no")
        .setCheck(null)
        .appendField("No");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffab19");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputSignal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("信号出力");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputdc_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DCモータを")
	    .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timepara")
        .appendField("秒動かす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputdc_cont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DCモータを動かす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputdc_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DCモータを停止する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputmame_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("豆球を")
        .appendField(new Blockly.FieldNumber(1, 1, 255, 1), "timepara")
        .appendField("秒点灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputmame_cont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("豆球を点灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['outputmame_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("豆球を消灯する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7385");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['input_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("変数xに代入する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a34a1d");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};