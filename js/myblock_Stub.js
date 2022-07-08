Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'start\n';
  return code;
};
Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'end\n';
  return code;
};
Blockly.JavaScript['if_block_swon'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' swon ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_swoff'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' swoff ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_light'] = function(block) {
  var number_if_light = block.getFieldValue('if_light');
  // TODO: Assemble JavaScript into code variable.
  var code = ' light>= ' + number_if_light + ' ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_dark'] = function(block) {
  var number_if_light = block.getFieldValue('if_light');
  // TODO: Assemble JavaScript into code variable.
  var code = ' light< ' + number_if_light + ' ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_tempup'] = function(block) {
  var number_if_light = block.getFieldValue('if_light');
  // TODO: Assemble JavaScript into code variable.
  var code = ' temp> ' + number_if_light + ' ';;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_tempdown'] = function(block) {
  var number_if_light = block.getFieldValue('if_light');
  // TODO: Assemble JavaScript into code variable.
  var code = ' temp< ' + number_if_light + ' ';;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_tempeq'] = function(block) {
  var number_if_light = block.getFieldValue('if_light');
  // TODO: Assemble JavaScript into code variable.
  var code = ' temp= ' + number_if_light + ' ';;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_henup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' hen>x ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_hendown'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' hen<x ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['if_block_heneq'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' hen=x ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['led_red'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnRedFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_green'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnGreenFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_blue'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnBlueFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_yellow'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnYellowFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_purple'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnPurpleFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_lightblue'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnLightblueFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_white'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnWhiteFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_off'] = function(block) {
  var number_ledtime = block.getFieldValue('ledtime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnOnOffFor:( ' + number_ledtime + ' )\n';
  return code;
};
Blockly.JavaScript['led_point'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var number_time = block.getFieldValue('time');
  var code = 'led_point:( ' + colour_color + ' ' + number_time + ' )\n';
  return code;
};
Blockly.JavaScript['led_rgb'] = function(block) {
  var colour_r = block.getFieldValue('color_r');
  var colour_g = block.getFieldValue('color_g');
  var colour_b = block.getFieldValue('color_b');
  var number_time = block.getFieldValue('time');
  var code = 'led_rgb:( ' + colour_r + ' ' + colour_g + ' ' + colour_b + ' ' + number_time + ' )\n';
  return code;
};

Blockly.JavaScript['fade_red'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeRedFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_green'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeGreenFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_blue'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeBlueFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_yellow'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeYellowFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_purple'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadePurpleFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_lightblue'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeLightblueFor:( ' + fadeSt + ' )\n';
  return code;
};
Blockly.JavaScript['fade_white'] = function(block) {
  var fadeSt = block.getFieldValue('fade');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnFadeWhiteFor:( ' + fadeSt + ' )\n';
  return code;
};

Blockly.JavaScript['led_conti_red'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponRed( )\n';
  return code;
};
Blockly.JavaScript['led_conti_green'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponGreen( )\n';
  return code;
};
Blockly.JavaScript['led_conti_blue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponBlue( )\n';
  return code;
};
Blockly.JavaScript['led_conti_yellow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponYellow( )\n';
  return code;
};
Blockly.JavaScript['led_conti_purple'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponPurple( )\n';
  return code;
};
Blockly.JavaScript['led_conti_lightblue'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponLightblue( )\n';
  return code;
};
Blockly.JavaScript['led_conti_white'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponWhite( )\n';
  return code;
};
Blockly.JavaScript['led_conti_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'keeponOff( )\n';
  return code;
};

Blockly.JavaScript['backlight_time'] = function(block) {
  var para1 = block.getFieldValue('backlightlight');
  var para2 = block.getFieldValue('backlighttime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnBacklightOn:for:( ' + para1 + ' ' + para2 + ' )\n';
  return code;
};
Blockly.JavaScript['backlight_conti'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnBacklightConti ( )\n';
  return code;
};
Blockly.JavaScript['backlight_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnBacklightOff ( )\n';
  return code;
};

Blockly.JavaScript['timer'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerFor: ( ' + number_timertime + ' )\n';
  return code;
};
Blockly.JavaScript['timer_sound'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerSoundFor: ( ' + number_timertime + ' )\n';
  return code;
};
Blockly.JavaScript['timer_sw'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerSWFor: ( ' + number_timertime + ' )\n';
  return code;
};
Blockly.JavaScript['timer_light'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  var number_timerlight = block.getFieldValue('timerlight');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerLightFor:for: ( ' + number_timertime + ' ' + number_timerlight + ' )\n';
  return code;
};
Blockly.JavaScript['timer_dark'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  var number_timerlight = block.getFieldValue('timerlight');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerDarkFor:for: ( ' + number_timertime + ' ' + number_timerlight + ' )\n';
  return code;
};
Blockly.JavaScript['timer_temp'] = function(block) {
  var number_timertime = block.getFieldValue('timertime');
  var number_timertemp = block.getFieldValue('timertemp');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turnTimerTempFor:for: ( ' + number_timertime + ' ' + number_timertemp + ' )\n';
  return code;
};

Blockly.JavaScript['wait_sound'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitSound ( )\n';
  return code;
};
Blockly.JavaScript['wait_sw'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitSW ( )\n';
  return code;
};
Blockly.JavaScript['wait_light'] = function(block) {
  var para1 = block.getFieldValue('waitlight');
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitLight: ( ' + para1 + ' )\n';
  return code;
};
Blockly.JavaScript['wait_dark'] = function(block) {
  var para1 = block.getFieldValue('waitlight');
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitDark: ( ' + para1 + ' )\n';
  return code;
};
Blockly.JavaScript['wait_temp'] = function(block) {
  var para1 = block.getFieldValue('waitlight');
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitTemp: ( ' + para1 + ' )\n';
  return code;
};
Blockly.JavaScript['wait_signal'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitSignal ( )\n';
  return code;
};
Blockly.JavaScript['wait_alerm'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'waitAlerm ( )\n';
  return code;
};

Blockly.JavaScript['sound1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'playKakunin1 ( )\n';
  return code;
};
Blockly.JavaScript['sound2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'playKakunin2 ( )\n';
  return code;
};
Blockly.JavaScript['sound3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'playKakunin3 ( )\n';
  return code;
};
Blockly.JavaScript['soundplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'playSounddata ( )\n';
  return code;
};
Blockly.JavaScript['if_yes'] = function(block) {
  var value_if_jeken = Blockly.JavaScript.valueToCode(block, 'if_jeken', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_yes = Blockly.JavaScript.statementToCode(block, 'yes');
  // TODO: Assemble JavaScript into code variable.
  var code = 'doIf' + value_if_jeken + '\n' +statements_yes + 'endif1,\n';
  return code;
};
Blockly.JavaScript['if_else'] = function(block) {
  var value_if_jeken = Blockly.JavaScript.valueToCode(block, 'if_jeken', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_yes = Blockly.JavaScript.statementToCode(block, 'yes');
  var statements_no = Blockly.JavaScript.statementToCode(block, 'no');
  // TODO: Assemble JavaScript into code variable.
  var code = 'doIf' + value_if_jeken + '\n' + statements_yes + 'endif1, else {\n' + statements_no + 'endif2,\n';
  return code;
};
Blockly.JavaScript['loop'] = function(block) {
  var number_times = block.getFieldValue('times');
  var statements_loop_play = Blockly.JavaScript.statementToCode(block, 'loop_play');
  // TODO: Assemble JavaScript into code variable.
  var code = 'doRepeat ' + number_times + '\n' +statements_loop_play + 'endloop,\n';
  return code;
};
Blockly.JavaScript['outputSignal'] = function(block) {
  var code = 'outputSignal( )\n';
  return code;
};
Blockly.JavaScript['outputdc_time'] = function(block) {
  var para1 = block.getFieldValue('timepara');
  var code = 'outputdc_time: ( ' + para1 + ' )\n';
  return code;
};
Blockly.JavaScript['outputdc_cont'] = function(block) {
  var code = 'outputdc_cont( )\n';
  return code;
};
Blockly.JavaScript['outputdc_off'] = function(block) {
  var code = 'outputdc_off( )\n';
  return code;
};
Blockly.JavaScript['outputmame_time'] = function(block) {
  var para1 = block.getFieldValue('timepara');
  var code = 'outputmame_time: ( ' + para1 + ' )\n';
  return code;
};
Blockly.JavaScript['outputmame_cont'] = function(block) {
  var code = 'outputmame_cont( )\n';
  return code;
};
Blockly.JavaScript['outputmame_off'] = function(block) {
  var code = 'outputmame_off( )\n';
  return code;
};

Blockly.JavaScript['input_variable'] = function(block) {
  var code = 'input_variable( )\n';
  return code;
};
