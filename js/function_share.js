//共通データ作成
function create_share_list(){
	try{
		//文字プログラムに変換
		outputProData();

		//改行コードを\nに統一
		var text  = document.getElementById('proText').value.replace(/\r\n|\r/g, "\n");
		var lines = text.split( '\n' );
		var outArray = new Array();
		var if_mode = new Array();//ifがあった時、SWかcdsか温度かを保持
		var in_pro = false;//start命令でtrue 空白行でfalse
		for ( var i = 0; i < lines.length; i++ ) {
			lines[i] = lines[i].trim();	
			// 空行があれば終了
			if (in_pro == true){
			  if ( lines[i] == '' || i == lines.length - 1) {
				  outArray.push( "END\n"); 
				  break;
			  }
			}
			//start命令でフラグをたて分析開始
			if (in_pro == false){
				if (lines[i] == "start"){
					in_pro = true;				
				}
				else{
					continue;
				}
			}
			if (lines[i] == "start"){
				outArray.push( "START\n");        
			}
			else if (lines[i] == "end"){
				outArray.push( "END\n");
				break;
			}
			else if (lines[i].indexOf('turnOn') != -1){
				var paratime = strSplit(lines[i], 1, " "); 
				paratime = paratime / 0.25;
				if(lines[i].indexOf('Red') != -1){
					outArray.push( "2,0,255,0,0," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('Green') != -1){
					outArray.push( "2,0,0,255,0," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('Blue') != -1){
					outArray.push( "2,0,0,0,255," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('Yellow') != -1){
					outArray.push( "2,0,255,255,0," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('Purple') != -1){
					outArray.push( "2,0,255,0,255," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('Lightblue') != -1){
					outArray.push( "2,0,0,255,255," + paratime.toString() + ",0\n");
				}
				else if(lines[i].indexOf('White') != -1){
					outArray.push( "2,0,255,255,255," + paratime.toString() + ",0\n");
				}          
				else if(lines[i].indexOf('Off') != -1){
					outArray.push( "2,0,0,0,0," + paratime.toString() + ",0\n");
				}
			}
			else if (lines[i].indexOf('led_point') != -1){
				var coloedata = strSplit(lines[i], 1, " "); 
				var paratime = strSplit(lines[i], 2, " "); 
				paratime = paratime / 0.25;
				
				outArray.push("2,0," + parseInt(coloedata.substring(1,3), 16) + "," + parseInt(coloedata.substring(3,5), 16) + "," + parseInt(coloedata.substring(5,7), 16) + "," + paratime +",0\n");
			}
			else if (lines[i].indexOf('led_rgb') != -1){
				var c_r = strSplit(lines[i], 1, " "); 
				var c_g = strSplit(lines[i], 2, " "); 
				var c_b = strSplit(lines[i], 3, " "); 
				var paratime = strSplit(lines[i], 4, " ");
				paratime = paratime / 0.25;
				
				outArray.push("2,0," + c_r + "," + c_g + "," + c_b + "," + paratime +",0\n");
			}
			else if (lines[i].indexOf('turnFade') != -1){	
				var paraall = "";		
				var para = strSplit(lines[i], 1, " "); 
				if (para == "f_in"){ paraall = "2,1,"; }
				else{ paraall = "2,2,"; }

				if(lines[i].indexOf('Red') != -1){                
					paraall += "255,0,0,4,0\n";
				}
				else if(lines[i].indexOf('Green') != -1){                
					paraall += "0,255,0,4,0\n";                           
				}
				else if(lines[i].indexOf('Blue') != -1){                
					paraall += "0,0,255,4,0\n";     
				}
				else if(lines[i].indexOf('Yellow') != -1){                
					paraall += "255,255,0,4,0\n";    
				}
				else if(lines[i].indexOf('Purple') != -1){                
					paraall += "255,0,255,4,0\n";    
				}
				else if(lines[i].indexOf('Lightblue') != -1){                
					paraall += "0,255,255,4,0\n";    
				}
				else if(lines[i].indexOf('White') != -1){                
					paraall += "255,255,255,4,0\n";   
				}
				outArray.push( paraall );
			}
			else if (lines[i].indexOf('keepon') != -1){
				if(lines[i].indexOf('Off') != -1){
					outArray.push( "3,1,0,0,0,0,0\n");
				}
				else{
					if(lines[i].indexOf('Red') != -1){
						outArray.push( "3,0,0,0,0,0,0\n");   
					}
					else if(lines[i].indexOf('Green') != -1){
						outArray.push( "3,0,1,0,0,0,0\n"); 
					}
					else if(lines[i].indexOf('Blue') != -1){
						outArray.push( "3,0,2,0,0,0,0\n"); 
					}
					else if(lines[i].indexOf('Yellow') != -1){
						outArray.push( "3,0,3,0,0,0,0\n"); 
					}
					else if(lines[i].indexOf('Purple') != -1){
						outArray.push( "3,0,4,0,0,0,0\n"); 
					}
					else if(lines[i].indexOf('Lightblue') != -1){
						outArray.push( "3,0,5,0,0,0,0\n"); 
					}
					else if(lines[i].indexOf('White') != -1){
						outArray.push( "3,0,6,0,0,0,0\n"); 
					}
				}
			}
			else if (lines[i].indexOf('turnBacklight') != -1){
				if(lines[i].indexOf('On') != -1){
					var para1 = strSplit(lines[i], 1, " ");
					var para2 = strSplit(lines[i], 2, " ");
					para2 = para2 / 0.25;					
					outArray.push( "4,0," + para1 + "," + para2.toString() + ",0,0,0\n"); 
				}
				else if(lines[i].indexOf('Conti') != -1){
					outArray.push( "4,1,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Off') != -1){
					outArray.push( "4,2,0,0,0,0,0\n");
				}
			}
			else if (lines[i].indexOf('play') != -1){
				if(lines[i].indexOf('Kakunin1') != -1){
					outArray.push( "5,0,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Kakunin2') != -1){
					outArray.push( "5,1,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Kakunin3') != -1){
					outArray.push( "5,2,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Sounddata') != -1){
					outArray.push( "5,3,0,0,0,0,0\n");
				}
			}
			else if (lines[i].indexOf('output') != -1){
				if(lines[i].indexOf('outputSignal') != -1){
					outArray.push( "12,0,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputdc_time') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "12,1,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputdc_cont') != -1){
					outArray.push( "12,2,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputdc_off') != -1){
					outArray.push( "12,3,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputmame_time') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "12,4,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputmame_cont') != -1){
					outArray.push( "12,5,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('outputmame_off') != -1){
					outArray.push( "12,6,0,0,0,0,0\n");
				}			
			}
			else if (lines[i].indexOf('turnTimer') != -1){
				if(lines[i].indexOf('turnTimerFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "6,0,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('turnTimerSoundFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "6,1,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('turnTimerSWFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "6,2,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('turnTimerLightFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					var para2 = strSplit(lines[i], 3, " ");
					outArray.push( "6,3,"+ para1 + "," + para2 + ",0,0,0\n");
				}
				else if(lines[i].indexOf('turnTimerDarkFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					var para2 = strSplit(lines[i], 3, " ");
					outArray.push( "6,4,"+ para1 + "," + para2 + ",0,0,0\n");
				}
				else if(lines[i].indexOf('turnTimerTempFor') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					var para2 = strSplit(lines[i], 3, " ");
					outArray.push( "6,5,"+ para1 + "," + para2 + ",0,0,0\n");
				}
			}
			else if (lines[i].indexOf('wait') != -1){
				if(lines[i].indexOf('Sound') != -1){
					outArray.push( "7,0,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('SW') != -1){
					outArray.push( "7,1,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Light') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "7,2,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('Dark') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "7,3,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('Temp') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "7,4,"+ para1 +",0,0,0,0\n");
				}
				else if(lines[i].indexOf('Signal') != -1){
					outArray.push( "7,5,0,0,0,0,0\n");
				}
				else if(lines[i].indexOf('Alerm') != -1){
					outArray.push( "7,6,0,0,0,0,0\n");
				}
			}
			else if (lines[i].indexOf('input_variable') != -1){
					outArray.push( "11,0,0,0,0,0,0\n");
			}
			else if (lines[i].indexOf('doRepeat') != -1){
					var para1 = strSplit(lines[i], 1, " ");
					outArray.push( "9,0,"+ para1 +",0,0,0,0\n");
			}
			else if (lines[i].indexOf('endloop') != -1){
					outArray.push( "9,1,0,0,0,0,0\n");
			}
			else if (lines[i].indexOf('doIf') != -1){
				var para1 = strSplit(lines[i], 1, " ");	 
				if (para1 == "swon"){
					outArray.push( "8,0,0,0,0,0,0\n");
					if_mode.push("0");
				}
				else if (para1 == "swoff"){ 
					outArray.push( "8,1,0,0,0,0,0\n");
					if_mode.push("0");
				}
				else if (para1.indexOf('light>=') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "8,2,"+ para1 +",0,0,0,0\n");
					if_mode.push("1");
				}
				else if (para1.indexOf('light<') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "8,3,"+ para1 +",0,0,0,0\n");
					if_mode.push("1");
				}
				else if (para1.indexOf('temp>') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "8,4,"+ para1 +",0,0,0,0\n");
					if_mode.push("2");
				}
				else if (para1.indexOf('temp<') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "8,5,"+ para1 +",0,0,0,0\n");
					if_mode.push("2");
				}
				else if (para1.indexOf('temp=') != -1){
					var para1 = strSplit(lines[i], 2, " ");
					outArray.push( "8,6,"+ para1 +",0,0,0,0\n");
					if_mode.push("2");
				}
				else if (para1 == "hen>x"){ 
					outArray.push( "8,7,0,0,0,0,0\n");
					if_mode.push("2");
				}
				else if (para1 == "hen<x"){ 
					outArray.push( "8,8,0,0,0,0,0\n");
					if_mode.push("2");
				}
				else if (para1 == "hen=x"){ 
					outArray.push( "8,9,0,0,0,0,0\n");
					if_mode.push("2");
				}
				continue;
			}
			else if (lines[i].indexOf('else') != -1){
				if (if_mode[if_mode.length - 1] == "0"){					
					outArray.push( "20,0,0,0,0,0,0\n");
				}
				else if (if_mode[if_mode.length - 1] == "1"){		
					outArray.push( "20,1,0,0,0,0,0\n");
				}
				else {
					outArray.push( "20,2,0,0,0,0,0\n");	
				}
			}
			//elseのないendif
			else if (lines[i].indexOf('endif1') != -1){
				if (if_mode[if_mode.length - 1] == "0"){
					outArray.push( "20,0,0,0,0,0,0\n");
					outArray.push( "21,0,0,0,0,0,0\n");
				}
				else if (if_mode[if_mode.length - 1] == "1"){
					outArray.push( "20,1,0,0,0,0,0\n");
					outArray.push( "21,1,0,0,0,0,0\n");
				}
				else {
					outArray.push( "20,2,0,0,0,0,0\n");
					outArray.push( "21,2,0,0,0,0,0\n");
				}
				if_mode.pop();//最後の要素を削除
			}
			//elseのあるendif
			else if (lines[i].indexOf('endif2') != -1){
				if (if_mode[if_mode.length - 1] == "0"){
					outArray.push( "21,0,0,0,0,0,0\n");
				}
				else if (if_mode[if_mode.length - 1] == "1"){
					outArray.push( "21,1,0,0,0,0,0\n");
				}
				else {
					outArray.push( "21,2,0,0,0,0,0\n");			
				}
				if_mode.pop();//最後の要素を削除
			}
		}
		return outArray.join('');
	}
	catch(e){ return "";}
}

//共通データからプログラム作成
function sharelist_to_program(text){	
	try{
		//改行コードを\nに統一
		//var text  = document.getElementById('shareText').value.replace(/\r\n|\r/g, "\n");
		var lines = text.split( '\n' );
		//共通データでなかったら終了
		if (lines[0] != "START"){return;}
		if (!bool_procheck(lines)) {
			alert("プログラムが正しくないので読み込めません");
			return;
		}

		var all_list = new Array();
		all_list = get_if_level_pro(lines);

		var xml = Blockly.Xml.textToDom(all_list);
		workspace.clear();
		Blockly.Xml.domToWorkspace(xml, workspace);
	}
	catch(e){}
}
//読み込めるプログラムかどうかチェック
function bool_procheck(lines){
	for ( var i = 0; i < lines.length; i++ ) {
		var dataArray = lines[i].split(',');
		if (dataArray[0] == "2"){
			if (dataArray[2] != "0" && dataArray[2] != "255"){return false;}
			if (dataArray[3] != "0" && dataArray[3] != "255"){return false;}
			if (dataArray[4] != "0" && dataArray[4] != "255"){return false;}
		}
	}
	return true;
}
//共通データからプログラムを取得
function get_if_level_pro(sharelist){		
	var if_level = 0;
	var if_list = new Array();
	//if_levelだけを配列に格納
	for ( var i = 0; i < sharelist.length; i++ ) {
		var dataArray = sharelist[i].split(',');
		//条件分岐なら
		if (dataArray[0] == "8"){
			if_level ++;	
			if_list.push(if_level.toString());		
		}
		else if (dataArray[0] == "21"){
			if_list.push(if_level.toString());		
			if_level --;			
		}
		else {
			if_list.push(if_level.toString());		
		}
	}
		
	var loop_level = 0;
	var loop_list = new Array();
	//loop_levelだけを配列に格納
	for ( var i = 0; i < sharelist.length; i++ ) {
		var dataArray = sharelist[i].split(',');
		//繰り返しなら
		if (dataArray[0] == "9"){
			if (dataArray[1] == "0"){
				loop_level ++;	
				loop_list.push(loop_level.toString());
			}
			else {
				loop_list.push(loop_level.toString());		
				loop_level --;		
			}					
		}
		else {
			loop_list.push(loop_level.toString());		
		}
	}
	
	var all_st = new Array();
	var start_pos = 0;//検索開始の番地
	var end_pos = sharelist.length - 1;//検索終了の番地
	var boolif = false;
	var boolloop = false;
	//startposからendposまでの共通データを１つの文字列（/区切り）として取得
	all_st = get_block_st(start_pos, end_pos, sharelist, if_list, loop_list);
	while(true){
		boolif = false;
		boolloop = false;
		//全体でifがあるかどうか
		for ( var i = 0; i < all_st.length; i++ ) {
			if (all_st[i].indexOf('if-') != -1){
				boolif = true;
				break;
			}
		}
		//全体でloopがあるかどうか
		for ( var i = 0; i < all_st.length; i++ ) {
			if (all_st[i].indexOf('loop-') != -1){
				boolloop = true;
				break;
			}
		}
		//条件分岐か繰り返しがあれば
		if (boolif || boolloop ){
			//all_stを配列に入れる
			for ( var i = 0; i < all_st.length; i++ ) {
				//if-があれば
				if (all_st[i].indexOf('if-') != -1){
					var sepaif = all_st[i].split('-');
					start_pos = Number(sepaif[1]);
					end_pos = Number(sepaif[2]);
					var if_parts_st = get_block_st(start_pos, end_pos, sharelist, if_list, loop_list);
					//挿入する場所が<statement name="yes">もしくは<statement name="no">なら<next></next>を削除する
					if (all_st[i-1].indexOf('statement') != -1){
						if_parts_st.pop();
						if_parts_st.shift();
					}
					Array.prototype.splice.apply(all_st,[i,1].concat(if_parts_st));
					break;
				}
				//loop-があれば
				if (all_st[i].indexOf('loop-') != -1){
					var sepaloop = all_st[i].split('-');
					start_pos = Number(sepaloop[1]);
					end_pos = Number(sepaloop[2]);
					var loop_parts_st = get_block_st(start_pos, end_pos, sharelist, if_list, loop_list);
					//挿入する場所が<statement name="yes">もしくは<statement name="no">なら<next></next>を削除する
					if (all_st[i-1].indexOf('statement') != -1){
						loop_parts_st.pop();
						loop_parts_st.shift();
					}
					Array.prototype.splice.apply(all_st,[i,1].concat(loop_parts_st));
					break;
				}
			}
		}
		//なければwhileを抜ける
		else{
			return all_st;
		}
	}	
}

//startposからendposまでの共通データを１つの文字列（/区切り）として取得
function get_block_st(startpos,endpos,sharelist,iflist,looplist){
	var firstHalf_st = new Array();
	var latterHalf_st = new Array();
	var if_start_pos = 0;//ifレベルが上がる時の番地
	var if_end_pos = 0;//ifレベルが下がる時の番地
	var bool_if = false;//ifレベルが上がったらtrueにしてその間スルーする
	var iflevel = iflist[startpos];//ifレベルが上がった時のifレベル
	var bool_if_block = false; //ifのブロックの中かどうか
	
	var bool_loop = false;//loopレベルが上がったらtrueにしてその間スルーする
	var looplevel = looplist[startpos];//loopレベルが上がった時のloopレベル
	var pool_st = new Array(); //ifのブロック中の時に一時的に保持
	for ( var i = 0; i < sharelist.length; i++ ) {
		if (i < startpos || i > endpos){continue;}
		if (sharelist[i] == ""){continue;} 
		var dataArray = sharelist[i].split(',');
		if (dataArray[0] == "START"){			
			firstHalf_st.push("<xml xmlns=\"https://developers.google.com/blockly/xml\">");
			firstHalf_st.push("<block type=\"start\" id=\"Vptq%=$iB60DTun6X-nD\" x=\"61\" y=\"21\">");
			
			latterHalf_st.unshift("</xml>");
			latterHalf_st.unshift("</block>");
		}
		else if (dataArray[0] == "END"){
			//firstHalf_st.push("");
			//latterHalf_st.push("");			
		}
		//条件分岐なら
		else if (dataArray[0] == "8"){
			if (bool_if == true || bool_loop == true){ continue; }
			if (Number(iflevel) + 1 == Number(iflist[i])){
				if_start_pos= i;
				if_end_pos = get_if_end_add(i, iflist);
				if (if_end_pos ==-1){return;}
				if_add_st = "if-" + if_start_pos.toString() + "-" + if_end_pos.toString();
				bool_if = true;
				//iflevel = iflist[i];
			}
			else{
				//最後の要素がif-○-○なら削除
				if (firstHalf_st.length != 0 && firstHalf_st[firstHalf_st.length - 1].indexOf('if-') != -1){
					firstHalf_st.pop();
				}
				//直後なら
				if (firstHalf_st.length == 0){
					firstHalf_st.push("<next>");
					latterHalf_st.unshift("</next>");				
				}
				else {
					//最後の要素がblockならnextを付加
					if (firstHalf_st.length != 0 && firstHalf_st[firstHalf_st.length - 1].indexOf('block') != -1){
						firstHalf_st.push("<next>");
						latterHalf_st.unshift("</next>");
					}
				}
				//endifの直前がelseなら
				if (sharelist[endpos].indexOf('21,') != -1 && sharelist[endpos - 1].indexOf('20,') != -1){
					firstHalf_st.push("<block type=\"if_yes\" id=\"T?:H`h`iAtEC^*pg^le*\">");
				}
				else {
					firstHalf_st.push("<block type=\"if_else\" id=\"T?:H`h`iAtEC^*pg^le*\">");
				}
				
				firstHalf_st.push("<value name=\"if_jeken\">");
				firstHalf_st.push(get_block(sharelist[i]));
				firstHalf_st.push("<statement name=\"yes\">");
				bool_if_block = true;
				
				latterHalf_st.unshift("</block>");
				latterHalf_st.unshift("</statement>");
			}
		}
		//else
		else if (dataArray[0] == "20"){
			if (bool_if == true || bool_loop == true){ continue; }
			//ifブロック中なら
			if (bool_if_block) {
				firstHalf_st = firstHalf_st.concat(pool_st);
				pool_st.length = 0;
			}
			
			if (sharelist[i + 1].indexOf('21,') == -1){
				firstHalf_st.push("</statement>");
				firstHalf_st.push("<statement name=\"no\">");
			}
		}
		//if end
		else if (dataArray[0] == "21"){
			//繰り返しブロック中ならスルー
			if (bool_loop == true){ continue; }
			if (Number(iflevel) + 1 == Number(iflist[i])){
				firstHalf_st.push(if_add_st);
				bool_if = false;				
			}
			else if (iflevel == iflist[i]){
			}
			//ifブロック中なら
			if (bool_if_block) {
				firstHalf_st = firstHalf_st.concat(pool_st);
				pool_st.length = 0;
			}
		}
		//繰り返し
		else if (dataArray[0] == "9"){
			if (dataArray[1] == "0"){
				if (bool_if == true || bool_loop == true){ continue; }
				if (Number(looplevel) + 1 == Number(looplist[i])){
					loop_start_pos= i;
					loop_end_pos = get_loop_end_add(i, looplist);
					if (loop_end_pos ==-1){return;}
					loop_add_st = "loop-" + loop_start_pos.toString() + "-" + loop_end_pos.toString();
					bool_loop = true;
				}
				else{
					//最後の要素がloop-○-○なら削除
					if (firstHalf_st.length != 0 && firstHalf_st[firstHalf_st.length - 1].indexOf('loop-') != -1){
						firstHalf_st.pop();
					}
					//直後なら
					if (firstHalf_st.length == 0){
						firstHalf_st.push("<next>");
						latterHalf_st.unshift("</next>");				
					}
					else {
						//最後の要素がblockならnextを付加
						if (firstHalf_st.length != 0 && firstHalf_st[firstHalf_st.length - 1].indexOf('block') != -1){
							firstHalf_st.push("<next>");
							latterHalf_st.unshift("</next>");
						}
					}
					firstHalf_st.push(get_block(sharelist[i]));
					firstHalf_st.push("<statement name=\"loop_play\">");

					latterHalf_st.unshift("</block>");
					latterHalf_st.unshift("</statement>");
				}
			}
			else {
				if (bool_if == true){ continue; }
				if (Number(looplevel) + 1 == Number(looplist[i])){
					firstHalf_st.push(loop_add_st);
					bool_loop = false;
				}
			}
		}
		else {
			if (bool_if == true || bool_loop == true){ continue; }
			//直後なら
			if (firstHalf_st.length == 0){
				firstHalf_st.push("<next>");
				latterHalf_st.unshift("</next>");				
			}
			else {
				//最後の要素がblockならnextを付加
				if (firstHalf_st.length != 0 && firstHalf_st[firstHalf_st.length - 1].indexOf('block') != -1){
					firstHalf_st.push("<next>");
					latterHalf_st.unshift("</next>");
				}
			}
			
			firstHalf_st.push(get_block(sharelist[i]));
			//ifブロック中でないなら
			if (!bool_if_block) {
				latterHalf_st.unshift("</block>");
			}
			//ifブロック中なら
			else {
				pool_st.unshift("</block>");
			}
		}		
	}
	
	return firstHalf_st.concat(latterHalf_st);
}
//startpos以降で同じifレベルになる番地取得(成功すれば番地、失敗すれば-1を返す)
function get_if_end_add(startpos, iflist){
	//基盤となるifレベル
	var level = iflist[startpos - 1];
	for ( var i = startpos; i < iflist.length; i++ ) {
		if (iflist[i] == level){
			return i - 1;
		}		
	}
	return -1;
}
//startpos以降で同じloopレベルになる番地取得(成功すれば番地、失敗すれば-1を返す)
function get_loop_end_add(startpos, looplist){
	//基盤となるifレベル
	var level = looplist[startpos - 1];
	for ( var i = startpos; i < looplist.length; i++ ) {
		if (looplist[i] == level){
			return i - 1;
		}		
	}
	return -1;
}
//2,0,255,255,255,1,0からブロックを取得　変換できない場合は-1を返す
function get_block(data){
	var dataArray = data.split(',');
	if (dataArray[0] == "2") {//LED
		if (dataArray[1] == "0"){
			var ledtime = Number(dataArray[5]) * 0.25;
			if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "0") {return "<block type=\"led_red\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"led_green\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"led_blue\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"led_yellow\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"led_purple\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"led_lightblue\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"led_white\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"led_off\" id=\"Wk)U[1^_C~M{y=lOoD3g\"><field name=\"ledtime\">" + ledtime.toString() + "</field>";}
			else {return "-1";}
		}
		else if (dataArray[1] == "1"){
			if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "0") {return "<block type=\"fade_red\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"fade_green\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"fade_blue\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"fade_yellow\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"fade_purple\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"fade_lightblue\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"fade_white\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_in</field>";}
			else {return "-1";}
		}
		else if (dataArray[1] == "2"){
			if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "0") {return "<block type=\"fade_red\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"fade_green\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"fade_blue\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "0") {return "<block type=\"fade_yellow\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "0" && dataArray[4] == "255") {return "<block type=\"fade_purple\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "0" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"fade_lightblue\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else if (dataArray[2] == "255" && dataArray[3] == "255" && dataArray[4] == "255") {return "<block type=\"fade_white\" id=\"N$PnW)RYppic=x/*j2w!\"><field name=\"fade\">f_out</field>";}
			else {return "-1";}
		}
	}
	else if (dataArray[0] == "3") {//連続
		if (dataArray[1] == "0"){
			if (dataArray[2] == "0"){
				return "<block type=\"led_conti_red\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else if (dataArray[2] == "1"){
				return "<block type=\"led_conti_green\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else if (dataArray[2] == "2"){
				return "<block type=\"led_conti_blue\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else if (dataArray[2] == "3"){
				return "<block type=\"led_conti_yellow\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else if (dataArray[2] == "4"){
				return "<block type=\"led_conti_purple\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else if (dataArray[2] == "5"){
				return "<block type=\"led_conti_lightblue\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
			else {
				return "<block type=\"led_conti_white\" id=\"sO~Rz$m%I(eyt(1~L%]V\">";
			}
		}
		else{
			return "<block type=\"led_conti_off\" id=\"6{v0J;}Ig`oa^qrI#w20\">";
		}
	}
	else if (dataArray[0] == "4") {//バックライト
		if (dataArray[1] == "0"){
			return "<block type=\"backlight_time\" id=\"xS{+JcvD`pVvT;^]VkSt\"><field name=\"backlightlight\">" + dataArray[2] + "</field><field name=\"backlighttime\">" + (Number(dataArray[3]) * 0.25).toString() + "</field>";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"backlight_conti\" id=\"yIsy=-WLgy:5xsF1fUj/\">";
		}
		else {
			return "<block type=\"backlight_off\" id=\"10U9+g]-t9)42hWw=$qG\">";
		}
	}
	else if (dataArray[0] == "5") {//サウンド		
		if (dataArray[1] == "0"){
			return "<block type=\"sound1\" id=\"2a%]d51C.]OaPY:q|I_]\">";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"sound2\" id=\"2a%]d51C.]OaPY:q|I_]\">";
		}
		else if (dataArray[1] == "2"){
			return "<block type=\"sound3\" id=\"2a%]d51C.]OaPY:q|I_]\">";
		}
		else {
			return "<block type=\"soundplay\" id=\"Tsf#L#ysep:VM=5UbR1X\">";
		}
	}
	else if (dataArray[0] == "6") {//タイマー	
		if (dataArray[1] == "0"){
			return "<block type=\"timer\" id=\"f6u+RKk*-8%~+T9kX6|S\"><field name=\"timertime\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"timer_sound\" id=\"Dy?kTV|S8NDhclTMK5IV\"><field name=\"timertime\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "2"){
			return "<block type=\"timer_sw\" id=\"gb{SvT.(dSrAOzNVB7[@\"><field name=\"timertime\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "3"){
			return "<block type=\"timer_light\" id=\"_}D8G~CSQQ[IkVEezZLo\"><field name=\"timertime\">" + dataArray[2] + "</field><field name=\"timerlight\">" + dataArray[3] + "</field>";
		}
		else if (dataArray[1] == "4"){
			return "<block type=\"timer_dark\" id=\"ol|:W~-ydWU}8kvO#g#T\"><field name=\"timertime\">" + dataArray[2] + "</field><field name=\"timerlight\">" + dataArray[3] + "</field>";
		}
		else {
			return "<block type=\"timer_temp\" id=\"J}[?XmICNgy8;LDkhq@|\"><field name=\"timertime\">" + dataArray[2] + "</field><field name=\"timertemp\">" + dataArray[3] + "</field>";
		}
	}
	else if (dataArray[0] == "7") {//信号待ち
		if (dataArray[1] == "0"){
			return "<block type=\"wait_sound\" id=\"x{jRR7Z*E!^a+`GmbaR=\">";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"wait_sw\" id=\"=.*gSlvC9a_EQl.JzZ[H\">";
		}
		else if (dataArray[1] == "2"){
			return "<block type=\"wait_light\" id=\"[uCj6Tp1Z:+;sk_1LD+n\"><field name=\"waitlight\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "3"){
			return "<block type=\"wait_dark\" id=\"kI$Fv|mGJ|QI3)9X5a.%\"><field name=\"waitlight\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "4"){
			return "<block type=\"wait_temp\" id=\"~,j|4OiN=CsENpPq`U%{\"><field name=\"waitlight\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "5"){
			return "<block type=\"wait_signal\" id=\"XIp6]jbohmV;ZcHz6pr;\">";
		}
		else {
			return "<block type=\"wait_alerm\" id=\"|qhhA@_xxr-#ng8k5V67\">";
		}
	}
	else if (dataArray[0] == "8") {
		if (dataArray[1] == "0") {//SW=ON
			return "<block type=\"if_block_swon\" id=\"x_t6,DxI[mh5r7|fIcTB\"></block></value>";
		}
		else if (dataArray[1] == "1") {//SW=OFF
			return "<block type=\"if_block_swoff\" id=\"x_t6,DxI[mh5r7|fIcTB\"></block></value>";
		}
		else if (dataArray[1] == "2") {//明るく
			return "<block type=\"if_block_light\" id=\"V]jPCbVw%sc.6RB8/gcg\"><field name=\"if_light\">" + dataArray[2] + "</field></block></value>";
		}
		else if (dataArray[1] == "3") {//暗く
			return "<block type=\"if_block_dark\" id=\"V]jPCbVw%sc.6RB8/gcg\"><field name=\"if_light\">" + dataArray[2] + "</field></block></value>";
		}
		else if (dataArray[1] == "4") {//温度以上
			return "<block type=\"if_block_tempup\" id=\"5hqfWkFNpw59w2]~_uK%\"><field name=\"if_light\">" + dataArray[2] + "</field></block></value>";
		}
		else if (dataArray[1] == "5") {//温度以下
			return "<block type=\"if_block_tempdown\" id=\"5hqfWkFNpw59w2]~_uK%\"><field name=\"if_light\">" + dataArray[2] + "</field></block></value>";
		}
		else if (dataArray[1] == "6") {//温度同じ
			return "<block type=\"if_block_tempeq\" id=\"zM?N4:CS.p-mWcWeWHf}\"><field name=\"if_light\">" + dataArray[2] + "</field></block></value>";
		}
		else if (dataArray[1] == "7") {//変数より高い
			return "<block type=\"if_block_henup\" id=\"ie4B.beTLBFez`6}v6+x\"></block></value>";
		}
		else if (dataArray[1] == "8") {//変数より低い
			return "<block type=\"if_block_hendown\" id=\"ie4B.beTLBFez`6}v6+x\"></block></value>";
		}
		else if (dataArray[1] == "9") {//変数より同じ
			return "<block type=\"if_block_heneq\" id=\"ie4B.beTLBFez`6}v6+x\"></block></value>";
		}
	}
	else if (dataArray[0] == "9") {//繰り返し
		if (dataArray[1] == "0"){
			return "<block type=\"loop\" id=\"4#mk$0%3QN(E!]OB;,.i\"><field name=\"times\">" + dataArray[2] + "</field>";
		}
	}
	else if (dataArray[0] == "11") {//変数
		return "<block type=\"input_variable\" id=\"=K~OG#jXvb0`fj%82loE\">";
	}
	else if (dataArray[0] == "12") {//信号出力
		if (dataArray[1] == "0"){
			return "<block type=\"outputSignal\" id=\"Yve}D?Bb{$3290vaDgmu\">";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"outputdc_time\" id=\"KnT9w+jJ3#RnBYS}/A8X\"><field name=\"timepara\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "2"){
			return "<block type=\"outputdc_cont\" id=\"wg}dmFOK17|TA,_nY1MA\">";
		}
		else if (dataArray[1] == "3"){
			return "<block type=\"outputdc_off\" id=\"5X_!Dx5eBWe4Ym*j$5wC\">";
		}
		else if (dataArray[1] == "4"){
			return "<block type=\"outputmame_time\" id=\"Ry2?u~H7R,#*O=gzziCh\"><field name=\"timepara\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "5"){
			return "<block type=\"outputmame_cont\" id=\"+0Nh6lxCV`WN9DfTLiO8\">";
		}
		else {
			return "<block type=\"outputmame_off\" id=\"W,/%YUxfAY7maaEv~V{2\">";
		}
	}
	else if (dataArray[0] == "14") {//目
		if (dataArray[1] == "0"){
			return "<block type=\"ledeyeleft_time\" id=\"$KD80-|QJvP$,c:Z+JIV\"><field name=\"timepara\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "1"){
			return "<block type=\"ledeyeleft_conti\" id=\"uUX|b@=hPP.mLnkR}=5O\">";
		}
		else if (dataArray[1] == "2"){
			return "<block type=\"ledeyeleft_off\" id=\"{RbMacD*~MO0~VZ#Q)Xt\">";
		}
		else if (dataArray[1] == "3"){
			return "<block type=\"ledeyeright_time\" id=\"]Lk;{Zyf[C]61G8`#-U(\"><field name=\"timepara\">" + dataArray[2] + "</field>";
		}
		else if (dataArray[1] == "4"){
			return "<block type=\"ledeyeright_conti\" id=\"1YSFLMm=:v?#-}wy$*hS\">";
		}
		else {
			return "<block type=\"ledeyeright_off\" id=\"J~X%|~+BxED~R3K!!Gc;\">";
		}
	}
	else {
		return "-1";
	}
}