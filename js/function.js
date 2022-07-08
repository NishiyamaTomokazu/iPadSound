//プログラム出力（textarea1へ）
function outputProData() {
	Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
	let code = Blockly.JavaScript.workspaceToCode(workspace);
	document.form2.textarea1.value=code;
}
//転送データ出力（textarea2へ）
function changeSendData() {
    document.form3.textarea2.value=getSenddata();    
}
//転送データに変換
function getSenddata(){
	try{
    //改行コードを\nに統一
    var text  = document.getElementById('proText').value.replace(/\r\n|\r/g, "\n");
    var lines = text.split( '\n' );
    var if_list = new Array();//ifレベルを保持
    var com_head_address = new Array();//各コマンドのアドレスを保持		
    var outArray = new Array();
	var in_pro = false;//start命令でtrue 空白行でfalse		
	
    var LevelCount = 0;
	//ifレベルだけを保持
    for ( var i = 0; i < lines.length; i++ ) {
		if (lines[i].indexOf('doIf') != -1){
			LevelCount++;
		}
		else if (lines[i].indexOf('else') != -1){
            LevelCount++; 
		}
		else if (lines[i].indexOf('endif') != -1){
			LevelCount -= 2;
		}
		if_list.push(LevelCount.toString());
	}
	
	//各コマンドの開始アドレスを保持
	com_head_address = get_head_address(lines);
		
    for ( var i = 0; i < lines.length; i++ ) {
        lines[i] = lines[i].trim();	
        // 空行があれば終了
        if (in_pro == true){
		  if ( lines[i] == '' || i == lines.length - 1) {
              outArray.push( "231\n"); 
              //outArray.push( "250\n");  
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
            outArray.push( "230\n");
        }
        else if (lines[i] == "end"){
            outArray.push( "231\n"); 
            //outArray.push( "250\n");  
            break;
        }
        else if (lines[i].indexOf('turnOn') != -1){
            var paraall = "";
            var paratime = strSplit(lines[i], 1, " "); 
            paratime = paratime / 0.25;
            if(lines[i].indexOf('Red') != -1){                
                paraall = get_colordata("Red") + paratime;
            }
            else if(lines[i].indexOf('Green') != -1){                
                paraall = get_colordata("Green") + paratime;                            
            }
            else if(lines[i].indexOf('Blue') != -1){                
                paraall = get_colordata("Blue") + paratime;     
            }
            else if(lines[i].indexOf('Yellow') != -1){                
                paraall = get_colordata("Yellow") + paratime;     
            }
            else if(lines[i].indexOf('Purple') != -1){                
                paraall = get_colordata("Purple") + paratime;     
            }
            else if(lines[i].indexOf('Lightblue') != -1){                
                paraall = get_colordata("LighrBlue") + paratime;     
            }
            else if(lines[i].indexOf('White') != -1){                
                paraall = get_colordata("White") + paratime;     
            }          
            else if(lines[i].indexOf('Off') != -1){                
                paraall = get_colordata("Off") + paratime;     
            }                      
            var B_Data = Change_4Byte(paraall); 
            B_Data = B_Data.replace(",","");
            for ( var j = 0; j < 4; j++ ) {
                var byteSt = B_Data.substr(j * 8, 8);
                var jusin = parseInt(byteSt, 2);                    
                outArray.push( jusin + "\n");
				//console.log(jusin);
            }
        }
        else if (lines[i].indexOf('led_point') != -1){
			var coloedata = strSplit(lines[i], 1, " "); 
            var paratime = strSplit(lines[i], 2, " "); 
            paratime = paratime / 0.25;
			
			paraall = parseInt(coloedata.substring(1,3), 16) + " " + parseInt(coloedata.substring(3,5), 16) + " " + parseInt(coloedata.substring(5,7), 16) + " " + paratime;
            var B_Data = Change_4Byte(paraall); 
            B_Data = B_Data.replace(",","");
            for ( var j = 0; j < 4; j++ ) {
                var byteSt = B_Data.substr(j * 8, 8);
                var jusin = parseInt(byteSt, 2);                    
                outArray.push( jusin + "\n");
            }
		}
        else if (lines[i].indexOf('led_rgb') != -1){
			var c_r = strSplit(lines[i], 1, " "); 
			var c_g = strSplit(lines[i], 2, " "); 
			var c_b = strSplit(lines[i], 3, " "); 
            var paratime = strSplit(lines[i], 4, " ");
            paratime = paratime / 0.25;
			
			paraall = c_r + " " + c_g + " " + c_b + " " + paratime;
            var B_Data = Change_4Byte(paraall); 
            B_Data = B_Data.replace(",","");
            for ( var j = 0; j < 4; j++ ) {
                var byteSt = B_Data.substr(j * 8, 8);
                var jusin = parseInt(byteSt, 2);                    
                outArray.push( jusin + "\n");
            }
		}
        else if (lines[i].indexOf('turnFade') != -1){			
            var para = strSplit(lines[i], 1, " "); 
			if (para == "f_in"){outArray.push( "131\n"); }
			else{{outArray.push( "132\n"); }}
			
			if(lines[i].indexOf('Red') != -1){                
                paraall = get_colordata("Red") + "4";
            }
            else if(lines[i].indexOf('Green') != -1){                
                paraall = get_colordata("Green") + "4";                            
            }
            else if(lines[i].indexOf('Blue') != -1){                
                paraall = get_colordata("Blue") + "4";     
            }
            else if(lines[i].indexOf('Yellow') != -1){                
                paraall = get_colordata("Yellow") + "4";     
            }
            else if(lines[i].indexOf('Purple') != -1){                
                paraall = get_colordata("Purple") + "4";     
            }
            else if(lines[i].indexOf('Lightblue') != -1){                
                paraall = get_colordata("LighrBlue") + "4";     
            }
            else if(lines[i].indexOf('White') != -1){                
                paraall = get_colordata("White") + "4";     
            }
            var B_Data = Change_3Byte(paraall); 
            B_Data = B_Data.replace(",","");
            for ( var j = 0; j < 3; j++ ) {
                var byteSt = B_Data.substr(j * 8, 8);
                var jusin = parseInt(byteSt, 2);                    
                outArray.push( jusin + "\n");
				//console.log(jusin);
            }
		}
        else if (lines[i].indexOf('keepon') != -1){
            if(lines[i].indexOf('Off') != -1){
                outArray.push( "136\n");    
            }
            else{
                outArray.push( "135\n");
                if(lines[i].indexOf('Red') != -1){
                    outArray.push( "0\n");            
                }
                else if(lines[i].indexOf('Green') != -1){
                    outArray.push( "1\n");            
                }
                else if(lines[i].indexOf('Blue') != -1){
                    outArray.push( "2\n");            
                }
                else if(lines[i].indexOf('Yellow') != -1){
                    outArray.push( "3\n");            
                }
                else if(lines[i].indexOf('Purple') != -1){
                    outArray.push( "4\n");            
                }
                else if(lines[i].indexOf('Lightblue') != -1){
                    outArray.push( "5\n");            
                }
                else if(lines[i].indexOf('White') != -1){
                    outArray.push( "6\n");            
                }
            }
        }
        else if (lines[i].indexOf('turnBacklight') != -1){
            if(lines[i].indexOf('On') != -1){
                outArray.push( "140\n");
                var para1 = strSplit(lines[i], 1, " ");
                outArray.push( para1 + "\n"); 
                var para2 = strSplit(lines[i], 2, " ");
				para2 = para2 / 0.25;
                outArray.push( para2 + "\n"); 
            }
            else if(lines[i].indexOf('Conti') != -1){
                outArray.push( "141\n");
            }
            else if(lines[i].indexOf('Off') != -1){
                outArray.push( "142\n");
            }
        }
        else if (lines[i].indexOf('play') != -1){
            if(lines[i].indexOf('Kakunin1') != -1){
                outArray.push( "150\n");
            }
            else if(lines[i].indexOf('Kakunin2') != -1){
                outArray.push( "151\n");
            }
            else if(lines[i].indexOf('Kakunin3') != -1){
                outArray.push( "152\n");
            }
            else if(lines[i].indexOf('Sounddata') != -1){
                outArray.push( "153\n");
            }
        }
        else if (lines[i].indexOf('output') != -1){
            if(lines[i].indexOf('outputSignal') != -1){
                outArray.push( "210\n");
            }
            else if(lines[i].indexOf('outputdc_time') != -1){
                outArray.push( "211\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n");
            }
            else if(lines[i].indexOf('outputdc_cont') != -1){
                outArray.push( "212\n");
            }
            else if(lines[i].indexOf('outputdc_off') != -1){
                outArray.push( "213\n");
            }
            else if(lines[i].indexOf('outputmame_time') != -1){
                outArray.push( "214\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n");
            }
            else if(lines[i].indexOf('outputmame_cont') != -1){
                outArray.push( "215\n");
            }
            else if(lines[i].indexOf('outputmame_off') != -1){
                outArray.push( "216\n");
            }			
        }
        else if (lines[i].indexOf('turnTimer') != -1){
            if(lines[i].indexOf('turnTimerFor') != -1){
                outArray.push( "160\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n");
            }
            else if(lines[i].indexOf('turnTimerSoundFor') != -1){
                outArray.push( "161\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n");
            }
            else if(lines[i].indexOf('turnTimerSWFor') != -1){
                outArray.push( "162\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n");
            }
            else if(lines[i].indexOf('turnTimerLightFor') != -1){
                outArray.push( "163\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
                var para2 = strSplit(lines[i], 3, " ");
                outArray.push( para2 + "\n");
            }
            else if(lines[i].indexOf('turnTimerDarkFor') != -1){
                outArray.push( "164\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
                var para2 = strSplit(lines[i], 3, " ");
                outArray.push( para2 + "\n");
            }
            else if(lines[i].indexOf('turnTimerTempFor') != -1){
                outArray.push( "165\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
                var para2 = strSplit(lines[i], 3, " ");
                outArray.push( para2 + "\n");
            }
        }
        else if (lines[i].indexOf('wait') != -1){
            if(lines[i].indexOf('Sound') != -1){
                outArray.push( "170\n");
            }
            else if(lines[i].indexOf('SW') != -1){
                outArray.push( "171\n");
            }
            else if(lines[i].indexOf('Light') != -1){
                outArray.push( "177\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
            }
            else if(lines[i].indexOf('Dark') != -1){
                outArray.push( "178\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
            }
            else if(lines[i].indexOf('Temp') != -1){
                outArray.push( "174\n");
                var para1 = strSplit(lines[i], 2, " ");
                outArray.push( para1 + "\n"); 
            }
            else if(lines[i].indexOf('Signal') != -1){
                outArray.push( "175\n");
            }
            else if(lines[i].indexOf('Alerm') != -1){
                outArray.push( "176\n");
            }
        }
		else if (lines[i].indexOf('input_variable') != -1){
            outArray.push( "200\n");           
        }
        else if (lines[i].indexOf('doRepeat') != -1){
            outArray.push( "190\n");
            var para1 = strSplit(lines[i], 1, " ");
            outArray.push( para1 + "\n");
        }
        else if (lines[i].indexOf('endloop') != -1){
            outArray.push( "191\n");
        }
        else if (lines[i].indexOf('doIf') != -1){
            var para1 = strSplit(lines[i], 1, " ");	 
            if (para1 == "swon"){                
                outArray.push( "180\n");
            }
            else if (para1 == "swoff"){                
                outArray.push( "181\n");
            }
            else if (para1.indexOf('light>=') != -1){
                var parapara = strSplit(lines[i], 2, " ");
                outArray.push( "205\n");                    
                outArray.push( parapara + "\n");
            }
            else if (para1.indexOf('light<') != -1){
                var parapara = strSplit(lines[i], 2, " ");      
                outArray.push( "206\n");                    
                outArray.push( parapara + "\n"); 
            }
            else if (para1.indexOf('temp>') != -1){
                var parapara = strSplit(lines[i], 2, " ");      
                outArray.push( "184\n");                    
                outArray.push( parapara + "\n");
            }
            else if (para1.indexOf('temp<') != -1){
                var parapara = strSplit(lines[i], 2, " ");      
                outArray.push( "185\n");                    
                outArray.push( parapara + "\n");
            }
            else if (para1.indexOf('temp=') != -1){
                var parapara = strSplit(lines[i], 2, " ");      
                outArray.push( "186\n");                    
                outArray.push( parapara + "\n");
            }
            else if (para1 == "hen>x"){                
                outArray.push( "187\n");
            }
            else if (para1 == "hen<x"){                
                outArray.push( "188\n");
            }
            else if (para1 == "hen=x"){                
                outArray.push( "189\n");
            }      
        }
        else if (lines[i].indexOf('else') != -1){
            
        }
        //elseのないendif
        else if (lines[i].indexOf('endif1') != -1){
			
        }
        //elseのあるendif
        else if (lines[i].indexOf('endif2') != -1){
			
        }
        
		//次の番地　elseの番地
		if (lines[i].indexOf('doIf') != -1){
			//次の番地			
            outArray.push(get_add(i + 1, Number(if_list[i]), com_head_address, if_list) + "\n");
			//elseの番地			
            outArray.push(get_else_add(i + 1, Number(if_list[i]), com_head_address, if_list, lines) + "\n");
		}
		else if (lines[i].indexOf('endif') != -1){
            
		}
		else if (lines[i].indexOf('else') != -1){
            
		}
		//次の番地
		else{
			//次の命令がelseなら
			if (lines[i + 1].indexOf('else') != -1){
				outArray.push(get_next_else_add(i + 1, Number(if_list[i]) - 1, com_head_address, if_list) + "\n");
			}
			//次の命令がelseのないendifなら
			else if (lines[i + 1].indexOf('endif1') != -1){
				outArray.push(get_next_else_add(i + 1, Number(if_list[i]), com_head_address, if_list) + "\n");
			}
			//次の命令がelseのあるendifなら
			else if (lines[i + 1].indexOf('endif2') != -1){
				outArray.push(get_next_else_add(i + 1, Number(if_list[i]) - 2, com_head_address, if_list) + "\n");
			}
			else{
            	outArray.push(get_add(i + 1, Number(if_list[i]), com_head_address, if_list) + "\n");
			}
		}
		
    }
    return outArray.join('');
		
	}catch(e){return "";}
}
//次のコマンドがelseなら
function get_next_else_add(cnt, iflevel, addarray ,ifarray){	
	for ( var i = cnt; i < addarray.length; i++ ) {
		if (iflevel >= Number(ifarray[i])){			
			if (addarray[i] != ""){return addarray[i];}
		}
	}
	return addarray[addarray.length - 1];
}
//ifのelseの番地取得 cnt:検索開始位置　iflevel:検索開始位置のifレベル　addarrar;コマンドの開始アドレス　
function get_else_add(cnt, iflevel, addarray ,ifarray, allarray){	
	var doifcnt = 0;//ifが存在する個数
	for ( var i = cnt; i < addarray.length; i++ ) {
		//elseのあるifの場合
		if (doifcnt == 1){
			if (iflevel < Number(ifarray[i])){			
				if (addarray[i] != "" && i > cnt + 1){
					return addarray[i];
				}
			}
		}
		//elseのないifの場合
		if (doifcnt == -2){
			if (iflevel > Number(ifarray[i])){			
				if (addarray[i] != "" && i > cnt + 1){
					return addarray[i];
				}
			}
		}
		//if文があれば+1
		if (allarray[i].indexOf('doIf') != -1){
			doifcnt++;
		}
		else if (allarray[i].indexOf('else') != -1){
			doifcnt++;
		}
		else if (allarray[i].indexOf('endif') != -1){
			doifcnt -=2;
		}
	}
	return addarray[addarray.length - 1];
}
//cnt以降の次の番地取得
function get_add(cnt, iflevel, addarray ,ifarray){
	for ( var i = cnt; i < addarray.length; i++ ) {
		if (addarray[i] != ""){
			if (ifarray[i] == iflevel.toString() || ifarray[i] == (iflevel + 1).toString() || ifarray[i] == (iflevel - 1).toString()){
				return addarray[i];
			}
		}
	}	
	return addarray[addarray.length - 1];
}

//各コマンドの開始アドレスを保持
function get_head_address(dataarray){
	var add_list = new Array();
	var totalcnt=0;
	for ( var i = 0; i < dataarray.length; i++ ) {
        dataarray[i] = dataarray[i].trim();		
        if (dataarray[i].indexOf('else') != -1 || dataarray[i].indexOf('endif') != -1){
			add_list.push("");
			continue;
        }
		
		add_list.push( totalcnt.toString());
		
		if (dataarray[i] == "start"){			
            totalcnt += 2;
		}
        else if (dataarray[i].indexOf('turnOn') != -1){
            totalcnt += 5;
        }
        else if (dataarray[i].indexOf('led_point') != -1){
			totalcnt += 5;
		}
        else if (dataarray[i].indexOf('led_rgb') != -1){
			totalcnt += 5;
		}
        else if (dataarray[i].indexOf('turnFade') != -1){			
           totalcnt += 5;
		}
        else if (dataarray[i].indexOf('keepon') != -1){
            if(dataarray[i].indexOf('Off') != -1){
                totalcnt += 2;   
            }
            else{
                totalcnt += 3;
            }
        }
        else if (dataarray[i].indexOf('turnBacklight') != -1){
            if(dataarray[i].indexOf('On') != -1){
                totalcnt += 4;
            }
            else if(dataarray[i].indexOf('Conti') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('Off') != -1){
                totalcnt += 2;
            }
        }
        else if (dataarray[i].indexOf('play') != -1){
            totalcnt += 2;
        }
        else if (dataarray[i].indexOf('output') != -1){
            if(dataarray[i].indexOf('outputSignal') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('outputdc_time') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('outputdc_cont') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('outputdc_off') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('outputmame_time') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('outputmame_cont') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('outputmame_off') != -1){
                totalcnt += 2;
            }			
        }
        else if (dataarray[i].indexOf('turnTimer') != -1){
            if(dataarray[i].indexOf('turnTimerFor') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('turnTimerSoundFor') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('turnTimerSWFor') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('turnTimerLightFor') != -1){
                totalcnt += 4;
            }
            else if(dataarray[i].indexOf('turnTimerDarkFor') != -1){
                totalcnt += 4;
            }
            else if(dataarray[i].indexOf('turnTimerTempFor') != -1){
                totalcnt += 4;
            }
        }
        else if (dataarray[i].indexOf('wait') != -1){
            if(dataarray[i].indexOf('Sound') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('SW') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('Light') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('Dark') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('Temp') != -1){
                totalcnt += 3;
            }
            else if(dataarray[i].indexOf('Signal') != -1){
                totalcnt += 2;
            }
            else if(dataarray[i].indexOf('Alerm') != -1){
                totalcnt += 2;
            }
        }
		else if (dataarray[i].indexOf('input_variable') != -1){
                totalcnt += 2;
        }
        else if (dataarray[i].indexOf('doRepeat') != -1){
                totalcnt += 3;
        }
        else if (dataarray[i].indexOf('endloop') != -1){
                totalcnt += 2;
        }
        else if (dataarray[i].indexOf('doIf') != -1){
            var para1 = strSplit(dataarray[i], 1, " ");	 
            if (para1 == "swon"){       
                totalcnt += 3;
            }
            else if (para1 == "swoff"){    
                totalcnt += 3;
            }
            else if (para1.indexOf('light>=') != -1){
                totalcnt += 4;
            }
            else if (para1.indexOf('light<') != -1){
                totalcnt += 4;
            }
            else if (para1.indexOf('temp>') != -1){
                totalcnt += 4;
            }
            else if (para1.indexOf('temp<') != -1){
                totalcnt += 4;
            }
            else if (para1.indexOf('temp=') != -1){
                totalcnt += 4;
            }
            else if (para1 == "hen>x"){       
                totalcnt += 3;
            }
            else if (para1 == "hen<x"){          
                totalcnt += 3;
            }
            else if (para1 == "hen=x"){              
                totalcnt += 3;
            }
        }
		
        		
		
    }
	return add_list;
}
//色からRGB値を取得
function get_colordata(color){
    if (color == "Red"){return "255 0 0 ";}
    else if  (color == "Green"){return "0 255 0 ";}
    else if  (color == "Blue"){return "0 0 255 ";}
    else if  (color == "Yellow"){return "255 255 0 ";}
    else if  (color == "Purple"){return "255 0 255 ";}
    else if  (color == "LighrBlue"){return "0 255 255 ";}
    else if  (color == "White"){return "255 255 255 ";}
    else if  (color == "Off"){return "0 0 0 ";}
}
//LED点灯用
function Change_4Byte(RGB_T_Para){   
    var All_C_data = "0";
    for ( var i = 0; i < 3; i++ ) {
        var C_par = Color_Data(strSplit(RGB_T_Para, i, " "));        
        var Binary = C_par.toString(2);          
        var cnt = "";
        for ( var j = 0; j < 6 - Binary.length; j++ ) {
            cnt += "0";
        }        
        Binary = cnt + Binary;
        All_C_data = All_C_data + Binary;
    }
    var Binarytime = strSplit(RGB_T_Para, 3, " ");
    Binarytime = Number(Binarytime).toString(2);
    var cnt = "";
    for ( var j = 0; j < 7 - Binarytime.length; j++ ) {
        cnt += "0"
    }   
    Binarytime =  cnt+ Binarytime;
    All_C_data = All_C_data + Binarytime;
    All_C_data += "000000";
    
    return All_C_data;
}
//フェードインアウト用
function Change_3Byte(RGB_T_Para){   
    var All_C_data = "0";
    for ( var i = 0; i < 3; i++ ) {
        var C_par = Color_Data(strSplit(RGB_T_Para, i, " "));        
        var Binary = C_par.toString(2);          
        var cnt = "";
        for ( var j = 0; j < 6 - Binary.length; j++ ) {
            cnt += "0";
        }        
        Binary = cnt + Binary;
        All_C_data = All_C_data + Binary;
    }
    var Binarytime = strSplit(RGB_T_Para, 3, " ");
    Binarytime = Number(Binarytime).toString(2);
    var cnt = "";
    for ( var j = 0; j < 5 - Binarytime.length; j++ ) {
        cnt += "0"
    }   
    Binarytime =  cnt+ Binarytime;
    All_C_data = All_C_data + Binarytime;
    
    return All_C_data;
}
//0～255を0～100に変換
function Color_Data(No){
    var xy = (No * 100 / 255) / 12;
    var vis= Math.ceil(Math.pow(xy, 2)) ;
    if ( vis > 63 ) {
        return 63;
    }
    else{
        return vis;
    }
}
//文字列を分解（str：文字列 , no：何番目を取得するか）
function strSplit(str, no, kugiri){
    var strArray = str.split(kugiri);
    return strArray[no];
}
//textareaの内容を配列にセット
function splitByLine() {
    //改行コードを\nに統一
    var text  = document.getElementById('proText').value.replace(/\r\n|\r/g, "\n");
    var lines = text.split( '\n' );
    var outArray = new Array();

    for ( var i = 0; i < lines.length; i++ ) {
        // 空行があれば終了
        if ( lines[i] == '' ) {
            break;
        }
        //lines[i] = lines[i].replace(",","");
        outArray.push( lines[i] +"\n");
    }
    return outArray;
}
//消費メモリ表示
function disp_memory(){//文字プログラムに変換
    outputProData();
    //転送データに変換
    changeSendData();
	//改行コードを\nに統一
	var text  = document.getElementById('sendText').value.replace(/\r\n|\r/g, "\n");
	var lines = text.split( '\n' );
	alert("消費メモリ数は" + (lines.length - 3).toString() + "/120 です");
}
//ローカルストレージへプログラムの自動保存
function autosave(){
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var text = Blockly.Xml.domToText(xml);
	localStorage.setItem("cuc7_mainpro",  text);
}
function autosavefile_read(){
	var ABC = localStorage.getItem( "cuc7_mainpro" ); // なかったらnullが返る
	if ( ABC ){
		var xml = Blockly.Xml.textToDom(window.localStorage["cuc7_mainpro"]);
		//console.log(xml);
		if (xml != ""){
			workspace.clear();
			Blockly.Xml.domToWorkspace(xml, workspace);
		}
	}
}
//HIDデバイスの転送
function sendHID(){ 
	try{
	//プログラムの自動保存
	autosave();
	//console.log(usb_info_HID());
	if (usb_info_HID() == false){		
        alert("オーロラクロック2Nが接続されておりません");
		return;
	}
    //文字プログラムに変換
    outputProData();
    //転送データに変換
    changeSendData();
	//改行コードを\nに統一
    var text  = document.getElementById('sendText').value.replace(/\r\n|\r/g, "\n");
    var lines = text.split( '\n' );    
    if (lines.length > 120){ alert("データ転送量が超えています。"); }
    for  (var i = 0; i < lines.length; i++) { 
        if (lines[i] == "230"){
            break;
        }
        if (i == lines.length - 1){
            alert("開始命令がありません。");
            throw new Error("エラーメッセージ");
        }
    }
    //for  (var i = 0; i < lines.length; i++) { 
    //    if (lines[i] == "231"){
    //        break;
    //    }
    //    if (i == lines.length - 1){
    //        alert("終了命令がありません。");
    //        throw new Error("エラーメッセージ");
    //    }
    //}        
	
	var startArray = new Array(); 
	
	startArray.push("240");		
	for  (var i = 0; i < lines.length; i++) {
		if (lines[i] == ""){break;}
		startArray.push(lines[i]);	
	}
	startArray.push("250");	
	document.getElementById("tenso_status").style.display ="block";		
	document.getElementById("jikko_status").style.display ="none";
	transferHID(startArray);	
		
    }catch(e){}
}
//HIDデバイスの実行
function runHID(){
	if (usb_info_HID() == false){		
        alert("オーロラクロック2Nが接続されておりません");
		return;
	}
	let runData = new Array();
	runData[0] = 0xF1;	//LED実行
	//runData[0] = 0xF3;	//音プログラム実行
	document.getElementById("tenso_status").style.display ="none";		
	document.getElementById("jikko_status").style.display ="block";
	transferHID(runData);
}
//転送処理(iPad)
function sendHID_iPad() {    
	try{
	//プログラムの自動保存
	autosave();
		
    //文字プログラムに変換
    outputProData();
    //転送データに変換
    changeSendData();
	//改行コードを\nに統一
    var text  = document.getElementById('sendText').value.replace(/\r\n|\r/g, "\n");
    var lines = text.split( '\n' );    
    if (lines.length > 120){ alert("データ転送量が超えています。"); }
    for  (var i = 0; i < lines.length; i++) { 
        if (lines[i] == "230"){
            break;
        }
        if (i == lines.length - 1){
            alert("開始命令がありません。");
            throw new Error("エラーメッセージ");
        }
    }
    //for  (var i = 0; i < lines.length; i++) { 
    //    if (lines[i] == "231"){
    //        break;
    //    }
    //    if (i == lines.length - 1){
    //        alert("終了命令がありません。");
    //        throw new Error("エラーメッセージ");
    //    }
    //}
        
	document.form6.textarea5.value ="";
    var blcnt = Math.ceil(lines.length / 16);//32バイトずつ転送するので何ブロックあるか
    for  (var i = 0; i < blcnt; i++) {
		var sendArray = new Array(19);   
    	sendArray.fill(0);
		sendArray[0] = 253;
		sendArray[1] = 1;// 1:転送 2:実行
		sendArray[2] = i + 1;
		for (var j = 0; j < 16; j++) {
			if ((i * 16 + j) > lines.length -1){break;}
        	sendArray[j + 3] = Number(lines[i * 16 + j]);			
		}
		sendDataBySound(sendArray);  				
    	sleep(500);   		  
		//console.log(sendArray);
		document.form6.textarea5.value +=sendArray+"\n";
	}

		
    }catch(e){}
}
//実行処理(iPad)
function runHID_iPad(){
	var sendArray = new Array(19);   
	sendArray.fill(0);
	sendArray[0] = 253;
	sendArray[1] = 2;// 1:転送 2:実行
	
	sendDataBySound(sendArray);
}
// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
//レポート内容を文字列化（保存時使用）
function report_txt(){
	var r_st = "REPORT" + "\n";
	r_st += "nen=" + document.getElementById('print_nen').value + "\n";
	r_st += "kumi=" + document.getElementById('print_kumi').value + "\n";
	r_st += "ban=" + document.getElementById('print_ban').value + "\n";
	r_st += "name=" + document.getElementById('print_name').value + "\n";
	r_st += "title=" + document.getElementById('print_title').value + "\n";
	r_st += "koso=" + document.getElementById('print-text-koso').value.replace(/\r\n|\r|\n/g, '<br>') + "\n";
	r_st += "siyo=" + document.getElementById('print-text-siyo').value.replace(/\r\n|\r|\n/g, '<br>') + "\n";
	r_st += "kuhu=" + document.getElementById('print-text-kuhu').value.replace(/\r\n|\r|\n/g, '<br>') + "\n";
	r_st += "kanso=" + document.getElementById('print-text-kanso').value.replace(/\r\n|\r|\n/g, '<br>') + "\n";
	return r_st;
}
//ファイルへ保存
function downloadCode() {
    //文字プログラムに変換
    outputProData();
    //転送データに変換
    changeSendData();
	//改行コードを-に統一
    var s_text  = document.getElementById('sendText').value.replace(/\r\n|\r|\n/g, '-');
	
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var text = Blockly.Xml.domToText(xml);
	text = text + "\n" + report_txt() + "SEND=" + s_text;
	
	text += "\n" + create_share_list();
	//console.log(text);
	var result = prompt("ファイル名を入力してください");
	if (result == null){return;}

	const a = document.createElement('a');
	a.href = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
	a.download = result + ".cuc7";
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

}
//ファイルへ保存(iPad用)
function downloadCode_ipad() {
    //文字プログラムに変換
    outputProData();
    //転送データに変換
    changeSendData();
	//改行コードを-に統一
    var s_text  = document.getElementById('sendText').value.replace(/\r\n|\r|\n/g, '-');
	
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var text = Blockly.Xml.domToText(xml);
	text = text + "\n" + report_txt() + "SEND=" + s_text;
	
	text += "\n" + create_share_list();
	
	var result = prompt("ファイル名を入力してください");
	if (result == null){return;}

	const a = document.getElementById("filesave");
	a.href = URL.createObjectURL(new Blob([text], {type: 'application/octet-stream'}));
	a.download = result + ".cuc7";
}

//ファイルから読み込み
function uploadCode(datast) {
	var readdata ="";
	if (datast.indexOf("REPORT") != -1){
		readdata = datast.substring(0, datast.indexOf("REPORT"));
	}
	else{
		readdata = datast.substring(0, datast.indexOf("SEND="));	
	}
	//console.log(readdata);
	var xml = Blockly.Xml.textToDom(readdata);
	workspace.clear();
	Blockly.Xml.domToWorkspace(xml, workspace);

	if (datast.indexOf("REPORT") != -1){
		var text = datast.replace(/\r\n|\r/g, "\n");		
        var lines = text.split( '\n' );
		var flag = false;
		for  (var i = 0; i < lines.length; i++) {
			if (lines[i] == "REPORT"){
				flag = true;
				continue;
			}
			if (lines[i].indexOf("SEND=") != -1){
				flag = false;
				return;
			}
			if (flag) {
				var shosai = lines[i].split('=');
				if (lines[i].indexOf("nen=") != -1){
					document.getElementById('print_nen').value = shosai[1];
				}
				else if (lines[i].indexOf("kumi=") != -1){
					document.getElementById('print_kumi').value = shosai[1];
				}
				else if (lines[i].indexOf("ban=") != -1){
					document.getElementById('print_ban').value = shosai[1];
				}
				else if (lines[i].indexOf("name=") != -1){
					document.getElementById('print_name').value = shosai[1];
				}
				else if (lines[i].indexOf("title=") != -1){
					document.getElementById('print_title').value = shosai[1];
				}
				else if (lines[i].indexOf("koso=") != -1){
					document.getElementById('print-text-koso').value = shosai[1].replace(/<br>/g, '\n');
				}
				else if (lines[i].indexOf("siyo=") != -1){
					document.getElementById('print-text-siyo').value = shosai[1].replace(/<br>/g, '\n');
				}
				else if (lines[i].indexOf("kuhu=") != -1){
					document.getElementById('print-text-kuhu').value = shosai[1].replace(/<br>/g, '\n');
				}
				else if (lines[i].indexOf("kanso=") != -1){
					document.getElementById('print-text-kanso').value = shosai[1].replace(/<br>/g, '\n');
					return;
				}
			}
		}
	}
}
//プログラムの印刷
function printBlock() {
	//idを取得
	let textkoso = document.getElementById('print-text-koso').value.replace(/\r\n|\r|\n/g, '<br>');
	if (textkoso == ""){textkoso = "<br><br><br><br><br>"}
	let koso = document.getElementById('print-koso');
	koso.innerHTML = textkoso;
	let textsiyo = document.getElementById('print-text-siyo').value.replace(/\r\n|\r|\n/g, '<br>');
	if (textsiyo == ""){textsiyo = "<br><br><br><br><br>"}
	let siyo = document.getElementById('print-siyo');
	siyo.innerHTML = textsiyo;
	let textkuhu = document.getElementById('print-text-kuhu').value.replace(/\r\n|\r|\n/g, '<br>');
	if (textkuhu == ""){textkuhu = "<br><br><br><br><br>"}
	let kuhu = document.getElementById('print-kuhu');
	kuhu.innerHTML = textkuhu;
	let textkanso = document.getElementById('print-text-kanso').value.replace(/\r\n|\r|\n/g, '<br>');
	if (textkanso == ""){textkanso = "<br><br><br><br><br>"}
	let kanso = document.getElementById('print-kanso');
	kanso.innerHTML = textkanso;
	//表示非表示を反転
	document.getElementById("print-koso").style.display ="block";
	document.getElementById("print-siyo").style.display ="block";
	document.getElementById("print-kuhu").style.display ="block";
	document.getElementById("print-kanso").style.display ="block";
	document.getElementById("print-text-koso").style.display ="none";
	document.getElementById("print-text-siyo").style.display ="none";
	document.getElementById("print-text-kuhu").style.display ="none";
	document.getElementById("print-text-kanso").style.display ="none";
	window.print();	//window全体を印刷
	//表示に戻す
	document.getElementById("print-koso").style.display ="none";
	document.getElementById("print-siyo").style.display ="none";
	document.getElementById("print-kuhu").style.display ="none";
	document.getElementById("print-kanso").style.display ="none";
	document.getElementById("print-text-koso").style.display ="block";
	document.getElementById("print-text-siyo").style.display ="block";
	document.getElementById("print-text-kuhu").style.display ="block";
	document.getElementById("print-text-kanso").style.display ="block";
}
//印刷エリアの表示
function printDisplay() {
	document.getElementById("printhead").style.display ="block";
}
//印刷エリアの非表示
function printNoDisplay() {
	document.getElementById("printhead").style.display ="none";
}
//ストレージへ保存
function saveCode() {
	var savedPrefix = 'saved.hisatomi-cuc7.blk.';    //ローカルストレージに保存する時のキー
	if ('localStorage' in window) {
        var name = null;
        while (!name) {
          name = window.prompt('プログラム名を入力してください');
          if (!name) { return; } // ignore if empty
          if (window.localStorage[savedPrefix + name]) {
            if (! window.confirm(name + ' は存在します。上書きしますか?')) {
              name = null;
            }
          }
        }
        name = savedPrefix + name;
        var xml = Blockly.Xml.workspaceToDom(workspace);
        window.localStorage.setItem(name, Blockly.Xml.domToText(xml));
      }
}
//ストレージへ保存されたファイルの表示処理
function restoreBlocks() {
	var savedBlockPrefix = 'saved.hisatomi-cuc7.blk.';
	if ('localStorage' in window) {
	  var modal = document.getElementById('restoreModal');
	  var list  = document.getElementById('restoreList');
	  var items = [];
	  for (var key in window.localStorage) {
		if (key.startsWith(savedBlockPrefix)) {
		  var keyBody = key.substr(savedBlockPrefix.length);
		  items.push(keyBody);
		}
	  }
	if (items.length == 0) {
		window.alert('保存されているプログラムはありません');
		return;
	}
	items.sort();
	var itemsHtml = '';
	for (var i = 0; i < items.length; i++) {
		itemsHtml += '<li><a onclick="restoreBlocksFrom(\'' +
					 items[i] + '\')">' + items[i] + '</a></li>';
		}
		list.innerHTML = itemsHtml;
		modal.style.display = 'block';
	}
}
//ストレージから読み込み
function restoreBlocksFrom(name) {
	var savedBlockPrefix = 'saved.hisatomi-cuc7.blk.';
	var modal = document.getElementById('restoreModal');
	modal.style.display = 'none';
	if (!name) { return; } // ignore if empty
	if (window.localStorage[savedBlockPrefix + name]) {
		name = savedBlockPrefix + name;		
		var xml = Blockly.Xml.textToDom(window.localStorage[name]);
		workspace.clear();
		Blockly.Xml.domToWorkspace(xml, workspace);
	} else {
		window.alert('Error: ' + name + ' がありません');
	}
}
function cancelRestoreBlocks() {
	var modal = document.getElementById('restoreModal');
	modal.style.display = 'none';
}
function pressCancelRestoreBlocks(event) {
	var modal = document.getElementById('restoreModal');
	if (event.target == modal) {
		cancelRestoreBlocks();
	}
}
function settime(){
	var sendArray = new Array(64);   
    sendArray.fill(255);
	sendArray[0] = "247";
	sendArray[1] = document.getElementById('jikoku_nen').value;
	sendArray[2] = document.getElementById('jikoku_gatu').value;
	sendArray[3] = document.getElementById('jikoku_niti').value;
	sendArray[4] = document.getElementById('jikoku_ji').value;
	sendArray[5] = document.getElementById('jikoku_hun').value;
	
	var alermcheck = document.getElementById('alermon');
	if (alermcheck.checked){ sendArray[6] = "1"; }
	else{ sendArray[6] = "0"; }
	
	sendArray[7] = document.getElementById('alerm_ji').value;
	sendArray[8] = document.getElementById('alerm_hun').value;
	//sendArray[9] = "250";	

	//console.log(sendArray);	
	transferUSB4(sendArray);  			
}

function settimeHID(){
	if (usb_info_HID_all() == false){		
        alert("デバイスが接続されておりません");
		return;
	}
	var sendArray = new Array(19);   
    sendArray.fill("255");
	sendArray[0] = "247";
	sendArray[1] = document.getElementById('jikoku_nen').value;
	sendArray[2] = document.getElementById('jikoku_gatu').value;
	sendArray[3] = document.getElementById('jikoku_niti').value;
	sendArray[4] = document.getElementById('jikoku_ji').value;
	sendArray[5] = document.getElementById('jikoku_hun').value;
	
	var alermcheck = document.getElementById('alermon');
	if (alermcheck.checked){ sendArray[6] = "1"; }
	else{ sendArray[6] = "0"; }
	
	sendArray[7] = document.getElementById('alerm_ji').value;
	sendArray[8] = document.getElementById('alerm_hun').value;	  
	//console.log(sendArray);
	transferHID(sendArray);		
	document.form3.textarea2.value +=sendArray+"\n";
}

function settime_iPad(){
	var sendArray = new Array(19);   
    sendArray.fill("255");
	sendArray[0] = "247";
	sendArray[1] = document.getElementById('jikoku_nen').value;
	sendArray[2] = document.getElementById('jikoku_gatu').value;
	sendArray[3] = document.getElementById('jikoku_niti').value;
	sendArray[4] = document.getElementById('jikoku_ji').value;
	sendArray[5] = document.getElementById('jikoku_hun').value;
	
	var alermcheck = document.getElementById('alermon');
	if (alermcheck.checked){ sendArray[6] = "1"; }
	else{ sendArray[6] = "0"; }
	
	sendArray[7] = document.getElementById('alerm_ji').value;
	sendArray[8] = document.getElementById('alerm_hun').value; 		  
	//console.log(sendArray);
	sendDataBySound(sendArray);
	//document.form6.textarea5.value +=sendArray+"\n";
}