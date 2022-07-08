//デモ読み込み
function read_demo(no){
	var xml = Blockly.Xml.textToDom(get_demo_st(no));
	workspace.clear();
	Blockly.Xml.domToWorkspace(xml, workspace);
}
function get_demo_st(no){
	if (no == 1){return "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start\" id=\"1+%1yJ7o(LaHb24xS#ur\" x=\"16\" y=\"10\"><next><block type=\"led_red\" id=\"}PsHWP.}aQMFhCGO9TnH\"><field name=\"ledtime\">1</field><next><block type=\"led_green\" id=\"z/:H%|_k21ta7`]yy.*[\"><field name=\"ledtime\">1</field><next><block type=\"led_blue\" id=\"qAl9F+*?GY5DC8,oGn{F\"><field name=\"ledtime\">1</field></block></next></block></next></block></next></block></xml>";}
	else if (no == 2){return "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start\" id=\"1+%1yJ7o(LaHb24xS#ur\" x=\"16\" y=\"10\"><next><block type=\"wait_sound\" id=\"!,dZ[PH*FCE[o8z7rqz.\"><next><block type=\"led_red\" id=\"}PsHWP.}aQMFhCGO9TnH\"><field name=\"ledtime\">1</field><next><block type=\"led_green\" id=\"z/:H%|_k21ta7`]yy.*[\"><field name=\"ledtime\">1</field><next><block type=\"led_blue\" id=\"qAl9F+*?GY5DC8,oGn{F\"><field name=\"ledtime\">1</field><next><block type=\"sound1\" id=\"DH9(VG$cr?.@s#dZnS,{\"></block></next></block></next></block></next></block></next></block></next></block></xml>";}
	else if (no == 3){return "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start\" id=\"1+%1yJ7o(LaHb24xS#ur\" x=\"16\" y=\"10\"><next><block type=\"loop\" id=\"?m%$sze,+OO;kc_[3$|-\"><field name=\"times\">3</field><statement name=\"loop_play\"><block type=\"led_red\" id=\"}PsHWP.}aQMFhCGO9TnH\"><field name=\"ledtime\">1</field><next><block type=\"led_green\" id=\"z/:H%|_k21ta7`]yy.*[\"><field name=\"ledtime\">1</field><next><block type=\"led_blue\" id=\"qAl9F+*?GY5DC8,oGn{F\"><field name=\"ledtime\">1</field></block></next></block></next></block></statement></block></next></block></xml>";}
	else if (no == 4){return "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start\" id=\"1+%1yJ7o(LaHb24xS#ur\" x=\"16\" y=\"10\"><next><block type=\"if_else\" id=\")RoV+H.pbR7u(?:83PTY\"><value name=\"if_jeken\"><block type=\"if_block_light\" id=\"P2ngMBSGP$s}1nSjHRH?\"><field name=\"if_light\">50</field></block></value><statement name=\"yes\"><block type=\"led_red\" id=\"}PsHWP.}aQMFhCGO9TnH\"><field name=\"ledtime\">1</field></block></statement><statement name=\"no\"><block type=\"led_green\" id=\"z/:H%|_k21ta7`]yy.*[\"><field name=\"ledtime\">1</field></block></statement></block></next></block></xml>";}
	else if (no == 5){return "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"start\" id=\"1+%1yJ7o(LaHb24xS#ur\" x=\"16\" y=\"10\"><next><block type=\"wait_sw\" id=\"%x2_UL=ejc#zmN3;`Dwz\"><next><block type=\"led_red\" id=\"}PsHWP.}aQMFhCGO9TnH\"><field name=\"ledtime\">1</field><next><block type=\"backlight_time\" id=\"^l/ya{@J1A!LQw7c0Pky\"><field name=\"backlightlight\">100</field><field name=\"backlighttime\">1</field><next><block type=\"wait_sound\" id=\"Ad`_{5[^:-.Icz!^~eH*\"><next><block type=\"led_green\" id=\"z/:H%|_k21ta7`]yy.*[\"><field name=\"ledtime\">1</field><next><block type=\"wait_dark\" id=\"wky.g;5At9Fow3msMscu\"><field name=\"waitlight\">50</field><next><block type=\"led_blue\" id=\"qAl9F+*?GY5DC8,oGn{F\"><field name=\"ledtime\">1</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>";}
}